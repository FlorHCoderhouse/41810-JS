const cuentasUsuarioNuevo = [
    {
        tipo: 'pesos',
        simbolo: '$',
        numero: '120485',
        saldo: 50000
    }, {
        tipo: 'dolares',
        simbolo: 'u$s',
        numero: '220007',
        saldo: 87
    },
    {
        tipo: 'pesos',
        simbolo: '$',
        numero: '120500',
        saldo: 23000
    },
    {
        tipo: 'pesos',
        simbolo: '$',
        numero: '120930',
        saldo: 85500
    }, {
        tipo: 'dolares',
        simbolo: 'u$s',
        numero: '220485',
        saldo: 1000
    },
    {
        tipo: 'dolares',
        simbolo: 'u$s',
        numero: '221501',
        saldo: 230
    }
]


//Elementos que usaré del DOM
const btnSiguiente = document.getElementById('btnSiguiente'),
    btnCancelar = document.getElementById('btnCancelar'),
    btnUltima = document.getElementById('btnUltima'),
    btnVolver = document.getElementById('btnVolver'),
    formDatos = document.getElementById('ingresoDatosPF'),
    monto = document.getElementById('monto'),
    dias = document.getElementById('dias'),
    tipoPF = document.getElementById('tipoPF'),
    cuentas = document.getElementById('cuentas'),
    checkDatos = document.getElementById('guardarDatos'),
    cardIngreso = document.querySelector('.cardIngreso'),
    confirmacion = document.querySelector('.confirmacion'),
    tasaPesos = 0.61,
    tasaDolares = 0.01;

//Clase constructora de objetos PF
class PF {
    constructor(monto, dias, tipoPF, numeroCuenta) {
        this.monto = parseFloat(monto);
        this.dias = parseInt(dias);
        this.tipoPF = tipoPF;
        this.numeroCuenta = numeroCuenta;
    }

}


//Elegir del array de todas las cuentas, aquellas que sean las que el usuario elige en el simulador, sólo en pesos o sólo en dólares
function elegirTipoCuenta(cuentasUsuario, tipo) {
    return cuentasUsuario.filter(cuenta => cuenta.tipo == tipo);
}


//Crear las opciones del select según el tipo de cuenta elegida (usa el array que devuelve la función elegirTipoCuenta)
function mostrarCuentas(cuentasUsuario) {
    for (const cuenta of cuentasUsuario) {
        let option = `<option value="${cuenta.numero}" id="cuenta${cuenta.numero}">CA ${cuenta.simbolo} Nº ${cuenta.numero} - ${cuenta.simbolo} ${cuenta.saldo}</option>`

        cuentas.innerHTML += option;
    }
}

//Este evento ejecuta las funciones al momento de que se carga la página en la ventana
window.onload = mostrarCuentas(elegirTipoCuenta(cuentasUsuarioNuevo, tipoPF.value));

//Cuando cambia el select, se crea el otro select de manera dinámica
tipoPF.onchange = () => {
    cuentas.innerHTML = '';
    mostrarCuentas(elegirTipoCuenta(cuentasUsuarioNuevo, tipoPF.value));
}

//Crear el objeto plazo fijo usando el constructor de la class PF
function crearObjetoPF() {
    return new PF(monto.value, dias.value, tipoPF.value, cuentas.value);
}

//Guarda el objeto PF en el localStorage, con la key 'plazoFijo'
function guardarPFenStorage(pf) {
    localStorage.setItem('plazoFijo', JSON.stringify(pf));
}

//Esta función va a recuperar un objeto del storage si se guardó (a través de la key), y a devolver false si no existe
function recuperarPFDeStorage(pf) {
    let plazoFijo = JSON.parse(localStorage.getItem(pf));

    if (plazoFijo == null) {
        return false;
    } else {
        return plazoFijo;
    }

}


//Hago el cálculo de los intereses que va a generar el plazo fijo, según los datos que me dio el usuario
function calcularIntereses(pf, tasaPesos, tasaDolares) {
    let intereses;

    if (pf.tipoPF == 'pesos') {
        intereses = (pf.monto * (tasaPesos / 365 * pf.dias));
        intereses = parseFloat(intereses.toFixed(2));
    } else {
        intereses = (pf.monto * (tasaDolares / 365 * pf.dias));
        intereses = parseFloat(intereses.toFixed(2));
    }

    return intereses;
}

//Calculo la ganancia total, usando el resultado de la función de calcularIntereses
function calcularGananciaTotal(intereses, capital) {
    return intereses + capital;
}

//Calculo cuando se va a acreditar el dinero en base a la cantidad de días que el usuario elige dejar la plata
function calcularFechaAcreditacion(pf) {
    let acreditacion = new Date();
    acreditacion.setDate(acreditacion.getDate() + pf.dias);
    return acreditacion.toLocaleDateString();
}

//Creo un objeto con los resultados de todas las operaciones anteriores
function mostrarCalculado(pf) {
    const fecha = calcularFechaAcreditacion(pf);
    const intereses = calcularIntereses(pf, tasaPesos, tasaDolares);
    const total = calcularGananciaTotal(intereses, pf.monto);

    return resultado = {
        'acreditacion': fecha,
        'intereses': intereses,
        'total': total
    }
}


//Creo los elementos que voy a mostrar en el dom, con la info del plazo fijo y de los resultados de los cálculos


function crearHTMLInfoUsuario(pf, calculos) {
    let lista = confirmacion.querySelector('ul');
    let items = [];
    for (const dato in pf) {
        let li = ` <li>${dato}: ${pf[dato]}</li>`;
        items.push(li);
    }

    for (const dato in calculos) {
        let li = ` <li>${dato}: ${calculos[dato]}</li>`;
        items.push(li);

    }

    for (const item of items) {
        lista.insertAdjacentHTML('beforeend', item);
    }

}

//Las acciones a realizarse al clickear en el botón "siguiente"
btnSiguiente.addEventListener('click', () => {
    const datosPF = crearObjetoPF();
    if (checkDatos.checked) {
        guardarPFenStorage(datosPF);
    }

    //Mostrar y ocultar las secciones que corresponden
    cardIngreso.classList.replace('visible', 'oculta');
    confirmacion.classList.replace('oculta', 'visible');

    crearHTMLInfoUsuario(datosPF, mostrarCalculado(datosPF));
    formDatos.reset();
})

//Las acciones a realizarse al clickear en el botón "cancelar"
btnCancelar.addEventListener('click', () => {
    formDatos.reset();
});

//Las acciones a realizarse al clickear en el botón "volver"
btnVolver.addEventListener('click', () => {
    //Mostrar y ocultar las secciones que corresponden
    cardIngreso.classList.replace('oculta', 'visible');
    confirmacion.classList.replace('visible', 'oculta');
    confirmacion.querySelector('ul').innerHTML = '';
})

//Las acciones a realizarse al clickear en el botón "ultima simulación"
btnUltima.addEventListener('click', () => {
    let guardado = recuperarPFDeStorage('plazoFijo');

    if (!guardado) {
        alert('No se encontraron datos previos');
    } else {
        //Mostrar y ocultar las secciones que corresponden
        cardIngreso.classList.replace('visible', 'oculta');
        confirmacion.classList.replace('oculta', 'visible');
        //Hago todos los cálculos, pero uso el objeto almacenado en el storage en vez de pedir los datos al usuario
        crearHTMLInfoUsuario(guardado, mostrarCalculado(guardado));
        formDatos.reset();
    }

})
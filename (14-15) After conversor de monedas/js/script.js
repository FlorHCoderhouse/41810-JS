const APIKEY = '78ebf190f1e57d5cf73fea9e';

const desplegable = document.querySelectorAll('form select'),
    monedaInicial = document.querySelector('#inicial select'),
    monedaFinal = document.querySelector('#monedaFinal'),
    btnConvertir = document.querySelector('#btnConversion'),
    monto = document.querySelector('#monto'),
    conversionTxt = document.querySelector('#conversionTxt'),
    btnInvertirMoneda = document.querySelector('#icono');

const crearSelectsMonedas = async () => {
    const respuesta = await fetch('./js/data.json');
    const dataJson = await respuesta.json();

    desplegable.forEach((element, index) => {
        for (const item of dataJson) {
            let monedaPredet = (index == 0) ? ((item.moneda == 'ARS') ? 'selected' : '') : ((item.moneda == 'USD') ? 'selected' : '');
            let optionHTML = `<option value="${item.moneda}" ${monedaPredet}>${item.moneda}</option>`;
            element.insertAdjacentHTML('beforeend', optionHTML);

        }

        element.addEventListener('change', e => {
            mostrarBandera(e.target);
        })
    });
}

crearSelectsMonedas();

const mostrarBandera = async (element) => {
    const respuesta = await fetch('./js/data.json');
    const dataJson = await respuesta.json();

    for (const item of dataJson) {
        if (item.moneda == element.value) {
            let imagen = element.parentElement.querySelector('img');
            imagen.src = `https://www.countryflagsapi.com/png/${item.pais}`;
        }

    }
}

function obtenerTasaCambio() {
    let montoVal = monto.value;
    if (montoVal == '' || montoVal == '0') {
        monto.value = '1';
        montoVal = 1;
    }

    conversionTxt.innerText = 'Obteniendo información...';


    const URL = `https://v6.exchangerate-api.com/v6/${APIKEY}/latest/${monedaInicial.value}`;



    fetch(URL)
        .then(response => response.json())
        .then(result => {
            console.log(result.conversion_rates);
            let tasaConversion = result.conversion_rates[monedaFinal.value];
            let resultado = (montoVal * tasaConversion).toFixed(2);
            conversionTxt.innerText = `${montoVal} ${monedaInicial.value} = ${resultado} ${monedaFinal.value}`;
        }).catch(() => {
            conversionTxt.innerText = 'Algo salió mal';
        });
}

async function cambiar() {
    let montoVal = monto.value;
    if (montoVal == '' || montoVal == '0') {
        monto.value = '1';
        montoVal = 1;
    }
    conversionTxt.innerText = 'Obteniendo información...';
    const URL = `https://v6.exchangerate-api.com/v6/${APIKEY}/latest/${monedaInicial.value}`;

    try {
        const respuesta = await fetch(URL);
        const data = await respuesta.json();
        //console.log(data.conversion_rates);
        let tasaConversion = data.conversion_rates[monedaFinal.value];
        let resultado = (montoVal * tasaConversion).toFixed(2);
        conversionTxt.innerText = `${montoVal} ${monedaInicial.value} = ${resultado} ${monedaFinal.value}`;

    } catch (e) {
        conversionTxt.innerText = 'Algo salió mal';
        console.log(e);
    }

}


window.onload = () => {

    cambiar();
}

btnConvertir.addEventListener('click', (e) => {
    e.preventDefault();
    cambiar();
})

btnInvertirMoneda.addEventListener('click', () => {
    let temp = monedaInicial.value;
    monedaInicial.value = monedaFinal.value;
    monedaFinal.value = temp;
    mostrarBandera(monedaInicial);
    mostrarBandera(monedaFinal);
    cambiar();
})



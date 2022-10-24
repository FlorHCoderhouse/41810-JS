const selectAnio = document.querySelector('#anio'),
    selectMes = document.querySelector('#mes'),
    form = document.querySelector('#formulario'),
    nombreTitular = document.querySelector('.inputNombre'),
    numeroTarjeta = document.querySelector('.inputNumTarjeta'),
    mesVencimiento = document.querySelector('.inputMes'),
    anioVencimiento = document.querySelector('.inputAnio'),
    codSeguridad = document.querySelector('.inputCodSeguridad'),
    btnEnviar = document.querySelector('#btnEnviar'),
    anios = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];


function cargarSelect(array, select) {
    array.forEach(element => {
        let option = `<option>${element}</option>`;
        select.innerHTML += option;
    });
}

cargarSelect(anios, selectAnio);
cargarSelect(meses, selectMes);


function agregarContenido(ingreso, caja) {
    ingreso.oninput = () => {
        document.querySelector(caja).innerText = ingreso.value;
    }
}

agregarContenido(numeroTarjeta, '.cajaNumTarjeta');
agregarContenido(nombreTitular, '.cajaNombre');
agregarContenido(mesVencimiento, '.mesVencimiento');
agregarContenido(anioVencimiento, '.anioVencimiento');
agregarContenido(codSeguridad, '.cajaCodSeguridad');


codSeguridad.onmouseover = () => {
    document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.dorso').style.transform = 'perspective(1000px) rotateY(0deg)';
}

codSeguridad.onmouseout = () => {
    document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.dorso').style.transform = 'perspective(1000px) rotateY(180deg)';
}

let cleave = new Cleave(numeroTarjeta, {
    creditCard: true,
    onCreditCardTypeChanged: (type) => {
        const logos = document.querySelectorAll('.logoTarjeta');
        logos.forEach(element => {
            element.src = `./img/${type}.png` //./img/visa.png
        });
    }
})

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    const data = {
        nombre: nombreTitular.value,
        numeroTarjeta: numeroTarjeta.value,
        mes: mesVencimiento.value,
        anio: anioVencimiento.value,
        codSeguridad: codSeguridad.value
    };


    Swal.fire({
        title: '¿Deseas guardar los datos de la tarjeta?',
        showCancelButton: true,
        width: 400,
        confirmButtonText: 'Guardar',
    }).then((result) => {
        formulario.reset();
        if (result.isConfirmed) {
            localStorage.setItem('data', JSON.stringify(data));
            Swal.fire('Datos guardados', '', 'success');
            setTimeout(() => {
                location.reload();
            }, 2000);


        }else if(result.dismiss === Swal.DismissReason.cancel){
            Swal.fire('Los datos no se guardaron', 'Le tenes miedo al éxito', 'error');
            setTimeout(() => {
                location.reload();
            }, 2000);
        }

    })
})
//https://http.cat/ Códigos de estado de petición (con gatitos)
//https://httpstatusdogs.com/ Códigos de estado de petición (con perritos)
//https://github.com/public-apis/public-apis +1400 APIs
//https://jsonformatter.curiousconcept.com/# formateador para archivos json



/* fetch('https://rickandmortyapi.com/api/character/').then((respuesta)=>respuesta.json()).then((info)=>console.log(info))*/

/* //Petición con método POST
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(
        {
            title: 'Mi primer post',
            body: 'Esto es un posteo de prueba',
            userId: 1,
        }
    ),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}).then((response)=>response.json())
.then((data)=>console.log(data)); */

const contenedor = document.querySelector('#contenedorTarjetas');
const container = document.querySelector('#cardContainer');
const selectCasa = document.querySelector('#casa');
const btnBuscar = document.querySelector('#buscar');
const searchBtn = document.querySelector('#search');


function filtrarCasa(array) {
    let casa = selectCasa.value;
    if (!casa) {
        return array;
    } else {
        return array.filter((item) => item.casaDeHogwarts == casa);
    }
}

function crearHTML(array) {
    contenedor.innerHTML = '';
    container.innerHTML = '';
    array.forEach((personaje) => {
        const tarjeta = `
            <div class="col">
                <div class="card h-100">
                    <img src="${personaje.imagen}" class="card-img-top" alt="${personaje.apodo}">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.apodo}</h5>
                        <p class="card-text">Nombre: ${personaje.personaje}</p>
                        <p class="card-text">Casa: ${personaje.casaDeHogwarts}</p>
                        <p class="card-text">Interpretado por: ${personaje.interpretado_por}</p>
                    </div>
                </div>
            </div>`;
        contenedor.innerHTML += tarjeta;
    })
}

btnBuscar.addEventListener('click', () => {
    fetch('./js/data.json') //un json dentro del proyecto con la info en español
        .then((response) => response.json())
        .then((data) => {
            crearHTML(filtrarCasa(data));
        })
})


function houseFilter(array) {
    let house = selectCasa.value;
    if (!house) {
        return array;
    } else {
        return array.filter((e) => e.house == house);
    }

}

function createHTML(array) {
    contenedor.innerHTML = ''
    container.innerHTML = ''
    array.forEach((personaje) => {
        const card = `
            <div class="col">
                <div class="card h-100">
                    <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                        <p class="card-text">Especie: ${personaje.species}</p>
                        <p class="card-text">Nacimiento: ${personaje.dateOfBirth}</p>
                        <p class="card-text">Casa: ${personaje.house}</p>
                        <p class="card-text">Patronus: ${personaje.patronus}</p>
                        <p class="card-text">Interpretado por: ${personaje.actor}</p>
                    </div>
                </div>
            </div>`
        container.innerHTML += card
    })
}

async function bringData(){
    const response = await fetch('https://hp-api.herokuapp.com/api/characters'); //acá traigo la info desde una API
    const data = await response.json();
    console.log(data);
    createHTML(houseFilter(data));
}

searchBtn.addEventListener('click',()=>{
    bringData();
})


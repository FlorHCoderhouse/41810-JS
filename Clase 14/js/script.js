/* let timeout= 0 //es igual a 3 segundos


console.log('1 - Soy el primer console log');


setTimeout(() => {
    console.log('2 - Hola, soy un proceso asincrónico')
}, timeout);


console.log('3 - Soy el console log final'); */


/* const btn = document.querySelector('#btn')
const foto = document.querySelector('.foto')

let tiempo = 2500;

btn.onclick=()=>{
    foto.classList.add('visible');

    setTimeout(()=>{
        foto.classList.remove('visible')
    },tiempo);
} */

/* 
//El ejemplo que usamos en Loupe

//http://latentflip.com/loupe/?code=c2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coJ0hvbGEgbXVuZG8nKQp9LCAwKTsKCmZ1bmN0aW9uIG11bHRpcGxpY2FyKHgsIHkpIHsKICAgIHJldHVybiB4ICogeTsKfQoKZnVuY3Rpb24gbW9zdHJhckN1YWRyYWRvKHgpIHsKICAgIGxldCByZXN1bHRhZG8gPSBtdWx0aXBsaWNhcih4LCB4KTsKICAgIGNvbnNvbGUubG9nKHJlc3VsdGFkbyk7Cn0KCm1vc3RyYXJDdWFkcmFkbygzKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


//Ejemplo que usamos en Loupe
setTimeout(function timeout() {
    console.log('Hola mundo')
}, 0);


function multiplicar(x, y) {
    return x * y;
}

function mostrarCuadrado(x) {
    let resultado = multiplicar(x, x);
    console.log(resultado);
}

mostrarCuadrado(3); 
 */

/* 
//El ejemplo con los jugadores de Mortal Kombat
function moverse(){
    console.log('soy Subzero y me muevo mientras espero');
}

setTimeout(function timeout() {
    console.log('Fight!')
}, 3000);


moverse();
 */


/* let contador = 0;
let interval = 1000;
const intervalo = setInterval(() => {
    console.log('Tic');
    console.log('Contador:', contador);
    contador++;


contador > 5 && clearInterval(intervalo);


}, interval); */


/* console.log("Inicio");



const fin = setTimeout(() => {
    console.log("fin")
}, 2000)
//clearTimeout(fin)

contador = 10;
if (contador > 6) {
    clearTimeout(fin)
}


setTimeout(()=>{
    cerrarSesion()
},100000)

setInterval(()=>{
    renovarToken()
},30000) */


new Promise((resolve, reject) => {
    //cuerpo de la promesa
})


let hamburguesa = true;
let noHayHamburguesa=false;

const pedirHamburguesa =(respuesta)=>{
    
    return new Promise((resolve,reject)=>{
        if(respuesta){
            resolve('vení a retirar tu hamburguesa del mostrador');
        }else{
            reject('No tenemos más pepinos');
        }
    })

    
}

/*
//console.log(pedirHamburguesa(hamburguesa));


pedirHamburguesa(hamburguesa)
.then((respuesta)=>{
console.log(respuesta);
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('Gracias, vuelva prontos');
}) 

//console.log(pedirHamburguesa(noHayHamburguesa));

pedirHamburguesa(noHayHamburguesa)
.then((respuesta)=>{
console.log(respuesta);
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('Gracias, vuelva prontos');
})*/


//Ejemplo de una llamada a una base de datos, que usa una promesa para devolver su respuesta

const DB = [{
    id: 1,
    nombre: 'Café',
    precio: 500
},
{
    id: 2,
    nombre: 'Bagel con queso',
    precio: 700
},
{
    id: 3,
    nombre: 'Carrot Cake',
    precio: 550
},
{
    id: 4,
    nombre: 'Frapucchino',
    precio: 700
},
]

const pedirProductos = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(DB)
        },2000)
    })
}

const lista = document.querySelector('#productos');
const btnProductos = document.querySelector('#btnProductos');
const btnCarrito = document.querySelector('#btnCarrito');
let carritoHTML = document.querySelector('#prodCarrito');

let carrito = []

const renderProductos =(array)=>{
array.forEach(element=>{
    let html = `<li>${element.nombre} $ ${element.precio}</li>
    <button class="agregar" id=${element.nombre}>Agregar</button>`
    lista.innerHTML += html;
})
}


btnProductos.addEventListener('click',()=>{
    pedirProductos().then((response)=>{
        let productos = response;
        console.log(productos);
        renderProductos(productos);
    }).then(()=>{
        const btnAgregar = document.querySelectorAll('button.agregar');
            //console.log(btnAgregar);
            btnAgregar.forEach(element => {
                element.onclick = () => {
                    carrito.push(element.id)
                }
            })
    })
})


btnCarrito.onclick = () => {
    //carritoHTML.innerHTML = '';
    carrito.forEach(element => {
        let html = `<li>${element} agregado al carrito</li>`
        carritoHTML.innerHTML += html

    });
}

let time = (1000)
setInterval(saludar, time);

function saludar(){
    console.log('Hola')
}
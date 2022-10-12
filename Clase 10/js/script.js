/* 
//Crear claves. Los metodos son los mismos para ambos tipos de storage
localStorage.setItem('nombre','Lucas');
localStorage.setItem('apellido','Velazquez');
sessionStorage.setItem('edad',24);
sessionStorage.setItem('esMayor',true);

//Si vuelvo a guardar una clave que ya existe, voy a sobreescribir su valor
sessionStorage.setItem('edad',23);

//Uso info del form para guardarla en el storage
let emailUsuario = document.getElementById('emailAddress');
let btnLogin = document.getElementById('btnLogin');

//La capturo del DOM mediante un botón, y la guardo
btnLogin.addEventListener('click',()=>{
    localStorage.setItem('email',emailUsuario.value);
})

 */


/* 
//Recuperar información desde el storage
let nombreUsuario = localStorage.getItem('nombre');
console.log(nombreUsuario);
let edadUsuario = sessionStorage.getItem('edad');
console.log(edadUsuario);

//Puedo averiguar cuantas claves tengo guardadas, usando la propiedad length
console.log(sessionStorage.length); */

/* //Por defecto, los valores se guardan como strings, independientemente del tipo de dato original. Y se recuperan también como strings.

sessionStorage.setItem('peso',23.4)
let pesoProducto = sessionStorage.getItem('peso');
console.log(pesoProducto);

//Una vez recuperados, hacemos algunos trucos para obtener el tipo de dato correcto
sessionStorage.setItem('altura', 1.61)
sessionStorage.setItem('esDarkMode', false);
sessionStorage.setItem('cuotas', [3, 6, 9, 12]); 

let medida = parseFloat(sessionStorage.getItem('altura'));
console.log(medida);

let modo = (sessionStorage.getItem('esDarkMode') == 'true')
console.log(modo);


let cantCuotas = sessionStorage.getItem('cuotas').split(",");
for(let i = 0; i < cantCuotas.length; i++){
    cantCuotas[i] = parseInt(cantCuotas[i]);
}
console.log(cantCuotas);
*/


/* 
//acceder a las claves del storage
for (let i = 0; i < sessionStorage.length; i++) {
    let clave =sessionStorage.key(i);
    let valor = sessionStorage.getItem(clave);
    console.log('Clave: ' + clave);
    console.log('Valor: ' +valor);
} */


/* 
//Remover claves individuales
sessionStorage.removeItem('esDarkMode');

//Limpiar todo el storage
sessionStorage.clear(); */

/* let flor = {
    user: "Flor",
    pass: 123,
    esCasada:true
} */

/* sessionStorage.setItem('user',flor);
let usuaria = sessionStorage.getItem('user');
console.log(usuaria);


//Usando JSON y sus métodos para guardar objetos en el storage
sessionStorage.setItem('usuario',JSON.stringify(flor));
console.log(sessionStorage.getItem('usuario'));

let usuarioRecuperado = JSON.parse(sessionStorage.getItem('usuario'));
console.log(usuarioRecuperado); 

/*
sessionStorage.setItem('altura',JSON.stringify(1.70));
let alturaRecuperada = JSON.parse(sessionStorage.getItem('altura'));
console.log(alturaRecuperada); */

/* let carrito = [{nombre:'Arroz',precio:150},{nombre:'Fideos',precio:200}]

localStorage.setItem('carrito',JSON.stringify(carrito)) */


//---------------------------------------//

//ejemplo en Login
let btnLogin = document.getElementById('btnLogin');
let btnVaciarTodo = document.getElementById('btnVaciarLocalStorage');
let btnVaciarSessionStorage = document.getElementById('btnVaciarSessionStorage');
let recordar = document.getElementById("rememberMe");


function guardarDatos(storage) {

    let user = document.getElementById('emailAddress').value;
    let pass = document.getElementById('password').value;

    const usuario = {
        "user": user,
        "pass": pass
    }

    storage.setItem('user', JSON.stringify(usuario))
}

function borrarDatos(storage) {
    storage.clear();
}

function borrarDatoUnico(key, storage) {
    storage.removeItem(key);
}

btnVaciarTodo.addEventListener('click', () => {
    borrarDatos(localStorage);
    borrarDatos(sessionStorage);
})

btnVaciarSessionStorage.addEventListener('click', () => {
    borrarDatos(sessionStorage);
})

btnLogin.addEventListener('click', () => {
    if (recordar.checked) {
        guardarDatos(localStorage);
    } else {
        guardarDatos(sessionStorage);
    }
})

/* recupero la info del storage al cargar la página
window.onload = () => {
    let usuarioEnStorage = JSON.parse(localStorage.getItem('user'));
    console.log(usuarioEnStorage);
    if (usuarioEnStorage) {
        alert('Hay info'); //este alert es sólo para mostrar que hay info, en realidad se haría otra cosa
        //Acá pueden usar esta info para completar los datos o recorrer un array de usuarios y loguear a la persona
    } else {
        alert('No hay info'); //este alert es sólo para mostrar que NO hay info, en realidad se haría otra cosa (o nada, se deja que la persona use el form para loguearse)
    }
} */


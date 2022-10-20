/* 
//Operador ++
let contador = 0;

contador = contador + 1;

contador +=1;

contador++; */




/* 
//Operador ternario

//condicion ? algo : otracosa

const edadUsuario = document.querySelector('#edad'); //input para cargar la edad
const btnEnviar = document.querySelector('#enviar'); // botón para disparar el evento
const alerta = document.querySelector('#alerta'); //un div que usaremos para mostrar el resultado

btnEnviar.onclick = (e) => {

    e.preventDefault();
    let edad = edadUsuario.value;
    if (edad < 13) {
        alerta.innerHTML =`<p>No puedes ingresar</p>`;
        //alerta.classList = 'negativo'; Si tengo que hacer más cosas, no puedo usar el ternario
    } else {
        alerta.innerHTML = `<p>Disfruta la película</p>`;
        //alerta.classList = 'positivo'; Si tengo que hacer más cosas, no puedo usar el ternario
    }

    //edad<13 ? alerta.innerHTML =`<p>No puedes ingresar</p>` : alerta.innerHTML = `<p>Disfruta la película</p>`;
} */



let producto = {
    nombre: 'Zapatillas',
    marca: 'Converse',
    modelo: 'Botitas',
    color: 'Rojo',
    stock: 5
}

const btnComprar = document.querySelector('#comprar');

btnComprar.onclick = (e) => {
    e.preventDefault;
    console.log('El stock es de '+producto.stock);
    producto.stock > 0 ? alert('Gracias por tu compra') : alert('Producto sin stock');
    //Estas líneas no podrían agregarse a un ternario
    //producto.stock--;
    //console.log('El nuevo stock es de '+producto.stock); 

}




/* let vidas= 2;
vidas>0 ? alert('te quedan '+vidas+' vidas'):alert('Juego finalizado'); */



/* 
//Operador AND (&&)

const carrito =[]
//carrito = ['peras'];

(carrito.length===0) && alert('Carrito vacío'); */

/* const usuario = {
    nombre: '',
    edad: 12
}

const registroUsuario = (usuario.edad>=18) && new Date();
console.log(registroUsuario); 
*/

/*
const nombreUsuario = usuario.nombre || 'nombre inexistente'

console.log(nombreUsuario);

let puerto = null;

const PORT = puerto || 4000;

console.log(PORT); */


/* const usuario2 = null;

const nuevoUsuario = usuario2?.nombre ||'Usuario inexistente';

console.log(nuevoUsuario); */

/* 
//Operador Nullish
const usuario3 = {
    nombre:'Marcia',
    apellido:'undefined',
    edad: 23,
    curso: 'Wordpress',
    deuda:0
}

const apellidoUsuario = usuario3.apellido ?? 'No se puede obtener un valor válido de la propiedad'
console.log(apellidoUsuario);

//Diferencia entre OR y NULLISH
const deudaUsuarioOr = usuario3.deuda || 'Sin información';
console.log(deudaUsuarioOr);

const deudaUsuarioNullish = usuario3.deuda ?? 'Sin información';
console.log(deudaUsuarioNullish);
 */



const estudiante2 = {
    nombre: 'Luciano',
    edad: 30,
    curso: 'Diseño UX/UI',
    telefono: {
        casa: 1122233344,
        movil: 1564978520
    }
}


//let edad = estudiante2.edad;


/* let { nombre, edad, curso, telefono:{movil} } = estudiante2

console.log(nombre);
console.log(edad);
console.log(curso);
console.log(movil);
let {telefono}=estudiante2
 console.log(telefono); */

/* const item = {
    item_id: 120,
    product_name: "TV Smart",
    price_per_unit: 80000
}

let { item_id:id, product_name:nombre, price_per_unit:precio}= item

console.log(id);
console.log(nombre);
console.log(precio); */


/* window.addEventListener('click',({x,y})=>{
    console.log(x,y);
}) */

/* 


const [a,b,c,d,e]=frutas

const [fruta1, , ,fruta4]=frutas

console.log(fruta4) */



/* const precios = [10,150,2000,12,14,36];
let minimo = Math.min(...precios);
console.log(minimo);


const frutas1 = ['peras','manzanas','naranjas', 'ananá','palta']
const frutas2 = ['naranja', 'pomelo', 'mandarina']
const frutas3 =['banana','cereza']
const frutas4=['mango','frutilla']
const muchosArray =[...frutas1, ...frutas2,...frutas3,...frutas4];



console.log(muchosArray); */

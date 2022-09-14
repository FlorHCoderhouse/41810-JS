let condicion = true;
let otraCondicion = false;
let edad = 37;
let string = '37';
let esMenor = 37 < 39;
let noEsCierto = edadUser > 30;

/* if (condicion) {
    console.log('La condición es verdadera')
}else{
    console.log('La condición es falsa');
} */

/* if (otraCondicion) {
    console.log('La condición es verdadera')
}else{
    console.log('La condición es falsa');
} */



/* if(edad==37){
    console.log('La edad es 37');
}else{
    console.log('La edad no es 37');
}*/


/* if (edad==string){
    console.log('Son iguales');
} else{
    console.log('No son iguales');
}

if (edad===string){
    console.log('Las variables son exactamente (estrictamente) iguales, en valor y tipo de datos');
} else{
    console.log('Las variables no son exactamente (estrictamente) iguales, en valor y tipo de datos');
} */


/* if (edad >= 18) {
    alert('Podés comprarte una birrita')
} else {
    alert('Rajá de acá enano')
} */



const edadObligatoria = 18;
let edadOptativa = 16;
let edadMaxima = 69;
let edadUser = parseInt(prompt('Ingresá tu edad'));

/* if(edadUser>=edadObligatoria){
    alert('Debés votar');
}else{
    alert('No debés votar');
}  */

if (edadUser >= edadObligatoria && edadUser <= edadMaxima) {
    alert('Debés votar');
} else if (edadUser >= edadOptativa || edadUser > edadMaxima) {
    alert('Podés votar si querés');
} else {
    alert('No podes votar');
}

alert('Fin del proceso');

/* 
//Ojo con el orden en el que escribimos nuestras comparaciones

if(edadUser>=edadOptativa){
    alert('Podés votar si querés')
}else if(edadUser>=edadObligatoria){
    alert('Debés votar');
}else{
    alert('No podes votar');
}

alert('Fin del proceso'); */


/* let ordenar = false;
let nota = 5;
let pelear=true;
 */

/* if(ordenar&&nota>=7){
    console.log('Podés salir');
}else{
    console.log('Te quedás en casa');
} */

/* if(ordenar||nota>=7){
    console.log('Podés salir');
}else{
    console.log('Te quedás en casa');
} */

/* if(!pelear){
    console.log('Podés salir');
}else{
    console.log('Te quedás en casa');
}
 */

let caracter = '1';
let numero = 1;

if (caracter == numero) {
    console.log('Son iguales');
}

if (caracter === numero) {
    console.log('Son iguales');
}

let letra = prompt('Ingresa X')
if (letra == 'X' || letra == 'x') {
    console.log('Ingresaste X')
}



/* let numero = 1;
let caracter ='1';

console.log(numero==caracter);
console.log(numero===caracter);

if((numero<2)&&(caracter=='1')){
    alert('Ambas condiciones son ciertas');
}


if ((numero < 2) || (caracter == '1')) {
    alert('Alguna de las condiciones es cierta, o ambas');
}

let verdadero = false;

if(!verdadero){

} */

/* let carrito;

if(!carrito){
    crearCarrito();
}else{
    agregarProductoaCarrito();
}
 */


//Acá les dejo más ejemplos, además de los que vimos en clase
/* //If
if (1<2) {
    console.log('1 es menor que 2');
}

//if-else
if (1<3) {
    console.log('1 es menor que 3');
}else{
    console.log('1 no es menor que 3');
}

//if- else if
if (edad >= 18) {
    console.log('Puede abrir una cuenta full de Youtube');
} else if (edad >= 13) {
    console.log('Podés tener una cuenta pero le vamos a preguntar a tu responsable');
} else {
    console.log('Llama a tus padres');
}

console.log('Fin del condicional'); */

/*
//Variables booleanas

let edad = 12;
let miEdad = "37";
let edadLucas = prompt('Lucas, Ingresa tu edad');
let numeroA = 15;
let numeroB =320;

//Guardo un valor booleano explícito. Puede ser true o false
let variableBooleana = false;
//Guardo el resultado de una comparación, que es un valor true o false
let variableBooleanaB = (10>2);
//puedo guardar la comparación entre otras dos variables.
let variableBool = (numeroA<numeroB);
//El operador de igualdad estricta compara el valor de la variable y también el tipo de dato
let comparacion = (miEdad === edadLucas); */


//Operadores lógicos
//> Mayor que
//< Menor que
//>= Mayor o igual que
//<= Menor o igual que
//= asignación
//== comparacion de igualdad de valor
//=== comparacion estricta (compara el valor y el tipo de dato)
//!= distinto de
//!== distinto (estricto)

/* //Atención al orden de las condiciones a evaluar
let numero = 1;

if (numero < 10) {
    console.log('El numero es menor a 10');
} else if (numero < 5) {
    console.log('El numero es menor a 5');
} else {
    console.log('El numero es mayor a 10');
}  */


/* //Evaluamos directamente una variable booleana

let booleana = false;

if(booleana){
    console.log('La variable es false');
}else{
    console.log('La variable es true');
}  */

/* let palabra = parseInt("7");
let otraPalabra =7;

console.log(palabra===otraPalabra); */

/* let nombre = prompt('Ingresa tu nombre'); */
/* let apellido = prompt('Ingresa tu apellido');

if(nombre!='' || apellido!=''){
    alert('Bienvenido/a '+nombre+' '+apellido)
}else{
    alert('Faltan datos')
}
 */


/* if((nombre!='')&&(nombre=="Flor"||nombre=="flor")){
    alert("Bienvenida "+nombre)
}else{
    alert("No sos Flor")
} */

/* Condicional 

let edadConductor = parseInt(prompt('Ingrese su edad'));

if (edadConductor >= 18) {
    console.log('Puede conducir sin acompañante');
} else if (edadConductor < 18 && edadConductor >= 13) {//Este condicional está bien pero es redundante. Si el programa llegó hasta este bloque, es porque la primera condición es falsa. No hace falta la parte de edadConductor < 18 &&
    console.log('Puede conducir con un acompañante adulto responsable');
} else {
    console.log("No puede conducir, ni solo/a ni acompañado/a")
} */
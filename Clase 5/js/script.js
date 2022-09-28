/* let nombre = "Homero";
let apellido = "Simpson";
let calle = "Av Siempreviva 742";
let edad = 38;

let nombre2 = "Marge";
let apellido2 = "Bouvier";
let calle2 = "Av Siempreviva 742";
let edad2 = 38;
 */

const personaje1={
    nombre:'Homero',
    apellido: 'Simpson',
    calle: 'Av Siempreviva 742',
    edad:38,
    peso:69
}

const personaje2 = {
    nombre: 'Marge',
    apellido: 'Bouvier',
    calle: 'Av Siempreviva 742',
    edad: 38,
    hijos:{
        primero:'Bart',
        segundo:'Lisa',
        tercero:'Maggie',
        cuarto:'Hugo'
    }
}

//La siguiente línea no funciona, porque no puedo llamar a un atributo suelto, sin nombrar primero al objeto al cual corresponde
//console.log(nombre)

/* 
//Acceder a los atributos de un objeto, notación de punto
console.log(personaje1.nombre);
console.log(personaje2.nombre);

//Acceder a los atributos de un objeto, notación de corchetes
console.log(personaje1['edad']);


//Modificar el valor de un atributo
personaje1.peso = 150;
console.log(personaje1.peso);

//Si intento asignar un valor a un atributo que no existe, JS lo crea
personaje1.esCasado = true
console.log(personaje1.esCasado);

alert('Info de '+personaje2.nombre+':\nEdad: '+personaje2.edad+' años.\nNombre del primer hijo:'+personaje2.hijos.primero) */

/* 
//Propiedad length en un objeto de tipo String. Me dice cuantos caracteres tiene
let cadena = 'La profe les miente pero porQUE los QuieRE';
console.log(cadena.length);

//Métodos de objetos JS. Son comportamientos, cosas que pueden hacer los objetos.

console.log(cadena.toUpperCase())
console.log(cadena.toLowerCase()) */


//Función constructora
function Personaje(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.hablar = function(){console.log('Hola soy '+this.nombre)}
}

//Instanciamos (creamos) objetos usando la función constructora
const personaje3 = new Personaje('Bart', 'Simpson', 10)
//console.log(personaje3.hablar());


/* //Si le pasamos parámetros de más, JS los ignora
const personaje4 = new Personaje('Simpson', 'Lisa', 8, 'parámetro extra')
console.log(personaje4); */

/* //Si le pasamos parámetros de menos, los que falta los pone undefined
const personaje5 = new Personaje('Maggie');
console.log(personaje5); */

/* //los hacemos hacer su método. Cada personaje "habla" de acuerdo a sus características
personaje3.hablar()
personaje5.hablar() */


/* //operador in
//Si el atributo existe, devuelve true
console.log('nombre' in personaje3); */

/* //Si el atributo no existe, devuelve false
console.log('colorDePelo' in personaje3);  */


//Bucle for...in para recorrer objetos
for (const propiedad in personaje3) {
    console.log(propiedad+' : '+personaje3[propiedad]);
    
}






/* 
//Ejemplo con objetos de tipo Auto
function Auto(marca, modelo, anio, puertas, combustible) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.puertas = puertas;
    this.combustible = combustible;

    this.hablar = function () {
        console.log('Hola, soy un ' + this.modelo + ' y necesito ' + this.combustible + ' para funcionar.')
    }

}

const auto1 = new Auto('Fiat','Palio',2010,3,'nafta');

let marcaUser = prompt('Ingresa la marca de tu auto').toUpperCase();
let modeloUser = prompt('Ingresa el modelo de tu auto');
let anioUser = parseInt(prompt('Ingresa el año de tu auto'));
let puertasUser = parseInt(prompt('Ingresa la cantidad de puertas de tu auto'));
let combustibleUser = prompt('Ingresa el combustible de tu auto');

const auto2 = new Auto(marcaUser,modeloUser,anioUser,puertasUser,combustibleUser); 
const auto3 = new Auto('Ford', 'ranger', 2000)

auto1.hablar()
auto2.hablar() 
auto3.hablar()

if (!('patente' in auto3)) {
    console.log('No existe la propiedad');
} else {
    console.log(auto3.patente);
}
const auto4 = new Auto('Toyota', 'Etios', 2014, 4)

console.log('puertas' in auto4);
console.log('patente' in auto4);

for (const propiedad in auto4) {
    console.log(propiedad+' : '+auto4[propiedad]);
}
 */

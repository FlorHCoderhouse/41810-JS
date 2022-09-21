
//Declaración de la función
function saludar() {
    alert('Buen día');
}

//Llamado, ejecución o invocación de la función 🧙‍♀️
//saludar();

//Función con un parámetro
function saludarConNombre(nombre) {
    alert('Buenos días, ' + nombre);
}

//Función con varios parámetros
function saludarConNombreYMomento(nombre, momento) {
    alert('Buenos/as ' + momento + ', ' + nombre);
}

/* 
saludarConNombre('Lautaro');
saludarConNombre('Laura');
saludarConNombre('Marco');
saludarConNombre('Caro'); 
*/

/* 
//Le pido datos al usuario
let nombreUsuario = prompt('Ingresa tu nombre para que te saludemos');
let momentoDelDia =prompt('Ingresa el momento del día')

//saludarConNombre(nombreUsuario);

//saludarConNombreYMomento(momentoDelDia,nombreUsuario);
//saludarConNombre(nombreUsuario, momentoDelDia);
/*
sumarDosNumeros(10,50);
sumarDosNumeros(40,23); */



function sumarDosNumeros(numeroA, numeroB) {
    let resultado = numeroA + numeroB;
    console.log(resultado);
}
/* //paso más parámetros de los necesarios. Ignora los que sobren
sumarDosNumeros(16, 40, 50); */


//Sentencia return que expone el resultado de la ejecución de la función para que pueda ser utilizado desde afuera
function dividir(numeroA, numeroB) {
    let resultado = numeroA / numeroB;
    return resultado;
}

/* 
dividir(100,2); //Devuelve 50
dividir(2,100); //Devuelve 0.02
dividir(0,2); //devuelve 0
dividir(2,0); //Devuelve Infinity

console.log(dividir(50, 5))
*/

/* function calcular(primerNumero, segundoNumero,operacion){

    switch(operacion){
        case '+':
            return primerNumero+segundoNumero;
            break;//no hace falta este break, porque return funciona como un break
        case '-':
            return primerNumero - segundoNumero;
        case '*':
            return primerNumero * segundoNumero;
        case '/':
            return primerNumero / segundoNumero;
        default:
            return 'Opción inválida';
    }
}

console.log(calcular(20,2,'/'));
console.log(calcular(150,3,'*'));
console.log(calcular(150,3,'¿')); */

/*
    //Scope
    //Declarando una variable con scope (ámbito, contexto) global
    let variableGlobal = 'Soy un variable global';

console.log(variableGlobal);

function cambiar() {
    variableGlobal = 'Me cambiaron desde una función'; //Acá modifico una variable global, desde la función
    console.log(variableGlobal);
}

cambiar();
console.log(variableGlobal);

if (true) {
    variableGlobal = 'Ahora me cambiaron desde un if'; //otra vez modifico una variable global, desde la estructura de control 
    console.log(variableGlobal);
}

function cambiarLocal() {
    let variableGlobal = 'Soy una nueva variable, solo vivo dentro de la función';//Acá estoy creando una nueva variable, que aunque se llama igual que la anterior, no es la misma, y sólo tiene scope local, sólo existe dentro de esta función
    console.log(variableGlobal);
}

//Este console me permite ver la diferencia de valores entre las variables (global y local). Este muestra la variable global
console.log(variableGlobal)
    * /

/*
//Funciones anónimas
const suma = function (a, b) {
    return a + b;
}

suma(5, 6);

//Funciones flecha
const division = (a,b) =>{
    return a/b;
}

//También las podemos escribir en una sola línea
const resta = (a, b) => {return a - b}

//Podemos prescindir de las llaves
const multiplicacion = (a, b) => a * b

//Y si reciben un solo parámetro, hasta de los paréntesis
const mensaje = x =>'El mensaje es: '+x

console.log(mensaje('las funciones flecha son lo máximo!'))
console.log(division(70,35));


*/

/*
//Ejemplo de calcular precio usando funciones flecha. Para que funcione bien, comenten todo lo anterior

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const iva = x => x * 0.21

let precioProducto = 100000
let descuento = 10000

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);

//Así lo haría si guardara cada resultado en una variable. La cosa es que después estas variables no se usan más, entonces estoy desperdiciando memoria 
//let ivaDelPrecio = iva(precioProducto)
//let precioConIMpuestos = suma(precioProducto,ivaDelPrecio)
//let precioFinal= resta(precioConIMpuestos,descuento); 

//primero calculo el iva =21000
//segundo, sumo el iva al precio del precioProducto =121000
//tercero, le resto el descuento al precio del prodcuto con iva incluido = 111000



console.log('El precio original de producto es $'+precioProducto+'. Luego de aplicarle impuestos y descuentos, el nuevo precio es $'+nuevoPrecio);
*/

//Les dejo un quiz para que comprueben conocimientos. No es obligatorio y se autocorrije
//https://forms.gle/whdDVh3WirXKREvx9




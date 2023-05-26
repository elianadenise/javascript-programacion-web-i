// JS se ejecuta hasta con errores, no se rompe.
/*
    debilmente tipado: porque todas las variables se definen igual.
    las variables pueden almacenar cualquier cosa. no sabe que tipo de dato tiene

    eventos: cualquier accion que realice el usuario.

    lenguaje imperativo: escrito en orden.

    libreria suele ser un archivo o dos que me permite hacer algo en concreto (moment.js)

    framework es todo un entorno de desarrollo y para trabajar en ese entorno tengo que levantar el servidor.
    (react js, vue js, angular js) es para facilitar el armado, permite programar mas rapido.

*/

// abrir una ventana emergente con contenido
// alert("Hola, soy un alert");

// texto en la consola
console.log("Hola, soy un mensaje en la consola");

// let tiene un alcance mas corto que var. por eso es recomendable
let dato = "Hola, soy un let";

// concatenar texto
console.log ("Hola" + dato);
console.log(`Hola ${dato}`); // alt 96

// prompt
let num = prompt("Ingrese un numero:") // llega como string
let numDos = parseInt(prompt("Ingresa un Number"));
console.log(`El numero ingresado es ${num}`);
console.log(numDos);
console.log(num + numDos); // lo toma como string 5 + 5 = 55, porque + es concatenador de strings
console.log(num * numDos); // aca no lo hace string, lo hace matematico 5 * 5 = 25
console.log(parseInt(num) + numDos); // castea 5 + 5 = 10;

console.log(isNaN(num)); // false porque Not a Number
console.log(!isNaN(numDos)); // true porque niego

if(!isNaN(num) && !isNaN(numDos)){
    console.log(num + numDos);
} else {
    console.error("error")
}

// constante
const PI = 3.14;

// funcion
function multiplicar(num1, num2, num3){
    return num1 * num2 * num3;
}

// redondeo y cantidad de decimales
let num4 = 45.32323;
num4.toFixed(); // 46
num4.toFixed(2); // 45.32

// array
let arraycito = new Array();
let array =  ["hola", 2, true];
console.log(array[2]);

array.forEach((item) =>{
    console.log(item);
})
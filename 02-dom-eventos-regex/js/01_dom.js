// seleccionar un elemento por la estructura del dom
// camino largo
let etiquetaH1 = document.body.h1;

// A C C E S O S  D I R E C T O S
// getElementsByTagName(nombreEtiqueta)
let etiquetasH2 = document.getElementsByTagName("h2");

// getElementById(nombreId)
let materia = document.getElementById("materia");

// getElementsByName(atributoName)
let opciones = document.getElementsByName("opcion");

// getElementsByClassName(nombreClase)
let textos = document.getElementsByClassName("texto");

// querySelector // trae solo el primero que encuentra
let selectorPorIde = document.querySelector("#materia");

let selectorPorClase = document.querySelector(".texto"); 

let selectorPorEtiqueta =  document.querySelector("h2");

// querySelectorAll // trae todos
let selectoresPorClase = document.querySelectorAll(".texto");
let selectoresPorEtiqueta = document.querySelectorAll("h2");


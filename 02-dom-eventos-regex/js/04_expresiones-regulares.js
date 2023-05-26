// EXPRESIONES REGULARES - regEx
// /^$/
let regexNumero = /^[0-9]{3}$/; 
// del 0 al 9 y que sean 3 caracteres.

let regexPatente = /^[A-Z]{3}[0-9]{3}$/;
let regexNumerosVarios = /^[0-9]+$/; // no pone maximo de caracteres (+)
let regexLetras = /^[a-zA-Z]+$/;

let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z._.-]+$/;

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => { // e guarda informacion del evento
    e.preventDefault();
    validar();
})

function validar(){
    let error = false;
    let mensajesError = "";

    let numero = document.getElementById("numero").value;
    if(!regexNumerosVarios.test(numero)){ 
        error = true;
        mensajesError += "<p>numero con caracteres no válidos</p>";
    }

    let apellido = document.getElementById("apellido").value;
    if(!regexLetras.test(apellido) && (apellido.length < 1 || apellido.length > 50)){
        error = true;
        mensajesError += "<p>apellido no válido</p>";
    }

    let email = document.getElementById("email").value;
    if(!regexEmail.test(email)){
        error = true;
        mensajesError += "<p>email no válido</p>";
    }

    let contrasenia = document.getElementById("contrasenia").value;


    if(error){
        document.getElementById("mensaje").innerHTML = mensajesError;
    }
    else {
        formulario.submit();
    }
}
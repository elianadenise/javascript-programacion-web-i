let formulario = document.getElementById("form");
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // evita que se genere la accion por defecto
    validar();
});

function validar(){
    let error = false;
    let mensajeDeError = "";
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let provincia = document.getElementById("provincia").value;
    let radioSexo = document.getElementsByName("sexo"); // usar name para los radio - trae coleccion de datos
    let seleccionadoAux = false;
    let condicion = document.getElementById("condiciones");
    
    if(nombre == ""){ // nombre.length == 0
        error = true;
        mensajeDeError += "<p>El campo nombre es obligatorio</p>"
    }
    if(apellido.length < 2 || apellido.length > 20){
        error = true;
        mensajeDeError += "<p>El campo apellido es obligatorio</p>"
    }
    if(provincia == 0){
        error = true;
        mensajeDeError += "<p>El campo provincia es no valido</p>"
    }
    for(i in radioSexo){
        if(radioSexo[i].checked){
            seleccionadoAux = true;
        }
    }
    if(!seleccionadoAux){
        error = true;
        mensajeDeError += "<p>Tenes que seleccionar una opcion</p>"
    }
    if(!condiciones.checked){
        error = true;
        mensajeDeError += "<p>Tenes que aceptar los terminos y condiciones</p>"
    }


    if(error){
        document.getElementById("mensaje").innerHTML = mensajeDeError;
    } else {
        formulario.submit();
    }
}


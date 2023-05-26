// K E Y U P - dejar de teclear
let campoNombre = document.getElementById("nombre");
// o let campoName = document.querySelector("#nombre");

campoNombre.addEventListener("keyup",() => {
    //console.log("Dejaste de teclear");
    // obtener valor de un input
    let nombreObtenido = campoNombre.value;
    document.getElementById("saludo").innerHTML = nombreObtenido;
    
});








// listener sobre todo el documento
// escucha todo lo que sucede en el html, no importa si estoy en un input o que
// document.addEventListener("keydown", (e) => {
//     console.log(e);
// });
let eleccionUsuario = prompt("Piedra, papel o tijera?");
let opciones = ["piedra", "papel", "tijera"];
let sorteo = Math.floor(Math.random()*3);
let juegoCompu = opciones[sorteo];
console.log(`vos elegiste ${eleccionUsuario} y la pc eligio ${juegoCompu}`);
switch(eleccionUsuario.toLocaleLowerCase()){
    case "piedra":
        if(juegoCompu == "piedra"){
            console.log("Empate")
        } else if (juegoCompu == "papel"){
            console.log("Perdiste");
        } else{
            console.log("Ganaste")
        }
        break;
    case "papel":
        if(juegoCompu == "papel"){
            console.log("Empate")
        } else if (juegoCompu == "tijera"){
            console.log("Perdiste");
        } else{
            console.log("Ganaste")
        }
        break;
    case "tijera":
        if(juegoCompu == "tijera"){
            console.log("Empate")
        } else if (juegoCompu == "piedra"){
            console.log("Perdiste");
        } else{
            console.log("Ganaste")
        }
        break;
    default:
        console.log("Dato invalido")
        break;
}
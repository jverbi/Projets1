let numeroSecreto = 0;
console.log(numeroSecreto);
let intentos = 0;
let listaNumeroSorteado = [];

function asignarTextoElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = document.getElementById("numeroUsuario").value;
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElementos("p",`Has asertado el numero en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElementos("p","El número secreto es menor");
        } else {
            asignarTextoElementos("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja()
    }
    return;
}
function limpiarCaja() {
    document.querySelector("#numeroUsuario").value = "";
}

function condicionesIniciales() {
asignarTextoElementos("h1", "Juego del Número Secreto!");
asignarTextoElementos("p", "Indica un numero del 1 al 10");
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //Generar nuevo numero y mostrarlo al jugador
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar en boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
    
}

condicionesIniciales();
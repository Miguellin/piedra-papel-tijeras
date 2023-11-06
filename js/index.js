let puntosUsuario = 0;
let puntosComputadora = 0;

let instrucciones = document.querySelector("#instruciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosComputadora = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegirArma = document.querySelector("#elegir-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-jugador");
let contenedorEleccionComputadora = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    let eleccionComputadora = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    if (eleccionComputadora === 0) {
        eleccionComputadora = "piedra🗿"
    } else if (eleccionComputadora === 1) {
        eleccionComputadora = "papel📃";
    } else if (eleccionComputadora === 2) {
        eleccionComputadora = "tijera✂";
    }


    if (
        (eleccionUsuario === "piedra🗿" && eleccionComputadora === "tijera✂") ||
        (eleccionUsuario === "tijera✂" && eleccionComputadora === "papel📃") ||
        (eleccionUsuario === "papel📃" && eleccionComputadora === "piedra🗿")
    ) {
        ganaUsuario();
    } else if (
        (eleccionComputadora === "piedra🗿" && eleccionUsuario === "tijera✂") ||
        (eleccionComputadora === "tijera✂" && eleccionUsuario === "papel📃") ||
        (eleccionComputadora === "papel📃" && eleccionUsuario === "piedra🗿")
    ) {
        ganaComputadora();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionComputadora.innerText = eleccionComputadora;
    
    if (puntosUsuario === 5 || puntosComputadora === 5) {

        elegirArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Ganaste! ✔"
}

function ganaComputadora() {
    puntosComputadora++;
    contenedorPuntosComputadora.innerText = puntosComputadora;
    contenedorGanaPunto.innerText = "¡La computadora ganó! 🤡"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 🙄"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegirArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosComputadora = 0;

    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosComputadora.innerText = puntosComputadora;

}
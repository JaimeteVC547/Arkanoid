let moverIzquierda = false;
let moverDerecha = false;

let palaX = 200; // posición inicial
let velocidad = 5;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "a"|| e.key === "A") {
        moverIzquierda = true;
    }
    if (e.key === "ArrowRight" || e.key === "d"||e.key === "D") {
        moverDerecha = true;
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft" || e.key === "a"|| e.key === "A") {
        moverIzquierda = false;
    }
    if (e.key === "ArrowRight" || e.key === "d" ||e.key === "D") {
        moverDerecha = false;
    }
});



function actualizar() {
    // mover pala
    if (moverIzquierda) {
        palaX -= velocidad;
    }
    if (moverDerecha) {
        palaX += velocidad;
    }

    // evitar que se salga de la pantalla
    if (palaX < 0) palaX = 0;
    if (palaX > 400) palaX = 400; // ajusta según tu ancho

    // aplicar posición en CSS
    document.querySelector(".pala").style.left = palaX + "px";

    requestAnimationFrame(actualizar);
}

actualizar();

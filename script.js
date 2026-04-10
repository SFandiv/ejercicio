const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/**
 * Limpia el canvas
 */
function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Función principal que se ejecuta al presionar el botón
 */
function dibujar() {
    limpiarCanvas();
/**
 * Dibuja un "pixel" en el canvas
 * @param {number} x 
 * @param {number} y 
 */
function plot(x, y) {
    ctx.fillRect(x, canvas.height - y, 1, 1);
}
}
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
/**
 * Implementación del algoritmo de Bresenham.
 */
function bresenham(x0, y1, x1, y0, plot) {
    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = (x0 < x1) ? 1 : -1;
    let sy = (y0 < y1) ? 1 : -1;
    let err = dx - dy;

    while (true) {
        
        plot(x0, y0);

        if (x0 === x1 && y0 === y1) break;
        let e2 = 2 * err;
        if (e2 > -dy) {
            err -= dy;
            x0 += sx;
        }
        if (e2 < dx) {
            err += dx;
            y0 += sy;
        }
    }
}
}
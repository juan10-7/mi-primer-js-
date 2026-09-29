// 1. Variable para almacenar el estado actual del contador
let contador = 0;

// 2. Captura de los elementos de la interfaz en el DOM
const valorPantalla = document.querySelector('#valor');
const btnIncrementar = document.querySelector('#btn-incrementar');
const btnRestar = document.querySelector('#btn-restar');

// 3. Función para cambiar dinámicamente el color del texto según el valor
function actualizarColor() {
    if (contador > 0) {
        valorPantalla.style.color = "#16a34a"; // Verde si el número es positivo
    } else if (contador < 0) {
    }
}

// 4. Evento para Incrementar (+1)
btnIncrementar.addEventListener('click', () => {
    contador++;
    valorPantalla.textContent = contador;
    actualizarColor();
});

// 5. Evento para Restar (-1)
btnRestar.addEventListener('click', () => {
    contador--;
    valorPantalla.textContent = contador;
    actualizarColor();
});
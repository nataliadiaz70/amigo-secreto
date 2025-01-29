// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
const amigos = [];

// Función para agregar un nombre al array
document.addEventListener("DOMContentLoaded", () => {

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre= input.value.trim(); // Tomar el valor del input y eliminar espacios extra

    if (nombre) {
        amigos.push(nombre); // Agregar el nombre al array
        mostrarAmigos(); // Actualizar la lista en pantalla
        input.value = ""; // Limpiar el campo de texto
    } else {
        alert("Por favor, escribe un nombre válido.");
    }
}
document.querySelector(".button-add").addEventListener("click", agregarAmigo);
});


// Función para mostrar los nombres en pantalla
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista
    nombres.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

// Función para sortear un nombre
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }
    const indiceGanador = Math.floor(Math.random() * amigos.length); // Elegir un índice aleatorio
    const amigoGanador = amigos[indiceGanador];


    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>¡El amigo sorteado es: <strong>${amigoGanador}</strong>!</li>`;

    
}

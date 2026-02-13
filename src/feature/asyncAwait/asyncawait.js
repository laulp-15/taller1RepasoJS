/*
Actividad 5: Async/Await
Agregar una descripción de Async/Await y luego implementar la siguiente función utilizando Async/Await:
* Crear una función asíncrona que reciba un número y retorne el doble del número después de 2 segundos. 
Utilizar async/await para manejar la promesa.
*/

function mostrarResultado(mensaje, tipo) {
    const resultado = document.getElementById("resultado");

    resultado.textContent = mensaje;
    resultado.className = "resultado-box";

    if (tipo === "ok") {
        resultado.classList.add("resultado-ok");
    } else {
        resultado.classList.add("resultado-error");
    }
}

function duplicarNumero(num) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (isNaN(num)) {
                reject("El valor ingresado no es un número válido.");
            } else {
                resolve(num * 2);
            }

        }, 2000);

    });
}

async function procesarNumero() {

    const input = document.getElementById("numeroInput").value.trim();

    if (input === "") {
        mostrarResultado("Escribe un número primero.", "error");
        return;
    }

    const num = Number(input);

    mostrarResultado("Procesando...", "ok");

    try {
        const resultado = await duplicarNumero(num);
        mostrarResultado("El doble es: " + resultado, "ok");
    } catch (error) {
        mostrarResultado(error, "error");
    }

}
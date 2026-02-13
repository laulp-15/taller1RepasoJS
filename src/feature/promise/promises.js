/* Actividad 4: Promesas
Agregar una descripción de promesas y luego implementar la siguiente funcion
utilizando promises:

Crear una promesa que reciba una cadena y si finaliza en vocal devuelve con el 
resolve la vocal, en caso contrario en el reject retornar "El carácter no es
una vocal", en caso contrario. Se deben tener en cuenta las vocales en 
minúsculas y mayúsculas.
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

function revisarPalabra() {
    let palabra = document.getElementById("palabraInput").value.trim();

    if (palabra === "") {
        mostrarResultado("Escribe una palabra primero.", "error");
        return;
    }

    let myPromise = new Promise(function (resolve, reject) {
        let ultimaLetra = palabra.slice(-1).toLowerCase();

        if (
            ultimaLetra === "a" ||
            ultimaLetra === "e" ||
            ultimaLetra === "i" ||
            ultimaLetra === "o" ||
            ultimaLetra === "u"
        ) {
            resolve("Termina en la vocal: " + ultimaLetra);
        } else {
            reject("El carácter no es una vocal.");
        }
    });

    myPromise.then(
        (value) => mostrarResultado(value, "ok"),
        (error) => mostrarResultado(error, "error")
    );
}
/* Actividad 3: 
1. Dado los siquientes arrays:  
baseDatos1=[‘Canada’, ‘EUA’, ‘Mexico’,‘Ecuador, ‘Brazil’, ‘Argentina’, ‘Uruguay’]
baseDatos2 =[‘Japón’, ‘Irán’, ‘Corea del Sur’, ‘Alemania’, ‘Croacia’, ‘España’, ‘Inglaterra’]

Implementar una función busquedaBaseDatos1 que busque en baseDatos1 un país, y si lo 
encuentra retorne con un call back a la función encontrado la cual debe imprimir el 
mensaje ‘pais encontrado’.

Si el dato NO se encontró en baseDatos1 deberá retornar con un callback a la función 
busquedaBaseDatos2, y si lo encuentra retornar con un callback a la función encontrado 
la cual debe imprimir el mensaje ‘Pais encontrado’.

Si el dato NO se encontró en baseDatos2 deberá mostrar el mensaje ‘Dato no encontrado’
*/


const baseDatos1 = ["Canada", "EUA", "Mexico", "Ecuador", "Brazil", "Argentina", "Uruguay"]
const baseDatos2 = ["Japón", "Irán", "Corea del Sur", "Alemania", "Croacia", "España", "Inglaterra"]

function encontrado() {
  mostrarResultado("País encontrado.", "ok")
}

function noEncontrado() {
  mostrarResultado("Dato no encontrado.", "error")
}

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

function busquedaBaseDatos1(pais, siEncontrado, noEncontradoCll) {
  if (baseDatos1.includes(pais)) {
    siEncontrado();
  } else {
    noEncontradoCll();
  }
}

function busquedaBaseDatos2(pais, siEncontrado) {
  if (baseDatos2.includes(pais)) {
    siEncontrado();
  } else {
    noEncontrado();
  }
}

function buscarPais() {
  const pais = document.getElementById("paisInput").value.trim();

  if (pais === "") {
    mostrarResultado("Escribe un pais primero.", "error");
    return;
  }

  busquedaBaseDatos1(pais,
    () => {
      encontrado();
    },
    () => {
      busquedaBaseDatos2(pais, () => {
        encontrado();
      });
    }
  );
}


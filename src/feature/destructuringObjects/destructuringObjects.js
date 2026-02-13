/*
Actividad 6: Destructuring Objects
Agregar una descripción de Destructuring Objects y luego implementar la siguiente función 
utilizando Destructuring Objects:

* Dado el siguiente objeto:
const person = {
  name: 'Juan Carlos Valencia',
  age: 30,
  city: 'Cali',
  profession: 'Desarrollador'
};          

Utilizando destructuring, extraer el nombre, la edad y la profesión de la persona e 
imprimirlos.
*/

function mostrarResultado(mensaje) {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = mensaje;

    resultado.className = "resultado-info";
}


function mostrarObjeto() {
    const person = {
        name: 'Juan Carlos Valencia',
        age: 30,
        city: 'Cali',
        profession: 'Desarrollador'
    };

    const { name, age, profession } = person;

    const mensaje = `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Edad:</strong> ${age}</p>
        <p><strong>Profesión:</strong> ${profession}</p>
    `;

    mostrarResultado(mensaje);
}


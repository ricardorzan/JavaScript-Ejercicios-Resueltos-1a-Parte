document.write(`<h3>Programa Notas</h3><hr>`);
Inicio();
Basis();
Ver();

var alumnos = [];

function Inicio() {
    var n_alum = window.prompt(`¿Cuántos alumnos desea dar de alta?`, `0`);
    for (var i = 0; i < n_alum; i++) {
//Rellena el array con espacios y les asigna 2 propiedades, "nombre" y "nota".
        alumnos.push({});
        nom = window.prompt(`Introduzca el nombre del alumno (nº ${i})`, `0`);
        alumnos[i].nombre = nom;
        alumnos[i].nota = " ";
    }
}

function Basis() {
    while (confirm(`Desea modificar la nota de algún alumno?`)) {
        Modificar();
    }
}

function Intro() {
    num = window.prompt(`Introduzca el número del alumno`, `0`);
    num = parseInt(num);
    nota = window.prompt(`Introduzca la nueva nota`, `0`);
    nota = parseInt(nota);
}

function Modificar() {
    Intro();
    alumnos[num].nota = nota;
}

function Ver() {
//Muestra el nombre y la nota para cada objeto de la array
    alumnos.forEach(function (item, index, array) {
        document.write(`Nombre: ${array[index].nombre} | Nota: ${array[index].nota}<hr>`);
    });
}
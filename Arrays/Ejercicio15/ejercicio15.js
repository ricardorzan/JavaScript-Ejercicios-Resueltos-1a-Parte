document.write(`<h3>Programa Notas</h3><hr>`);
Basis();
Ver();

var alumnos = [
    {
        "nombre": "Marcos",
        "nota": 5
    },
    {
        "nombre": "Isabel",
        "nota": 7
    },
    {
        "nombre": "Paula",
        "nota": 9
    }
]

function Basis() {
    while (confirm(`Aceptar para modificar la nota de alumno`)) {
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
        document.write(`Nombre: ${array[index].nombre} - Nota: ${array[index].nota}<br>`);
    });
}
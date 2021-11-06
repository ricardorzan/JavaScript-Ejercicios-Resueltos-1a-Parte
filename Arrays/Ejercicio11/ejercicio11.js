document.write(`<h3>Inicio del Programa Notas</h3>`);
mostrar();
lista = window.prompt(`Introduzca el número del alumno (0-5)`, `0`);
lista = parseInt(lista);
modificar(lista);
mostrar();
document.write(`<h3>Fin del Programa Notas</h3>`);

//Variables Globales
var alum = ["Ana", "Bernat", "Carol", "David", "Elena", "Francesc"];
var notas = [];
for (let i = 0; i < 6; i++) {
    notas.push(5);
}

function mostrar() {
    document.write(`<h2>Notas actuales: </h2>`);
    for (let i = 0; i < 5; i++) {
        document.write(`${i} - ${alum[i]}: ${notas[i]} <br>`);
    }
}

function modificar(numAlumno) {
    nuevaNota = window.prompt(`Introduzca su nueva nota`, `0`);
    nuevaNota = parseInt(nuevaNota);
    notas[numAlumno] = nuevaNota;
}
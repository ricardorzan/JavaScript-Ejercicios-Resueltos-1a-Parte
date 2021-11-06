var notas = new Array(6);
for (i = 1; i < 6; i++)
    notas[i] = new Array(4); // 3 asignaturas cada alumno.
function inicializar() {
    for (var i = 1; i < 6; i++) // Cada Alumno
        for (var j = 1; j < 4; j++) // 3 notas
            notas [i][j] = 0;
}

function mostrar() {
    document.write("<h3>Los datos ahora son: </h3>");
    for (var i = 1; i < 6; i++) // Cada Alumno
        for (var j = 1; j < 4; j++)
            document.write("Alumno " + i + " , nota : " + notas[i][j] + "<br>");
}

function modificar(numalumno) {
    dato = window.prompt("Introduce asignatura para cambiar nota", "0");
    asignatura = parseInt(dato);
    nuevanota = window.prompt("Introduce su nueva nota", "0");
    valornota = parseInt(nuevanota);
    notas[numalumno][asignatura] = nuevanota;
}
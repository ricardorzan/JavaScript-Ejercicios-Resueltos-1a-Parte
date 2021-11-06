var Alumnos = ["Joan", " Ana", " Juana", " Mario"];
//Creamos una nueva propiedad para el objeto Array
Array.prototype.pasarMayusculas = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
}

function Transformar() {
//Utilizamos la nueva propiedad "pasarMayusculas"
    Alumnos.pasarMayusculas();
}

function Mostrar() {
    var objVer = document.getElementById("iniciar");
    objVer.innerHTML = `${Alumnos}`;
}
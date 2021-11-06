var inicial = [10, 20, 30, 40, 60, 70, 80];
var final = [];

function ver() {
    document.getElementById("salida").innerHTML = (`${inicial}`);
    if (final.length != 0)
        document.getElementById("salida2").innerHTML = (`${final}`);
}

function efectuar(iniciales) {
    return iniciales * 2
}

function modificar(valor) {
    final = inicial.map(efectuar)
    ver();
}
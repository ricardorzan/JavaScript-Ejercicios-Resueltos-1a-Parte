var objCuadrado = (function () {
    var posX1 = 100;
    return {
        incrementarposicion() {
            return posX1 = posX1 + 20;
        },
        getposicionX(name) {
            return (document.getElementById(name).style.left);
        },
        setposicionX(name) {
            document.getElementById(name).style.left = posX1 + "px";
        },
        salirpantalla(name) {
            let cadena = "Posición:" + posX1
            document.getElementById(name).innerHTML = cadena;
        }
    };
})();

function incrementar(nom) {
    objCuadrado.incrementarposicion();
    objCuadrado.setposicionX(nom);
    objCuadrado.salirpantalla(nom);
}
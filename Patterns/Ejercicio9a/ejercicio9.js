let objContador = (function (inicio) {
    let contador = 0;
    return {
        incrementarcontador: function () {
            return contador++;
        },
        salirpantalla: function () {
            let cadena = "El contador es: " + contador;
            document.getElementById("salida").innerHTML = cadena;
        },
        resetcontador: function () {
            console.log("contador antes de reset: " + contador);
            contador = 0;
        }
    };
})();

function incrementar() {
    objContador.incrementarcontador();
    objContador.salirpantalla();
}
$(document).ready(function () {
    var dato, resultado;
    $("#entrada").keypress(function(e){
        if (e.keyCode == 13) {
            nombre = $("#entrada").val();
            $("#salida").append("Hola, buenos dias " + nombre);
        }
    });
});
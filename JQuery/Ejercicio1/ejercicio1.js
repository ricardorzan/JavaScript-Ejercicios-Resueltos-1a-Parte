$(document).ready(function () {
    var saludo = "Hola mundo!";
    $("#boton").click(function () {
        $("#salida").append(saludo);
    });
});
// fin document.ready
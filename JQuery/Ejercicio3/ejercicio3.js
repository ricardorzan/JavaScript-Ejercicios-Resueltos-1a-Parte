$(document).ready(function () {
    var saludo = "Hola mundo!";
    $("div p").click(function () {
        $("#salida").append(saludo);
    });
});
// fin document.ready
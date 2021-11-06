var cuenta = 1;
$(document).ready(function () {
    $("p").click(function () {
        alert('se presionó el párrafo');
    });
    $("#central").click(function () {
        var cadena = "se presionó " + cuenta + "veces";
        alert(cadena);
        cuenta = cuenta + 1;
    });


});
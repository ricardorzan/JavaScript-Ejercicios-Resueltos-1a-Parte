$(document).ready(function () {
    $("#titulo1").click(presionTitulo1)
});

function presionTitulo1() {
    var obj;
    obj = $("#titulo1");
    obj.css("color", "#ff0000");
    obj.css("background-color", "#ffff00");
    obj.css("font-family", "Courier");
}
$(document).ready(function () {
    var obj;
    obj = $("p");
    obj.hover(entraMouse, saleMouse);
});

function entraMouse() {
    $(this).css("background-color", "#ff0");
    $(this).css("font-size", "28");
}

function saleMouse() {
    $(this).css("background-color", "#fff");
    $(this).css("font-size", "24");
}
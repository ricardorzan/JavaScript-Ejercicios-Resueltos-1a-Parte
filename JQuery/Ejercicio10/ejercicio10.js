$(document).ready(function () {
    $("div").click(function () {
        posx = $(this).css("left");
        if (posx == "") posx = "20";
        num = parseInt(posx)
        num = num + 10;
        $(this).css("left", num);
        if ($(this).attr('id') == "cuadrado1")
            mueve("#cuadrado1", num)
    });

    function mueve(objeto, pos) {
        pos = pos + 30;
        $(objeto).css("left", pos)
    }
});
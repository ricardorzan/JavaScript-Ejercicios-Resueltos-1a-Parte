let edad, num;
edad = prompt("edad?", "0");
if (edad < 1 || edad > 120) {
    if (edad >= 18) {
        document.write(`<h3> Bienvenid@ </h3>`);
    } else {
        document.write(`<h3> No tiene acceso </h3>`);
    }
} else {
    document.write(`<h3> No permitido </h3>`);
}
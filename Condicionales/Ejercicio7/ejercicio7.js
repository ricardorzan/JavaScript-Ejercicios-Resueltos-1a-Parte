let FP, edad;

FP = prompt("FP?", "0");
edad = prompt("edad?", "0");
if ((FP == "si") && (edad >= 18)) {
    document.write(`<h3> Bienvenid@ </h3>`);
} else {
    document.write(`<h3> No tiene acceso </h3>`);
}
function calc() {
    var nota1 = parseInt(document.game.nota1.value);
    var porcentaje1 = document.game.porcentaje1.value;
    var nota2 = parseInt(document.game.nota2.value);
    var porcentaje2 = parseInt(document.game.porcentaje2.value);
    let calc1 = (nota1 * porcentaje1) / 10
    let calc2 = (nota2 * porcentaje2) / 10
    let resultado = (calc1 + calc2) / 2
    document.getElementById("salida").value = ("Tu nota ponderada es: " + resultado);
}
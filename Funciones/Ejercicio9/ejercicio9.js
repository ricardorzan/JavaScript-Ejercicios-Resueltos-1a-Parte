let dato1, dato2, num1, num2;
dato1 = window.prompt("Introduce primer número ?", "0");
num1 = parseInt(dato1);
dato2 = window.prompt("Introduce segundo número ?", "0");
num2 = parseInt(dato2);

Suma(num1, num2)

function Suma(num1, num2) {
    let resultado = num1 + num2;
    document.getElementById("salida").innerHTML = `Resultado de la suma de ${num1} y ${num2} es ${resultado}`;
}
let dato1, dato2, num1, num2, resultado;
dato1 = window.prompt("Primer número?", "0");
num1 = parseInt(dato1);
dato2 = window.prompt("Segundo número?", "0");
num2 = parseInt(dato2);
if (num1 > num2) {
    resultado = " el primero";
    document.write(` <h3>El mayor es ${resultado} </h3> `);
} else {
    if (num2 > num1) {
        resultado = " el segundo";
        document.write(` <h3>El mayor es ${resultado} </h3> `);
    } else {
        document.write(` <h3>Los numeros son iguales </h3> `);
    }
}
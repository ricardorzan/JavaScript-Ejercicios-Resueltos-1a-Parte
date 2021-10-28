let dato, num;
dato = window.prompt("Introduce un número ?", "0");
num = parseInt(dato);
let resultado = num * 2;
document.getElementById("salida").innerHTML = (`El doble es ${resultado} `);
let dato, num;
dato = window.prompt("Introduce número ?", "0");
num = parseInt(dato);
dato2 = window.prompt("Introduce otro número ?", "0");
num = dato - dato2;
num2 = dato * dato2;
document.write(`La resta de ${dato} menos ${dato2} es ${num} `);
document.write(`La multiplicación de ${dato} por ${dato2} es ${num2} `);
var dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"];
document.write("<h2>Días de la semana</h2>");
dato = window.prompt("Introduce número del 0 al 6", "0");
num = parseInt(dato);
document.write(` <br> El dia introducido es: ${dias[num]} `);
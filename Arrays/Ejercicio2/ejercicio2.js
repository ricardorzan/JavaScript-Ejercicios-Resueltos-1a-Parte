var dias = ["lunes", "martes", "miércoles", "jueves", "viernes"];
document.write("<h2>Días de la semana</h2>");
final = (dias.length - 1);
for (var i = final; i > 1; i = i - 2)
    document.write(` ${dias[i]} <br> `);
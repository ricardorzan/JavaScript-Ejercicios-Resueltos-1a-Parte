/* forEach utiliza elementos de la Array que tengan un índice,
de esta manera evitamos problemas con índices vacios.*/
var nuevosCoches = ["Seat", "Renault", "Alfa Romeo", "Peugeot"];
document.write("<h2>Marcas de Coches</h2>");
nuevosCoches.forEach(function (item, index) {
    document.write(`${item} <br>`);
});
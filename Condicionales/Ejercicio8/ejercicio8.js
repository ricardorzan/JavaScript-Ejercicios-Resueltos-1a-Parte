let marca, modelo, descuento = 0;

marca = prompt("Marca?", "0");
modelo = prompt("Modelo?", "0");
if (marca == "ford")
    if (modelo == "fiesta") {
        descuento = 5;
    } else {
        descuento = 10;
    }
document.write(`<h3>Su descuento es ${descuento} </h3> `);
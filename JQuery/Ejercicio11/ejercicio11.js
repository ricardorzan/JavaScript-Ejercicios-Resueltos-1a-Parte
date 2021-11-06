let origen, modelo, descuento = 0;

origen = prompt("Origen?", "");
destino = prompt("Destino?", "");
if (origen == "palma") {
    if (destino == "barcelona") {
        descuento = 5;
    }
    if (destino == "madrid") {
        descuento = 10;
    }
    if (destino == "valencia") {
        descuento = 15;
    }
    document.write(`<h3>Su descuento es ${descuento} </h3> `);
}
document.write(`<h3> No hay descuento </h3> `);
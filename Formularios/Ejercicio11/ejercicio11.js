function pesoreferencia(datoaltura = 1, datopeso = 1, datoedad = 1, datosexo = "N") {
    let altura = parseInt(datoaltura);
    let edad = parseInt(datoedad);
    let peso = parseInt(datopeso);

    if (datosexo == "h" || datosexo == "H") {
        peso = 50 + ((altura - 150) / 4) * 3 + (edad - 20) / 4;
    } else peso = peso * 0.9;
    document.getElementById("resultado").innerHTML = peso;
}
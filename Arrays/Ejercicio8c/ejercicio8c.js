class ficha {
    constructor() {
        this.arrayNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]
    }

    arrayMenoresX() {
        let arrayMenores = [];
        let cota = parseInt(document.getElementById("txtMenor").value);
        let datos = this.arrayNumeros;
        for (let i = 0; i < datos.length; i++) {
            if (datos[i] < cota) arrayMenores[i] = datos[i];
        }
        document.getElementById("salidaDatos").innerHTML = arrayMenores;
    }

    mostrarMayorX(cota) {
        var texto = "";
        let datos = this.arrayNumeros;
        datos.forEach(function (item, index) {
            if (item > cota) texto += `<p> dato Mayor50: ${item}`;
        });
        document.getElementById("salidaDatos").innerHTML = texto;
    }
}

function programa(valor) {
    var obj = new ficha();
    if (valor == 2) obj.arrayMenoresX();
    if (valor == 3) obj.mostrarMayorX(50)
}
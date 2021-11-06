class ficha {
    constructor() {
        this.arrayNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]
    }

    mostrarMayores50() {
        let texto = "";
        let datos = this.arrayNumeros;
        for (let i = 0; i < datos.length; i++) {
            if (datos[i] > 50) texto += `<p> dato Mayor50: ${datos[i]}`;
        }
        document.getElementById("salidaDatos").innerHTML = texto;
    }

    arrayMenoresX(cota) {
        let arrayMenores = [];
        let datos = this.arrayNumeros;
        for (let i = 0; i < datos.length; i++) {
            if (datos[i] < cota) arrayMenores[i] = datos[i];
        }
        document.getElementById("salidaDatos").innerHTML = arrayMenores;
    }
}

function programa(valor) {
    var obj = new ficha();
    if (valor == 1) obj.mostrarMayores50();
    else obj.arrayMenoresX(valor);
}
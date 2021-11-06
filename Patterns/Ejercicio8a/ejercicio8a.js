class Cuadrado {
    constructor() {
        this.posX = Cuadrado.incrementa;
        console.log(this.posX);
    }

    static get incrementa() {
        Cuadrado.numero = (Cuadrado.numero || 100) + 20;
        return Cuadrado.numero;
    }

    establecerPosX1(name) {
        document.getElementById(name).style.left = this.posX + "px";
    }

    salirPantalla(name) {
        let cadena = "Posición:" + this.posX
        document.getElementById(name).innerHTML = cadena;
    }
}

function incrementar(nom) {
    objCuadrado = new Cuadrado();
    objCuadrado.establecerPosX1(nom);
    objCuadrado.salirPantalla(nom);
}
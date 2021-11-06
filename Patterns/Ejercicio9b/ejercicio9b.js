class Contador {
    constructor() {
        this.total = Contador.inicio;
        console.log(this.valor);
    }

    incrementarcontador() {
        Contador.incrementa;
    }

    get valor() {
        return this.total;
    }

    static get incrementa() {
        Contador.numero = (Contador.numero || 0) + 1;
        return Contador.numero;
    }

    static get inicio() {
        Contador.numero = (Contador.numero || 0);
        return Contador.numero;
    }

    salirpantalla() {
        let cadena = "El contador es: " + this.valor;
        document.getElementById("salida").innerHTML = cadena;
    }

    resetcontador() {
        console.log("contador antes de reset: " + this.valor);
        Contador.numero = 0;
    }
}

function programa(menu) {
    var objContador = new Contador;
    if (menu == 2) {
        objContador.incrementarcontador();
        objContador.salirpantalla();
    }
    if (menu == 3) {
        objContador.resetcontador();
    }
}
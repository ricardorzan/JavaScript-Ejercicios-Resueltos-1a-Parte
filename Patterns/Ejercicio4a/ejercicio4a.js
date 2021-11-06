class Calculadora {
    constructor() {
        this._resultado = 0;
        this._num1 = 0;
        this._num2 = 0;
    }

    set resultado(oper) {
        switch (oper) {
            case 1:
                this._resultado = this._num1 + this._num2;
                break;
            case 2:
                this._resultado = this._num1 - this._num2;
                break;
        }
    }

    get resultado() {
        var cadena = "El resultado es: " + this._resultado;
        document.getElementById("salida").innerHTML = cadena;
    }

    introducirDatos() {
        let valor1, valor2;
        valor1 = parseInt(prompt("Introduce primer número ?", "0"));
        valor2 = parseInt(prompt("Introduce segundo número ?", "0"));
        if (isNaN(valor1 && valor2) == false) {
            if (valor1 > 0 && valor1 < 100) this._num1 = valor1;
            else prompt("Primer número no esta entre 0 y 100", "0");
            if (valor2 > 0 && valor2 < 100) this._num2 = valor2;
            else prompt("Segundo número no esta entre 0 y 100", "0");
        } else prompt("No son números", "0");
    }
}

function programa(operacion) {
    var objCalcula = new Calculadora();
    objCalcula.introducirDatos();
    objCalcula.resultado = operacion;
    objCalcula.resultado;
}
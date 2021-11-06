class Rectangulo {
    constructor() {
        this.resultado = 0;
    }

    calculaArea(A, B) {
        this.resultado = A * B;
    }

    calculaPerimetro(A, B) {
        this.resultado = 2 * (A + B);
    }

    resultadofinal() {
        return this.resultado;
    }
}

function programa() {
    var num1 = parseFloat(document.fdatos.entradaA.value);
    var num2 = parseFloat(document.fdatos.entradaB.value);
    var obj = new Rectangulo();
    obj.calculaArea(num1, num2);
    document.writeln(`El area es ${obj.resultadofinal()} <br>`);
    obj.calculaPerimetro(num1, num2);
    document.writeln(`El perimetro es ${obj.resultadofinal()} `);
}
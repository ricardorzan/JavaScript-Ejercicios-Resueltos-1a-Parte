function rectangulo() {
    var resultado;
    this.calculaArea = function (A, B) {
        resultado = A * B;
    }
    this.calculaPerimetro = function (A, B) {
        resultado = 2 * (A + B);
    }
    this.resultadofinal = function () {
        return resultado;
    }
}

// module.exports = rectangulo;
function programa() {
//var rectangulo = require('rectangulo');
    var obj = new rectangulo();
    var num1 = parseFloat(document.fdatos.entradaA.value);
    var num2 = parseFloat(document.fdatos.entradaB.value);
    obj.calculaArea(num1, num2);
    document.writeln("El area es " + obj.resultadofinal() + "<br>");
    obj.calculaPerimetro(num1, num2);
    document.writeln("El perimetro es " + obj.resultadofinal());
}
var rectangulo = (function () {
// Variable privada interna
    var numero = 0;
    return {
        perimetro: function (altura, base) {
            var calculoperimetro = 2 * (altura + base);
            return 'El perimetro es ' + calculoperimetro;
        },
        area: function (altura, base) {
            var calculoarea = altura * base;
            numero++;
            return 'El area es ' + calculoarea;
        },
        numeroveces: function () {
            return numero;
        }
    } // fin return
})(); //fin function
function programa() {
    var num1 = parseFloat(document.fdatos.entradaA.value);
    var num2 = parseFloat(document.fdatos.entradaB.value);
    document.writeln("El area es " + rectangulo.area(num1, num2) + "<br>");
    document.writeln("El perimetro es " + rectangulo.perimetro(num1, num2) + "<br>");
    document.writeln("número veces " + rectangulo.numeroveces());
}
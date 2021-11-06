//Definición del objeto PattNum
var PattNum = function () {
    this.numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
}
//Método "mayores" de PattNum
PattNum.prototype.mayores = function () {
    var mayores = [];
    for (var i in this.numeros) {
        if (this.numeros[i] > 50) {
            mayores.push(this.numeros[i]);
        }
    }
    return mayores;
}
//Método "menores que" de PattNum
PattNum.prototype.menoresQue = function (num_lim) {
    var menores = [];
    for (var i in this.numeros) {
        if (this.numeros[i] < num_lim) {
            menores.push(this.numeros[i]);
        }
    }
    return menores;
}
//Definiciones de sistema //Entrada de datos
var stdin = process.stdin;
//Instancia de PattNum => PatternTest
var PatternTest = new PattNum();
//Menú
console.log('Programa de números mayores y menores.\n');
console.log('Parámetros:');
console.log('1 - Muestra números mayores que 50');
console.log('2 - Muestra números menores que un número elegido');
console.log('0 - Termina el programa\n');
stdin.write('Opción: ');
var ficha = (function () {
    var alumno = {
        nombre: "Caterina",
        edad: 18
    };
    return {
        verNombre() {
            return alumno.nombre;
        },
        verEdad() {
            var resultado = alumno.edad;
            return resultado;
        }
    } // fin return
})(); //fin 'clase' ficha
function programa() {
    document.writeln("El nombre es " + ficha.verNombre() + "<br>");
    document.writeln("La edad es " + ficha.verEdad() + "<br>");
}
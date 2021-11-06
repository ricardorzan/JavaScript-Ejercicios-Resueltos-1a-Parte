function ficha() {
    var alumno = {
        nombre: "Caterina",
        edad: 18
    };
    this.verNombre = function () {
        return alumno.nombre;
    }
    this.verEdad = function () {
        var resultado = alumno.edad;
        return resultado;
    }
}

function programa() {
    var obj = new ficha();
    document.writeln("El nombre es " + obj.verNombre() + "<br>");
    document.writeln("La edad es " + obj.verEdad() + "<br>");
}
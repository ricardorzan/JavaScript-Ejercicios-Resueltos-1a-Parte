class ficha {
    constructor() {
        this.alumno = {
            nombre: "Caterina",
            edad: 18
        };
    }// fin constructor
    verNombre() {
        return this.alumno.nombre;
    }

    verEdad() {
        let resultado = this.alumno.edad;
        return resultado;
    }
} //fin class ficha
function programa() {
    var obj = new ficha();
    document.writeln(`El nombre es ${obj.verNombre()} <br>`);
    document.writeln(`La edad es ${obj.verEdad()} <br>`);
}
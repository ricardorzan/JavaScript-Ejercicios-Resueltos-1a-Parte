class EntradaDatos {
    constructor() {
        this.nombre = "admin";
        this.contrasenya = "1234"
    }

    introduceNombre() {
        let valorEntrada = document.formEntrada.txtInicial.value;
        if (this.compruebaNombre(valorEntrada))
            this.nombre = valorEntrada;
        else
            this.nombre = "No valido";
    }

    compruebaNombre(valor) {
        let flag = true;
        if (valor == null || valor == "") flag = false;
        return flag
// if (!(valor == null || valor == "")) return 1
    }

    verNombre() {
        return this.nombre;
    }
}

function programa() {
    var obj = new EntradaDatos();
    obj.introduceNombre();
    document.writeln(`El nombre es ${obj.verNombre()} <br>`);
}
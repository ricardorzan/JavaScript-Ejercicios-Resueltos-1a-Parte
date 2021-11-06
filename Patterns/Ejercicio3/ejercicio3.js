class Animal {
    constructor(nombre) {
        this.nombre = nombre;
        this._edad = 0;
    }

    get edad() {
        return this._edad;
    }

    set edad(value) {
        if (value < 0) {
            alert("Eso no es posible");
        }
        this._edad = value;
    }

    verNombre() {
        console.log("Yo soy " + this.nombre);
    }
}

var objVivo = new Animal("Hormiga");
objVivo.verNombre();
objVivo.edad = 5;
console.log(objVivo.edad);
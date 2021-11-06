class Animal {
    constructor(name) {
        this.name = name;
    }

    decirNombre() {
        alert("Yo soy " + this.name);
    }
}

var objVivo1 = new Animal("Leon");
objVivo1.decirNombre();
var objVivo2 = new Animal("Jirafa");
objVivo2.decirNombre();
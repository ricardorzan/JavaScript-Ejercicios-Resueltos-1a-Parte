class miDisplay {
    constructor(inicio) {
        this.miObj = document.getElementById('display');
        this.miObjestilo = document.getElementById('display').style;
        this.valor = inicio;
    }

    posiciona(x, y) {
        this.miObjestilo.left = x + "px";
        this.miObjestilo.top = y + "px";
    }

    asignaValor(result) {
        this.valor = result;
    }

    muestraValor() {
        let tam = document.formEntrada.txtTamano.value;
        this.miObjestilo.fontSize = tam + "px";
        this.miObj.innerHTML = this.valor;
    }
}

function programa(num) {
    let obj = new miDisplay(0);
    obj.posiciona(500, 200);
    obj.asignaValor(num);
    obj.muestraValor();
}
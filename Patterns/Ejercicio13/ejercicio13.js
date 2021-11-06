let objGlobo = (function () {
    var posY;
    var tam;
    return {
        subir(obj) {
            if (posY > 50) {
                posY = posY - 50;
                tam = tam + 20;
            } else {
                alert("explota");
//obj.style.style.img = "explosion.jpg"
            }
        },
        obtenerValores(obj) {
            let valor = parseInt(obj.style.top);
            if (isNaN(valor)) valor = 400; // valor inicial
            posY = valor;
            let valor2 = parseInt(obj.style.width);
            if (isNaN(valor)) valor2 = 50; // valor inicial
            tam = valor2;
        },
        colocar(obj) {
            obj.style.top = posY + "px";
            obj.style.width = tam + "px";
        },
        salirTam(obj) {
            document.getElementById("salida").innerHtmml = "Tamaño:" + tam;
        }
    };
})();

function programa(nom) {
    objGlobo.obtenerValores(nom);
    objGlobo.subir(nom);
    objGlobo.colocar(nom);
    objGlobo.salirTam(nom);
}
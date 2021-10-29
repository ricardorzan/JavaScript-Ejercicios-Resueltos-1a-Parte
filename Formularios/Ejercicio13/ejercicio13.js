function inic() {
    var DI = document.game.dinero.value = 100;
}

function calc() {
    var Din = parseInt(document.game.dinero.value);
    var Num = document.game.num.value;
    var Apu = parseInt(document.game.apuesta.value);
    var dado = Math.floor(Math.random() * 7);
    var ganancia = 0;
    if (Din > 0) {
        if (Num == dado) {
            document.game.dado.value = dado;
            document.game.res.value = ("Has ganado! " + Apu * 2);
            ganancia = (Din + Apu * 2);
            document.game.dinero.value = ganancia;
        } else {
            document.game.dado.value = dado;
            document.game.res.value = ("Has perdido!" + Apu);
            ganancia = (Din - Apu);
            document.game.dinero.value = ganancia;
        }
    } else {
        window.alert("Has perdido todo tu dinero!");
    }
}
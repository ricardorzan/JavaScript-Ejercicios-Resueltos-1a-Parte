let suerte = (Math.random() * 6);
let dado = parseInt(suerte) + 1;
let obj1 = document.getElementById("salida")
if (dado > 3) {
    obj1.innerHTML = `Has ganado, ha salido el numero ${dado} `;
} else {
    obj1.innerHTML = `Lo siento, ha salido el numero ${dado} `;
}
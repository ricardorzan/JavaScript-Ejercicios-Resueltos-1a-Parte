var alum = ["Andres", "Angela", "Bernat", "Carol", "Maria", "Joan"];
var notas = [];
//Bucle que añade seis elementos a "notas", todos con el valor: 5.
for (let i = 0; i < 6; i++) {
    notas.push(5);
}
document.write(`<h2>Notas de la asignatura</h2>`);
numero = window.prompt(`Introduzca el número del alumno (0-5)`, `0`);
numero = parseInt(numero);
document.write(`<br>Nota de ${alum[numero]} inicial ${notas[numero]}`);
datoNota = window.prompt(`Introduce su nueva nota`, `0`);
valorNota = parseInt(datoNota);
//Elemento de "notas" cuyo índice es "lista" toma el valor "valorNota".
notas[numero] = valorNota;
document.write(`<br><h2>Notas finales:</h2>`);
//Bucle donde se imprimime el número del alumno, su nombre y su nota.
for (let i = 0; i < alum.length; i++) {
    document.write(`alum num: ${i} nombre:${alum[i]} nota:${notas[i]} <br>`);
}
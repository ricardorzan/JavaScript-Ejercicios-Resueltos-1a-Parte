let x, y;
y = "Bon dia";
document.write(`<p> Este es el valor de x: ${x} <br></p>`);
document.write(`<h3>Este es el valor de y: ${y} </h3>`);
f();
document.write(`<p>Este es el valor de z: + ${z} <br></p>`);

function f() {
    let solo_local = 100;
    let z = solo_local;
    document.write(`<p>Este es el valor de z: + ${z} <br></p>`); //Local
}
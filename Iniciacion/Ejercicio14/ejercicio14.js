var contador;
flag = true;
contador = 1;

while (flag) {
    let dato = prompt('Introduce número del 1 al 10:', '');
    var num = parseInt(dato);

    document.write(` El numero introducido es ${num} </br> `);
    document.write(` El contador es ${contador} </br> `);

    contador = contador + 1;
    if (num == 7) {
        flag = false
    }
}

document.write(` </br><h2> 
 Fin del programa 
 ya que el número introducido es 7. 
 </h2> 
 `);

document.write(`</br> Ultimo numero introducido es ${num}`)


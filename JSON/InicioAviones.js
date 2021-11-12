var xmlhttp = new XMLHttpRequest();
var url = "aviones.txt";
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var arrayVuelos = JSON.parse(this.responseText);
        mostrarArray(arrayVuelos);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function mostrarArray(datos) {
    let out = "";
    for (let i = 0; i < datos.length; i++) {
        out += `<p> origen: ${datos[i].origen} <a href= ${datos[i].url}>
destino: ${datos[i].destino}</a></p><br>`;
    }
    document.getElementById("salidaDatos").innerHTML = out;
}
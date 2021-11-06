var arrayVuelos = [
    {
        "origen": "Palma",
        "destino": "Oslo",
        "url": "http://www.ibserveis.com/vuelo1.html"
    },
    {
        "origen": "Lugo",
        "destino": "Madrid",
        "url": "http://www.ibserveis.com/vuelo2.html"
    },
    {
        "origen": "Barna",
        "destino": "Paris",
        "url": "http://www.ibserveis.com/vuelo3.html"
    },
    {
        "origen": "Palma",
        "destino": "Madrid",
        "url": "http://www.ibserveis.com/vuelo4.html"
    },
    {
        "origen": "Palma",
        "destino": "Paris",
        "url": "http://www.ibserveis.com/vuelo5.html"
    }
]

function mostrarArray(datos) {
    var texto = "";
    for (let i = 0; i < datos.length; i++) {
        texto += `<p> origen: ${datos[i].origen} <a href= ${datos[i].url}>
destino: ${datos[i].destino}</a></p><br>`;
    }
    document.getElementById("salidaDatos").innerHTML = texto;
}

mostrarArray(arrayVuelos);
function transform(gradosFarenheit = 1) {
    let grados = parseInt(gradosFarenheit)

    grados = (grados-32)*5/9

    document.getElementById("resultado").innerHTML = grados
}
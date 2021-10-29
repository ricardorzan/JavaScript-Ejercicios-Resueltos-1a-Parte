function transform(gradosCelcius = 1) {
    let grados = parseInt(gradosCelcius)

    grados = (grados*9/5)+32

    document.getElementById("resultado").innerHTML = grados
}
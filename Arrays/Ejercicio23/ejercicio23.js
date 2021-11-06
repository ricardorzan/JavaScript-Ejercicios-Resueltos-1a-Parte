imagen01 = new Image()
imagen01.src = "prueba1.jpg"
imagen02 = new Image()
imagen02.src = "prueba2.jpg"

function rollover(nombreimagen, nova) {
    document.images[nombreimagen].src = nova.src
}
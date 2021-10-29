function programa() {
    let x = 3;
    function func(randomize) {
        if (randomize) {
            let x = parseInt(Math.random() * 10);
            return x;
        }
        return x;
    }
    document.getElementById("salida").innerHTML = func(false); // 3
    document.getElementById("salida").innerHTML += func(1);
} 
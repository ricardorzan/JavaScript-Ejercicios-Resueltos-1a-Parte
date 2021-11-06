var numeros = [100, 200, 300, 400];

function paraCada(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

paraCada(numeros, alert);
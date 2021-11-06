var dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"];

function paraCada(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

paraCada(dias, console.log);
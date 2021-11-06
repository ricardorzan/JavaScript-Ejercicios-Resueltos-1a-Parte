function GetData(radioName) {
    var radi = document.getElementsByName(radioName);
    for (var i = 0; i < radi.length; i++) {
        if (radi[i].checked) return radi[i].value;
    }
}

function Discount() {
    var desc = 0, preu = 100, rest;
    let curs = GetData('curs');
    let menj = GetData('menjador');
    let germ = GetData('germans');
    if (curs == 'FP') {
        if (germ == 'true') desc = 0.1;
        else if (menj == 'true') desc = 0.05;
    } else {
        if (menj == 'true') desc = 0.08;
        else desc = 0.06;
    }
    rest = preu * desc;
    preu = preu - rest;
    alert("El preu final és " + preu);
}
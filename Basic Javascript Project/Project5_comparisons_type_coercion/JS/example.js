function nanFunction() {
    document.getElementById("nan").innerHTML = 0 / 0;
}

function nanTrueFunction() {
    document.getElementById("nanTrue").innerHTML = isNaN('This is a string');
}

function nanFalseFunction() {
    document.getElementById("nanFalse").innerHTML = isNaN('007');
}

    

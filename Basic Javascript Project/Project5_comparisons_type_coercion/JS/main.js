//Force Coercion
document.write("This is Type Coercion using the String 20 and the Number 3: ");
document.write("20" + 3);

//Return Infinity
function displayInfinity() {
    document.getElementById("infinityDisplay").innerHTML = "Infinity: " + (3E310);
}
//Return Negative Infinity
function displayNegInfinity() {
    document.getElementById("negInfinityDisplay").innerHTML = "Negative Infinity: " + (-3E310);
}

//Return Boolean True
function displayBooleanTrue() {
    document.getElementById("booleanTrue").innerHTML = document.write(10 > 2);
}

//Return Boolean False
function displayBooleanFalse() {
    document.getElementById("booleanFalse").innerHTML = document.write(10 < 2);
}

//Output Console  Log
function displayConsoleLog() {
    console.log(10 < 2);
    document.getElementById("consoleLog").innerHTML = "Check the console to see the false value";
}

//Output Double Equals True Value
function doubleEqualsTrue() {
    document.getElementById("doubleEqualsTrue").innerHTML = document.write(10 == 10);
}

//Output Double Equals False Value
function doubleEqualsFalse() {
    document.getElementById("doubleEqualsFalse").innerHTML = document.write(3 == 11);
}



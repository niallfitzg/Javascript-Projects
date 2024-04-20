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

//Output Triple Equals True Value - matching data type and value
function tripleEqualsTrue() {
    X = 10;
    Y = 10;
    document.getElementById("tripleEqualsTrue").innerHTML = document.write(X === Y);
}

//Output Triple Equals False Value - different data type and value
function tripleEqualsFalse1() {
    X = "Niall";
    Y = 10;
    document.getElementById("tripleEqualsFalse1").innerHTML = document.write(X === Y);
}

//Output Triple Equals False Value - different data type but the same value for both.
function tripleEqualsFalse2() {
    X = "10";
    Y = 10;
    document.getElementById("tripleEqualsFalse2").innerHTML = document.write(X === Y);
}

//Output Triple Equals False Values - same data type but a different value for both.
function tripleEqualsFalse3() {
    X = "Niall";
    Y = "John";
    document.getElementById("tripleEqualsFalse3").innerHTML = document.write(X === Y);
}



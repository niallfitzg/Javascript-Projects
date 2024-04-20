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
    document.getElementById("booleanTrue").innerHTML = "Boolean on (10 > 2) is: " + (10 > 2);
}

//Return Boolean False
function displayBooleanFalse() {
    document.getElementById("booleanFalse").innerHTML = "Boolean on (10 < 2)  is: " + (10 < 2);
}

//Output Console  Log
function displayConsoleLog() {
    console.log(10 < 2);
    document.getElementById("consoleLog").innerHTML = "Check the console to see the false value";
}

//Output Double Equals True Value
function doubleEqualsTrue() {
    document.getElementById("doubleEqualsTrue").innerHTML = "Double Equals (10 == 10) is: " + (10 == 10);
}

//Output Double Equals False Value
function doubleEqualsFalse() {
    document.getElementById("doubleEqualsFalse").innerHTML = "Double Equals (3 == 11) is: " + (3 == 11);
}

//Output Triple Equals True Value - matching data type and value
function tripleEqualsTrue() {
    X = 10;
    Y = 10;
    document.getElementById("tripleEqualsTrue").innerHTML = "Triple Equals 10 integer = 10 integer is: " + (X === Y);
}

//Output Triple Equals False Value - different data type and value
function tripleEqualsFalse1() {
    X = "Niall";
    Y = 10;
    document.getElementById("tripleEqualsFalse1").innerHTML = "Triple Equals 'Niall' string = 10 integer is: " + (X === Y);
}

//Output Triple Equals False Value - different data type but the same value for both.
function tripleEqualsFalse2() {
    X = "10";
    Y = 10;
    document.getElementById("tripleEqualsFalse2").innerHTML = "Triple Equals '10' string = 10 integer is: " + (X === Y);
}

//Output Triple Equals False Values - same data type but a different value for both.
function tripleEqualsFalse3() {
    X = "Niall";
    Y = "John";
    document.getElementById("tripleEqualsFalse3").innerHTML = "Triple Equals 'Niall' string = 'John' string is: " + (X === Y);
}

//Output AND Operator True Value
function andTrue() {
    document.getElementById("andTrue").innerHTML = "AND Operator Value on (5 > 2 && 10 > 4) is: " + (5 > 2 && 10 > 4);
}

//Output AND Operator False Value
function andFalse() {
    document.getElementById("andFalse").innerHTML = "AND Operator Value on (5 > 10 && 10 > 4) is: " + (5 > 10 && 10 > 4);
}

//Output OR Operator True Value
function orTrue() {
    document.getElementById("orTrue").innerHTML = "OR Operator Value on (5 > 2 || 10 > 4) is: " + (5 > 2 || 10 > 4);
}

//Output OR Operator False Value
function orFalse() {
    document.getElementById("orFalse").innerHTML = "OR Operator Value on (5 < 2 || 10 > 4) is: " + (5 < 2 || 10 > 4);
}

//Output NOT Operator True Value
function notFunction() {
    document.getElementById("not").innerHTML = "NOT Operator Value on !(20 > 10) is: " + !(20 > 10);
}

//Output NOT Operator Double Negative
function notFunction2() {
    document.getElementById("not2").innerHTML = "NOT Operator Value on !(5 > 10) is: " + !(5 > 10);
}







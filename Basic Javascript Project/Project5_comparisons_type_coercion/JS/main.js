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

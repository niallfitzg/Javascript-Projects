function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("addition").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("subtraction").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_Function() {
    var multiply = 6 * 8;
    document.getElementById("multiplication").innerHTML = "6 * 8 = " + multiply;
}

function division_Function() {
    var divide = 48 / 6;
    document.getElementById("division").innerHTML = "48 / 6 = " + divide;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("moreMath").innerHTML = "1 plus 2, multiplied by 10, divided in half, and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var modulus_remainder = 25 % 6;
    document.getElementById("modulus_Text").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus_remainder;
}
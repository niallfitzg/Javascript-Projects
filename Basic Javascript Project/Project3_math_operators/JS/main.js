//function to add two numbers
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("addition").innerHTML = "2 + 2 = " + addition;
}
//function to subtract two numbers
function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("subtraction").innerHTML = "5 - 2 = " + subtraction;
}
//function to multiply two numbers
function multiplication_Function() {
    var multiply = 6 * 8;
    document.getElementById("multiplication").innerHTML = "6 * 8 = " + multiply;
}
//function to divide two numbers
function division_Function() {
    var divide = 48 / 6;
    document.getElementById("division").innerHTML = "48 / 6 = " + divide;
}
//function to combine math operations
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("moreMath").innerHTML = "1 plus 2, multiplied by 10, divided in half, and then subtracted by 5 equals " + simple_Math;
}
//function to return a remainder
function modulus_Operator() {
    var modulus_remainder = 25 % 6;
    document.getElementById("modulus_Text").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus_remainder;
}
//function to negate a number
function negation_Operator() {
    var x = 10;
    document.getElementById("negation_Text").innerHTML = "The negation of 10 is: " + (-x);
}
//function to increment a number
function increment_Operator() {
    var inc = 10;
    document.getElementById("increment_Text").innerHTML = "An increment of 10 is: "+ (++inc);
}
//function to decrement a number
function decrement_Operator() {
    var dec = 10;
    document.getElementById("decrement_Text").innerHTML = "An decrement of 10 is: "+ (--dec);
}
//function to return a random number between 0 and 1
function random_Number() {
    var rand = Math.random();
    document.getElementById("random_Text").innerHTML = "This is a random number: " + rand;
}
//function to return a random number between 0 and 50
function random_range_Number() {
    var rand = Math.random() * 50;
    document.getElementById("random_range_Text").innerHTML = "This is a random number between 0 and 50: " + rand;
}
//function to return Euler's Number
function math_Object() {
    var euler = Math.E;
    document.getElementById("mathObjectText").innerHTML = "Euler's Log Base Number is : " + euler;
}







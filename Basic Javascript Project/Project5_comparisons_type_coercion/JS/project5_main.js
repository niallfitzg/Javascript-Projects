

// Use document.write() and typeof to display the type of the variable
var x = "Niall"
document.write("Type of Variable x containing 'Niall': " + typeof x + "<br>");

// Expression combining a string and a number
var expression = "The value of x is: " + x; // Implicit type conversion of number to string
document.write(expression + "<br>");

// Vaiables for use in logical and comparison operators
var a = 5, b = "5", c = 10;

// == to check variable value 
document.write("Is 5 == 10?: " + (5 == 10) + "<br>");

// === to check variablevalue and type
document.write("IS 5 === '5'?: " + (5 === "5") + "<br>"); 

// Compare two numbers, return true
document.write("Is 5 < 10?: " + (5 < 10) + "<br>");

// Compare two numbers, return false
document.write("Is 5 > 10?: " + (5 > 10) + "<br>");  

// Using logical AND operators, return false
document.write("Is 5 < 10 && 10 < 5 10?: " + (5 < 10 && 10 < 5) + "<br>");

// Using logical OR operato, return true
document.write("Is 5 > 10 || 10 > 5?: " + (5 > 10 || 10 > 5) + "<br>");

// Using the NOT operator to return a True value
document.write("!(5 > 10) is: " + (!(5 > 10)) + "<br>"); 

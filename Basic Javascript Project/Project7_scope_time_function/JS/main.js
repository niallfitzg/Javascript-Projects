var x = 10; // For use as a global variable

function Add_numbers_1() {
    // Local variable inside the function
    var x = 10;
    var result = 15 + x;

    // Append to the HTML element
    document.getElementById("scope").innerHTML += " " + result;
}

function Add_numbers_2() {
    // Global variable outside the function
    var result = 15 + x;

    // Append to the HTML element
    document.getElementById("scope2").innerHTML += " " + result;
}

// a function that initially had an intentional error but was fixed by using console.log()
function Add_numbers_3() {
    // Global variable outside the function
    var result = 20 + x;
    console.log(20 + x);

    // Append to the HTML element
    document.getElementById("scope3").innerHTML += " " + result;
}

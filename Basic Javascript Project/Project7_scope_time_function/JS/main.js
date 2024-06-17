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

// Function to check the current time and display a message
function checkTime() {
    var currentHour = new Date().getHours();
    var message;

    if (currentHour < 12) {
        message = "Good morning!";
    } else {
        message = currentHour < 18 ? "Good afternoon!" : "Good evening!";
    }

    // Output the message to the HTML element
    document.getElementById("timeResult").innerHTML += " " + message;
}

// Function to check if it's within work hours (9 AM to 5 PM)
function checkWorkHours() {
    var currentHour = new Date().getHours();
    var message;

    if (currentHour >= 9 && currentHour <= 17) {
        message = "It's within work hours.";
    } else {
        message = "It's outside work hours.";
    }

    // Output the message to the HTML element
    document.getElementById("workHoursResult").innerHTML += " " + message;
}

// Function to check if the number is even or odd
function checkEvenOdd() {
    var number = document.getElementById("numberInput").value;
    var even_odd_message;

    if (number % 2 === 0) {
        even_odd_message = number + " is even.";
    } else {
        even_odd_message = number + " is odd.";
    }

    // Output the message to the HTML element
    document.getElementById("evenOddResult").innerHTML = even_odd_message;
}

// Function to display a message based on the time of day
function Time_function() {
    var Time = new Date().getHours();
    var Reply;

    if (Time > 0 && Time < 12) {
        Reply = "It is morning time.";
    } else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time.";
    }

    document.getElementById("Time_of_day").innerHTML = Reply;
}

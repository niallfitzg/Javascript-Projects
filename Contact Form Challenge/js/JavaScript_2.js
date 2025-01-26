// Add an event listener to the submit button
document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Get the input values from the form fields
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if everything is filled out properly
    let isValid = true;

    // Start with an empty error message
    let errorMessage = "";

    // Validate the first name field
    if (firstName === "") {
        errorMessage += "First name is required.\n";
        isValid = false;
    }

    // Validate the last name field
    if (lastName === "") {
        errorMessage += "Last name is required.\n";
        isValid = false;
    }

    // Validate the email field
    if (email === "") {
        errorMessage += "Email is required.\n";
        isValid = false;
    } else {
        // Check if the email format is valid
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMessage += "Please enter a valid email address.\n";
            isValid = false;
        }
    }

    // Validate the message field
    if (message === "") {
        errorMessage += "Message is required.\n";
        isValid = false;
    }

    // If something is not right, stop the form from being submitted and show an alert
    if (!isValid) {
        event.preventDefault(); 
        alert(errorMessage); 
    }
});
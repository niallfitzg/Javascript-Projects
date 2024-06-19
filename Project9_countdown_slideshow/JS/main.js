// Set the initial slide index to the first slide
let slideIndex = 1;

// Show the first slide when the page loads
showSlides(slideIndex);

// Change slides when the next or previous buttons are clicked
function plusSlides(n) {
    // Update the slide index and show the correct slide
    showSlides(slideIndex += n);
}

// Display a specific slide when a dot is clicked
function currentSlide(n) {
    // Set the slide index to the clicked dot's index and show the corresponding slide
    showSlides(slideIndex = n);
}

// Show the slide based on the current index
function showSlides(n) {
    let i;
    // Get all elements with of class "mySlides"
    let slides = document.getElementsByClassName("mySlides");
    // Get all elements with of class "dot"
    let dots = document.getElementsByClassName("dot");

    // If the slide index is greater than the number of slides, reset to the first slide
    if (n > slides.length) { slideIndex = 1 }
    // If the slide index is less than 1, set to the last slide
    if (n < 1) { slideIndex = slides.length }

    // Hide all the slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Remove the "active" class from all the dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and add the "active" class to the correct dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Countdown Timer Function
function countdown() {
    // Get the number of seconds from the input field
    var seconds = document.getElementById("seconds").value;

    // Function to decrement the seconds and update the display
    function tick() {
        // Decrease the seconds by one
        seconds = seconds - 1;
        // Update the timer display
        document.getElementById("Timer").innerHTML = seconds;
        // Set a timeout to call tick function again after one second
        var time = setTimeout(tick, 1000);
        // If the countdown reaches zero, stop the timer and alert the user
        if (seconds == -1) {
            alert("Time's Up!");
            // Clear the timeout to stop the countdown
            clearTimeout(time);
            // Clear the timer display
            document.getElementById("Timer").innerHTML = "";
        }
    }

    // Start the countdown by calling the tick function
    tick();
}

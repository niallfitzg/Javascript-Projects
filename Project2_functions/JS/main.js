function updateContent() {
    var part = "This is my Project 2 "; // creating the variable
    part += "Function Assignment"; // using the += operator to add to the variable
    document.getElementById("assignment").innerHTML = part; // concatentate vars to populate element
}

function thankYou() {
    var thanks = "Thank you for ";// creating the variable
    thanks += "Viewing my Function Assignment"; // using the += operator to add to the variable
    document.getElementById("thanks_text").innerHTML = thanks; // concatentate vars to populate element
}
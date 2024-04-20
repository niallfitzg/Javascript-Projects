// Function using ternery Operator to check if the voter is old enough
function checkVotingAge() {
    var age = document.getElementById("votingAge").value;
    var result = age >= 18 ? "You are old enough to vote." : "You are too young to vote.";
    document.getElementById("votingResult").innerHTML = result;
}

// Constructor function for Irish Animal
function IrishAnimal(species, habitat, diet) {
    this.species = species;
    this.habitat = habitat;
    this.diet = diet;
}

// Adding new objects
var fox = new IrishAnimal("Fox", "Woods", "Omnivore");
var hare = new IrishAnimal("Hare", "Grasslands", "Herbivore");

// Function to display Irish animal details
function displayAnimalDetails() {
    document.getElementById("animalDetails").innerHTML =
        "The " + fox.species + " is usually found in " + fox.habitat +
        " and is an " + fox.diet + ".";
}

// Nested function example
function addStrings() {
    var startString = "Welcome to";
    function add(str) {
        startString += " " + str;
    }
    add("My Project!"); // Adding a string
    document.getElementById("displayMessage").innerHTML = startString;
}

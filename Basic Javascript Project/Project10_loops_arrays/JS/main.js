// While Loop Demo 
function call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// Length Property Challenge
function showStringLength() {
    var inputString = document.getElementById("inputString").value;
    var length = inputString.length;
    document.getElementById("stringLength").innerHTML = "String length: " + length;
}

// For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Cat Array
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
    
}

//  document.getElementById().innerHTML Assignment Array
function array_Function() {
    var fruits = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Honeydew"];
    var content = "";

    for (var y = 0; y < fruits.length; y++) {
        content += fruits[y] + "<br>";
    }

    document.getElementById("Array").innerHTML = content;
}


//  Constant Function
function constant_Function() {
    const my_Car = { type: "Sedan", brand: "Ford", color: "black" };
    document.getElementById("Constant").innerHTML = "My Car is a " + my_Car.color + " " + my_Car.type + " " + my_Car.brand;
    my_Car.color = "red"
    my_Car.price = "€20000"
    document.getElementById("Constant2").innerHTML = "My Car is now a " + my_Car.color + " " + my_Car.type + " " + my_Car.brand + " that cost " + my_Car.price;
    
}

// Let in a function
function let_Function() {
    var z = 100;
    document.getElementById("let_example").innerHTML = "The Variable z has a value of " + z + " outside the block but a value of ";

    {
        let z = 100; // Create a new z variable inside the block
        z++; // Increment the block-scoped z
        document.getElementById("let_example").innerHTML += z + " inside the block.";
        
    }
    
    document.getElementById("let_example2").innerHTML = "It has a value of " + z + " outside the block again.";
}

// Creating an Object

function createObject_Function() {
    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description: function () {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };

    document.getElementById("carObject").innerHTML = car.description();
}

// Using a Break Statement
function breakStatement_Function() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 4) { break; }
        text += "The number is " + i + "<br>";
    }

    document.getElementById("break").innerHTML = text;
}

// Using a Continue Statement
function continueStatement_Function() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 4) { continue; }
        text += "The number is " + i + "<br>";
    }

    document.getElementById("continue").innerHTML = text;
}






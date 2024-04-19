//function to add a dictionary
function my_Dictionary() {
    var Car = {
        Brand: "Ford",
        Model: "Fiesta",
        Color: "Black",
        Fuel: "Petrol",
        Age: 10,
    };
    //delete the Brand value from the KVP
    delete Car.Brand;
    //Output to a HTML element
    document.getElementById("Dictionary").innerHTML = "The brand of the vehicle is: " + Car.Brand;
}







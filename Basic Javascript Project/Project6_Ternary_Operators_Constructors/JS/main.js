function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = "Number after increment: " + increment_Number();

    function increment_Number() {
        var myNum = 9;
        myNum++; 
        return myNum; 
    }
}

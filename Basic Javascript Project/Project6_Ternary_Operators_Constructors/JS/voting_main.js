function Vote_Function() {
    var Age = document.getElementById("Age").value;
    var Can_vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("vote").innerHTML = Can_vote + " to vote."; 
}

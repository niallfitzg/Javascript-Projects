
//Utilize the window.alert() and document.write() methods
window.alert("Basic Javascript Project Assignment");
document.write("By Niall Fitzgerald" + "<br><br>");  // Added <br> for line breaks

//Concatenate the Sent1 and Sent2 variables together

var Sent1 = "This is the beginning of the string"
var Sent2 = " and this is the end of the string" 
document.write(Sent1 + Sent2 + "<br><br>");  // Added <br> for line breaks


//Write an expression
document.write("The product of 3 times 3 is... ");
document.write(3 * 3 + "<br></br>");  // Added <br> for line breaks

//A function for a button to say thanks
function Thanks_Function() { //Defining and naming the function

    var str = "Thanks for viewing my submission!"; //button text variable

    document.getElementById("Button_Text").innerHTML = str; //Insert text frrom vaiable into button

}

// Concatanate Method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// SLice Method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

// UpperCase Method
function toUpperCase_Method() {
    var mixedCase = "toUpperCase_Method";
    var upperCase = mixedCase.toUpperCase();
    document.getElementById("toUpperCase").innerHTML = upperCase;
}

// Search Method
function search_Method() {
    var text = "Click here to locate the position of the word 'position'.";
    var index = text.search('position');
    document.getElementById("Search").innerHTML = index;
}

// Numbers to String Method
function string_Method() {
    var X = 190;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// Precision Method
function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

// toFixed Method
function toFixed_Method() {
    var n = 12938.3012987376112;
    var Num = n.toFixed(5);    
    document.getElementById("toFixed").innerHTML = Num;
}

// valueOf Method
function valueOf_Method() {
    var n = 123;
    var num = n.valueOf();
    document.getElementById("valueOf").innerHTML = num + " (Type: " + typeof num + ")";
}


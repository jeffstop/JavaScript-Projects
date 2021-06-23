// This function concatenates the variables "A", "B", "C", and "D"
function Sentence() {
    var A = "My dog Ella ";
    var B = "likes to chase my cat ";
    var C = "all around the house, ";
    var D = "because she's a lunatic.";
    var whole_sentence = A.concat(B, C, D);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

// This function uses the slice method to take a specific part of the string and display it
function slice_Method() {
    var Sentence = "Here is a sentence to take a slice out of.";
    var Section = Sentence.slice(27,34);
    document.getElementById("slice").innerHTML = Section;
}

// This function makes the text appear in all uppercase font
function uppercase_Function() {
    var str = "This should all be in uppercase.";
    var res = str.toUpperCase();
    document.getElementById("uppercase").innerHTML = res;
}

// This function uses the search method to find the position of "method" within the string
function search_Function() {
    var phrase = "The search method will find the position of 'method'";
    var n = phrase.search("method");
    document.getElementById("search").innerHTML = n;
}

// This function returns the number "541" as a string
function string_Method() {
    var X = 541;
    document.getElementById("numbers").innerHTML = X.toString();
}

// This function returns the value to a specified decimal point, in this case to the 8th decimal
function precision_Method() {
    var X = 541.54681681646546158;
    document.getElementById("precision").innerHTML = X.toPrecision(8);
}

// This function uses the toFixed method to round the nearest 3rd decimal
function fixed_Method() {
    var X = 8.6541984;
    document.getElementById("fixed").innerHTML = X.toFixed(3);
}

// The valueof method returns the primitive value of a number
function value_Method() {
    var X = 12;
    var n = X.valueOf();
    document.getElementById("value").innerHTML = n;
}
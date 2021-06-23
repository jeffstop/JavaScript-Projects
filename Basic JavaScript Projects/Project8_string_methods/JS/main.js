function Sentence() {
    var A = "My dog Ella ";
    var B = "likes to chase my cat ";
    var C = "all around the house, ";
    var D = "because she's a lunatic.";
    var whole_sentence = A.concat(B, C, D);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "Here is a sentence to take a slice out of.";
    var Section = Sentence.slice(27,34);
    document.getElementById("slice").innerHTML = Section;
}

function uppercase_Function() {
    var str = "This should all be in uppercase.";
    var res = str.toUpperCase();
    document.getElementById("uppercase").innerHTML = res;
}

function search_Function() {
    var phrase = "The search method will find the position of 'method'";
    var n = phrase.search("method");
    document.getElementById("search").innerHTML = n;
}

function string_Method() {
    var X = 541;
    document.getElementById("numbers").innerHTML = X.toString();
}

function precision_Method() {
    var X = 541.54681681646546158;
    document.getElementById("precision").innerHTML = X.toPrecision(8);
}

function fixed_Method() {
    var X = 8.6541984;
    document.getElementById("fixed").innerHTML = X.toFixed(3);
}

function value_Method() {
    var X = 12;
    var n = X.valueOf();
    document.getElementById("value").innerHTML = n;
}
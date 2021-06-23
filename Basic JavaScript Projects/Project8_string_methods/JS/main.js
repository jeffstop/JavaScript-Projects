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
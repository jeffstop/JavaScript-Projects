function Sentence() {
    var A = "My dog Ella ";
    var B = "likes to chase my cat ";
    var C = "all around the house, ";
    var D = "because she's a lunatic.";
    var whole_sentence = A.concat(B, C, D);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}
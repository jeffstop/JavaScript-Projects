function Second_Function() {        // Defining a function
    var A = "Boom text here!";      // Defining A variable with a string value
    var result = A.fontcolor("blue");       // Using fontcolor to make the color blue
    document.getElementById("blue_text").innerHTML = result;        // Defining which element will use the function
}

function myFunction() {         // Defining a function
    var sentence = "I am learning";     // Defing sentence variable with a string value
    sentence += " a lot from this course!";         // Using an operator to concatenate a string
    document.getElementById("Concatenate").innerHTML = sentence;        // Defining which element will use the function
}

function demo(p, q) {
    return p * q;
}
document.getElementById("example").innerHTML = demo(5, 6);      // Only displays if <script> is at the bottom of <body>

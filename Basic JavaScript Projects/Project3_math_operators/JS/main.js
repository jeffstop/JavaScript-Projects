// Addition function
function addition_Function() {
    var addition = 2 + 2
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

// Subtraction function
function subtraction_Function() {
    var subtraction = 4 - 2
    document.getElementById("Math_1").innerHTML = "4 - 2 = " + subtraction;
}

// Multiplication function
function multiplication_Function() {
    var multiplication = 4 * 2
    document.getElementById("Math_2").innerHTML = "4 * 2 = " + multiplication;
}

// Division function
function division_Function() {
    var division = 8 / 2
    document.getElementById("Math_3").innerHTML = "8 / 2 = " + division;
}

// Modulus operator
function modulus_Operator() {
    var Simple_Math = 27 % 4;
    document.getElementById("Math_4").innerHTML = "When you divide 27 by 4 you have a remainder of: " + Simple_Math;
}

// Random number function
function random_number() {
    var random = Math.random();
    document.getElementById("Math_5").innerHTML = "Random number is: " + random;
}

// Increment function
function increment_Function() {
    var x = 5;
    x++;
    document.getElementById("Math_6").innerHTML = "5 incremented once is: " + x;
}

// Decrement function
function decrement_Function() {
    var y = 5;
    y--;
    document.getElementById("Math_7").innerHTML = "5 decremented once is: " + y;
}
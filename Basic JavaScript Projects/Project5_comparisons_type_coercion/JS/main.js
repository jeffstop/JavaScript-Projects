// Displays the data type
document.write(typeof 7);

// Expression using a string and number
document.write(" seven +" + 8 + " = 15");

// Displaying if "651" is not a number
function my_Function() {
    document.getElementById("test").innerHTML = isNaN('651');
}

// Displaying if "This is a string" is not a number
function my_Function2() {
    document.getElementById("test_2").innerHTML = isNaN('This is a string');
}

// Positive Infinity
function my_Function3() {
    document.getElementById("test_3").innerHTML = 5E310;
}

// Negative Infinity
function my_Function4() {
    document.getElementById("test_4").innerHTML = -3E312;
}

// Is 10 greater than 2?
function my_Function5() {
    document.getElementById("test_5").innerHTML = 10 > 2;
}

// Is 8 less than 6?
function my_Function6() {
    document.getElementById("test_6").innerHTML = 8 < 6;
}

// Console log math problems
console.log(7 * 6);
console.log(5 > 876);
console.log(234 > 3);

// Comparing two equal values
function my_Function7() {
    document.getElementById("test_7").innerHTML = 10 == 10;
}

// Comparing unequal values
function my_Function8() {
    document.getElementById("test_8").innerHTML = 6 == 9;
}

// Comparing data types and values
function my_Function9() {
    var A = 12;
    var B = 12;
    document.getElementById("test_9").innerHTML = A === B;
}

// Comparing data types and values
function my_Function10() {
    var C = "Nope";
    var D = 7;
    document.getElementById("test_10").innerHTML = C === D;
}

// Comparing data types and values
function my_Function11() {
    var E = "8";
    var F = 8;
    document.getElementById("test_11").innerHTML = E === F;
}

// Comparing data types and values
function my_Function12() {
    var G = 94;
    var H = 8;
    document.getElementById("test_12").innerHTML = G === H;
}

// Using the AND operator
function my_Function13() {
    document.getElementById("test_13").innerHTML = 876 > 3 && 78 > 8;
}

// Using the AND operator
function my_Function14() {
    document.getElementById("test_14").innerHTML = 7 > 3 && 3 > 5;
}

// Using the OR operator
function my_Function15() {
    document.getElementById("test_15").innerHTML = 4 > 3 || 5 > 12;
}

// Using the OR operator
function my_Function16() {
    document.getElementById("test_16").innerHTML = 5 > 6 || 12 > 54;
}

// Using the NOT operator
function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 20);
}

// Using the NOT operator
function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5 > 2);
}
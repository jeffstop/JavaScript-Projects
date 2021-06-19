document.write(typeof 7);

document.write("seven" + 8);

function my_Function() {
    document.getElementById("test").innerHTML = isNaN('651');
}

function my_Function2() {
    document.getElementById("test_2").innerHTML = isNaN('This is a string');
}

function my_Function3() {
    document.getElementById("test_3").innerHTML = 5E310;
}

function my_Function4() {
    document.getElementById("test_4").innerHTML = -3E312;
}

function my_Function5() {
    document.getElementById("test_5").innerHTML = 10 > 2;
}

function my_Function6() {
    document.getElementById("test_6").innerHTML = 6 > 8;
}

console.log(7 * 6);

console.log(5 > 876);

console.log(234 > 3);

function my_Function7() {
    document.getElementById("test_7").innerHTML = 10 == 10;
}

function my_Function8() {
    document.getElementById("test_8").innerHTML = 6 == 9;
}

function my_Function9() {
    var A = 12;
    var B = 12;
    document.getElementById("test_9").innerHTML = A === B;
}

function my_Function10() {
    var C = "Nope";
    var D = 7;
    document.getElementById("test_10").innerHTML = C === D;
}

function my_Function11() {
    var E = "8";
    var F = 8;
    document.getElementById("test_11").innerHTML = E === F;
}

function my_Function12() {
    var G = 94;
    var H = 8;
    document.getElementById("test_12").innerHTML = G === H;
}

function my_Function13() {
    document.getElementById("test_13").innerHTML = 876 > 3 && 78 > 8;
}

function my_Function14() {
    document.getElementById("test_14").innerHTML = 7 > 3 && 3 > 5;
}

function my_Function15() {
    document.getElementById("test_15").innerHTML = 4 > 3 || 5 > 12;
}

function my_Function16() {
    document.getElementById("test_16").innerHTML = 5 > 6 || 12 > 54;
}
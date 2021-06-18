var x = 6;      // Defining x variable as a value of 6
var y = 2;      // Defining y variable as a value of 2
var z = x - y;      // Defining z variable as a value of y variable subtracted from x variable
document.getElementById("Math").innerHTML = z;      // Displaying result of z variable

var q = x + 3;      // Defining q variable as the result of the x variable added to 3
document.getElementById("Math_1").innerHTML = q;        // Displaying result of q variable

var t = x * y;      // Defining t variable as the product of x variable and y variable
document.getElementById("Math_2").innerHTML = t;         // Displaying result of t variable

var r = x / y;      // Defining r variable as the result of x divided by y
document.getElementById("Math_3").innerHTML = r;         // Displaying result of r variable

var w = (x + y) * x / y;        // Defining w variable as the result of this equation
document.getElementById("Math_4").innerHTML = w;         // Displaying result of w variable

var a = 5;      // Defining a variable as a value of 5
var b = 2;      // Defining b variable as a value of 2
var c = a % b;      // Defining c variable as the modulus remainder of a divided by b
document.getElementById("Math_5").innerHTML = c;         // Displaying result of c variable

document.getElementById("Math_6").innerHTML = -x;        // Displaying result of negation of x variable

var j = 7;      // Defining j variable as a value of 7
j++;            // Incrementing j variable by a value of 1
document.write(j);      // Displaying result of incrementing j variable

var k = 12      // Defining k variable as a value of 12
k--;            // Decrementing j variable by a value of 1
document.write(k);      // Displaying result of decrementing k variable (This will appear next to the result of incrementing j variable. The last line will display 811, but is really 8 & 11. I'm choosing not to create a space here as this is only a demonstration.)

window.alert(Math.random());        // Displaying random number between 1 and 0 as an alert

window.alert(Math.random() * 100);      // Displaying random number between 0 and 100 as an alert

document.getElementById("Math_7").innerHTML = Math.round(Math.PI);      // Displaying Pi to the nearest round number. This will display on top of the increment and decrement functions, because this function displays in a specified <p> with id "Math_7"

window.alert("Should see this as an Alert!");       // This is a popup Alert

document.write("This should be top left. ");        // Text that appears in the top left

var A = "Basketball", B = "Football", C = "Other Football", D = "Hockey";       // Defining variables and giving them string values
document.write(D);      // Displaying string value for D variable

var A = A.fontcolor("blue");        // Using fontcolor method on A variable
document.write(A);      // Displaying string value for A variable

var B = B.fontcolor("red");         // Using fontcolor method on B variable
document.write(B);      // Displaying string value for B variable

var C = C.fontcolor("purple");      // Using fontcolor method on C variable
document.write(C);      // Displaying string value for C variable

var D = D.fontcolor("orange");      // Using fontcolor method on D variable
document.write(D);      // Displaying string value for D variable

document.write(4+82);       // Statement containing expression

document.write(C + A);      // Concatenated variables

function My_First_Function () {         // Defining a function and naming it
    var str = "This text is green!";    //Defining a variable and giving it a string value
    var result = str.fontcolor("green");        //Using the fontcolor method on str variable
    document.getElementById("Green_Text") .innerHTML = result;      //Putting the value of result into HTML element with "Green_Tex" id
}
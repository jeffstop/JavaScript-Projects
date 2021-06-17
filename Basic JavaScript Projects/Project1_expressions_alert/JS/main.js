window.alert("Should see this as an Alert!");

document.write("You should see this somewhere");

var A = "Basketball", B = "Football", C = "Other Football", D = "Hockey";
document.write(D);

var A = A.fontcolor("blue");
document.write(A);

var B = B.fontcolor("red");
document.write(B);

var C = C.fontcolor("purple");
document.write(C);

var D = D.fontcolor("orange");
document.write(D);

document.write(4+82);

function My_First_Function () {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text") .innerHTML = result;
}
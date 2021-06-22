var X = 15;
function Add_Numbers_1() {
    document.write(13 + X + "<br>");
}
Add_Numbers_1();

function Add_Numbers_2() {
    var y = 10;
    document.write(18 + y + "<br>");
}
Add_Numbers_2();

function Add_Numbers_3() {
    document.write(12 + y + "<br>");
}
Add_Numbers_3();

function Add_Numbers_3() {
    console.log(12 + y + "<br>");
}
Add_Numbers_3();

function conditional_Function() {
    if (new Date().getHours() <20) {
        document.getElementById("if_statement").innerHTML = "How is your day going?";
    }
}

function another_Function() {
    if (7 > 2)  {
        document.getElementById("another_one").innerHTML = "7 is greater than 2";
    }
}
// Establishing global variable "X". Funtion adds 13 to X
var X = 15;
function Add_Numbers_1() {
    document.write("<br>" + (13 + X) + "<br>");
}
Add_Numbers_1();

// This function uses a local variable to complete the math problem
function Add_Numbers_2() {
    var y = 10;
    document.write(18 + y + "<br>");
}
Add_Numbers_2();

// This function attempts to use the local variable "y" but it is not stated locally
function Add_Numbers_3() {
    document.write(12 + y + "<br>");
}
Add_Numbers_3();

// This uses the console.log method to debug the previous function
function Add_Numbers_3() {
    console.log(12 + y + "<br>");
}
Add_Numbers_3();

// This function displays a question if the time is < 20:00
function conditional_Function() {
    if (new Date().getHours() <20) {
        document.getElementById("if_statement").innerHTML = "How is your day going?";
    }
}

// This function uses an if statement and displays text if true
function another_Function() {
    if (7 > 2)  {
        document.getElementById("another_one").innerHTML = "7 is greater than 2";
    }
}

// This function determines if the age input is old enough to legally drink at age 21
function age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to drink.";
    }
    else  {
        Drink = "You are not old enough to drink.";
    }
    document.getElementById("drinking_age").innerHTML = Drink;
}

// This function will display a specific text message depending on the local time of it's use
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}
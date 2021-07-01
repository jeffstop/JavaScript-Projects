// Call loop while X < 13
function Call_Loop() {
    var Digit = "";
    var X = 2;
    while (X < 13) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// For loop, list of instruments
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Array Function
function array_Function() {
    var Vehicle = [];
    Vehicle [0]= "Ford";
    Vehicle [1]= "Tesla";
    Vehicle [2]= "Subaru";
    Vehicle [3]= "Honda";
    document.getElementById("Array").innerHTML = "The vehicle chosen was manufactured by " + Vehicle[3] + ".";
}

// Constant Function
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

// Using let keyword
var X = 734;
{
    let X = 50;
    document.getElementById("using_let").innerHTML = X;
}

// Using let keyword to create an object with a method
let car = {
    make: "Toyota ",
    model: "Camry",
    year: "2009 ",
    color: "blue ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model + ".";
    }
};
document.getElementById("Car_object").innerHTML = car.description();
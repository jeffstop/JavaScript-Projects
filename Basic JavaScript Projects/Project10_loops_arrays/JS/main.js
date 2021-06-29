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
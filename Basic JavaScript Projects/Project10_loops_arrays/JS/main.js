function Call_Loop() {
    var Digit = "";
    var X = 2;
    while (X < 13) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
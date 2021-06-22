function Vote_Function() {
    var Age = document.getElementById("age").value;
    var Vote = (Age < 18) ? "Too young":"Old enough";
    document.getElementById("vote").innerHTML = Vote + " to vote.";
}
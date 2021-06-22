// This function compares input age to voting age and determines if the age submitted is old enough to vote
function Vote_Function() {
    var Age = document.getElementById("age").value;
    var Vote = (Age < 18) ? "Too young":"Old enough";
    document.getElementById("vote").innerHTML = Vote + " to vote.";
}

// This function creates a class called "Vehicle" with 4 attributes called "Make", "Model", "Year", and "Color"
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// These variables create 3 new instances of the class "Vehicle"
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// This function displays the "Color", "Model", and "Year" of a specified variable's instance of a "Vehicle"
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// This function creates a class called "Student" with the attributes "Age" and "GPA"
function Student(Age, GPA,) {
    this.Student_Age = Age;
    this.Student_GPA = GPA;
}

// These variables creat 3 new instances of the class "Student"
var Bill = new Student(16, 3.75);
var Nancy = new Student(17, 3.92);
var Frank = new Student(15, 2.85);

// This function displays "Nancy's" "GPA"
function Student_Function() {
    document.getElementById("New_and_This").innerHTML = "Nancy has a " + Nancy.Student_GPA + " GPA, while only being " + Nancy.Student_Age + ".";
}

// This nested function displays a count starting at 8 and increasing by 1
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 8;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
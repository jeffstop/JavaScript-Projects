function my_Dictionary() {              // Defining a function with the name "my_Dictionary"
    var Animal = {                  // Defining a variable as "Animal"
        Species:"Dog",              // Key-value pair. Key is "Species" and value is "Dog"
        Color:"Red",             // Key-value pair. Key is "Color" and value is "Red"
        Breed:"Australian Shepherd",           // Key-value pair. Key is "Breed" and value is "Australian Shepherd"
        Age:1,                      // Key-value pair. Key is "Age" and value is "1"
        Sound:"Woof!"               // Key-value pair. Key is "Sound" and value is "Woof!"
    };
    delete Animal.Breed;            // Deletes key-value pair with the key "Breed"
    document.getElementById("Dictionary").innerHTML = Animal.Breed;         // Displays the key-value pair represented by "Breed". This will show as undefined because it has been deleted.
}
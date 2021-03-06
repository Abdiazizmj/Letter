// I need a constructor function for letter.js
function Letter () {
    this.letter = letter;
    this.guess = false;

};



// A string value to store the underlying character for the letter 

// A boolean value that stores whether that letter has been guessed yet

// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

Letter.prototype.returnChracter = function() {
    if(guess == true) {
        return this.letter
    }
    else {return "_"}
}

// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

Letter.prototype.checkGuess = function(guess) {
    if(guess == this.letter) {
        this.guess = true;
        
    }
    else {this.guess = false}
}
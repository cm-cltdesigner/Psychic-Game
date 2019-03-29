//pseudocode:
//player guesses the letter the computer guesses
//player wins if guessed

var computerChoices = ['a', 'e', 'i', 'o', 'u'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.querySelector('.ball').style.display = "none";

function updateGuessesLeft() {
    document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function updateGuessesSoFar() {
    document.querySelector('#var').innerHTML = "Your Guesses So Far: " + guessedLetters.join(', ');
};

var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess);

    if (check === false) {
        alert("That was not a valid guess, try again?");
        return false;

    } else if (check === true) {
        guessesLeft();
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                reset();
            }
        } else if (guessesLeft == 0) {
            // loss section
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;

            //the game is over
            reset();

        }
        return false;
    } else {
        alert("Oopsies, we have an error");
    }
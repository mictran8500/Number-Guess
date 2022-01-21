'use strict';

// Initializing the random number outside the click event handler b/c
// if we put it inside the function, we would get a new number every click.
const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;

// Logging to test guessing logic
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function() {
    // The user's input comes back as a String, so we need to convert to number
    const guess = Number(document.querySelector('.guess').value);

    // Checking for value
    if(!guess) {
        document.querySelector('.message').textContent = 'Please enter a number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct!';
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too High';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low';
        score--;
        document.querySelector('.score').textContent = score;
    }
})
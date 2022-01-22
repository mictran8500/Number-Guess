'use strict';

// Initializing the random number outside the click event handler b/c
// if we put it inside the function, we would get a new number every click.
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    // The user's input comes back as a String, so we need to convert to number
    const guess = Number(document.querySelector('.guess').value);

    // Checking for empty value
    if(!guess) {
        document.querySelector('.message').textContent = 'Please enter a number!';

    //When player guesses correctly
    } else if (guess === secretNumber) { 
        document.querySelector('.message').textContent = 'Correct!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    // When player guesses too high
    } else if (guess > secretNumber) {  
        if(score > 0) {
            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'No more guesses available.';
        }

    // When player guesses too low
    } else if (guess < secretNumber) { 
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'No more guesses available.';
        }
    }
})

// Again button - play again
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
function computerPlay(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let computerSelection = computerPlay(1, 3);
console.log(computerSelection);
let playerSelection = computerPlay(1, 3);
console.log(playerSelection);

//Rock = 1, Paper = 2, Scissors = 3

function round(playerSelection, computerSelection) {
    if (((playerSelection = 1) && (computerSelection = 3)) ||
    ((playerSelection = 2) && (computerSelection = 1)) ||
    ((playerSelection = 3) && (computerSelection = 2))) {
        gamesWon++;
        console.log('You won!');
    } else if (((playerSelection = 1) && (computerSelection = 3)) ||
        ((playerSelection = 2) && (computerSelection = 1))||
        ((playerSelection = 3) && (computerSelection = 2))) {
        gamesLost++;
        console.log('You lost...');
    } else {
    console.log('It\'s a tie, hang in there...!');
    return;
    }
}

function playerChoiceConversion(playerInput) {
    if (playerInput = '\rock\i') {
        playerSelection = 1;
    } else if (playerInput = '\paper\i') {
        playerSelection = 2;
    } else if (playerInput = '\scissors\i') {
        playerSelection = 3;
    } else return;
}
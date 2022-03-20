function computerPlay(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let computerSelection = computerPlay(1, 3);
console.log(computerSelection);
let playerInput = 'SCISSORS';
let playerSelection;
playerSelection = playerChoiceConversion(playerInput);

console.log(playerSelection);
let gamesWon = 0;
let gamesLost = 0;

//Rock = 1, Paper = 2, Scissors = 3

function playerChoiceConversion(playerInput) {
    if (playerInput.localeCompare('rock', 'en', {sensitivity: 'base'}) == 0) {
        return playerSelection = 1;
    } else if (playerInput.localeCompare('paper', 'en', {sensitivity: 'base'}) == 0) {
        return playerSelection = 2;
    } else if (playerInput.localeCompare('scissors', 'en', {sensitivity: 'base'}) == 0) {
        return playerSelection = 3;
    } else return;
}

function playRound(playerSelection, computerSelection) {
    if (((playerSelection == 1) && (computerSelection == 3)) ||
    ((playerSelection == 2) && (computerSelection == 1)) ||
    ((playerSelection == 3) && (computerSelection == 2))) {
        gamesWon++;
        console.log('You won!');
    } else if (((playerSelection == 1) && (computerSelection == 2)) ||
        ((playerSelection == 2) && (computerSelection == 3))||
        ((playerSelection == 3) && (computerSelection == 1))) {
        gamesLost++;
        console.log('You lost...');
    } else {
    console.log('It\'s a tie, hang in there...!');
    return;
    }
}
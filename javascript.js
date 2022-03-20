//Setting up variables to count the score
let gamesWon = 0;
let gamesLost = 0;

for (let gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++) {

    //Computer chooses
    let computerSelection = computerPlay(1, 3);

    //Player chooses
    let playerInput = window.prompt('Rock, paper or scissors?');
    //Choice gets converted to a number: Rock = 1, Paper = 2, Scissors = 3
    let playerSelection;
    playerSelection = playerChoiceConversion(playerInput);

    //Round starts
    playRound(playerSelection, computerSelection);

    //Terminating the loop early with 3 victories or losses
    if (gamesWon == 3) {
        console.log('You won ' + gamesWon + ' to ' + gamesLost + ', congratulations!')
        break;
    } else if (gamesLost == 3) {
        console.log('You lost ' + gamesLost + ' to ' + gamesWon + ', better luck next time...');
        break;
    }
    
    //Ending with all 5 games played but no decisive win
    if ((gamesPlayed == 4) && (gamesWon > gamesLost)) {
        console.log('You won ' + gamesWon + ' to ' + gamesLost + ', congratulations!');
    } else if ((gamesPlayed == 4) && (gamesWon < gamesLost)) {
        console.log('You lost ' + gamesLost + ' to ' + gamesWon + ', better luck next time...');
    }

}

function computerPlay(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

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
        return gamesWon;
    } else if (((playerSelection == 1) && (computerSelection == 2)) ||
        ((playerSelection == 2) && (computerSelection == 3))||
        ((playerSelection == 3) && (computerSelection == 1))) {
        gamesLost++;
        console.log('You lost...');
        return gamesLost;
    } else {
    console.log('It\'s a tie, hang in there...!');
    return;
    }
}
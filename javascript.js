//Setting up variables to count the score
let gamesWon = 0;
let gamesLost = 0;
let gamesPlayed = 0;

const btn = document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', function handler (e) {
    console.log(e);
    if (e.target.id == 'rock') {
        playerSelection = 1;
        console.log(playerSelection);
    } else if (e.target.id == 'paper') {
            playerSelection = 2;
            console.log(playerSelection);
        } else {
            playerSelection = 3;
            console.log(playerSelection);
        }

    let computerSelection = computerPlay(1, 3);

    playRound(playerSelection, computerSelection);

    gamesPlayed++;

    if (gamesWon == 5) {
            const container = document.querySelector('.results');

            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Congratulations! You won the game ' + gamesWon + ' to ' + gamesLost + '!';

            container.appendChild(content);
            const element = document.querySelectorAll('.btn').forEach(element => element.removeEventListener('click', handler))
        } else if (gamesLost == 5) {
            const container = document.querySelector('.results');

            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Game over! You lost ' + gamesWon + ' to ' + gamesLost + '.';

            container.appendChild(content);
            const element = document.querySelectorAll('.btn').forEach(element => element.removeEventListener('click', handler))
        }

}))

function computerPlay(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function playRound(playerSelection, computerSelection) {
    if (((playerSelection == 1) && (computerSelection == 3)) ||
    ((playerSelection == 2) && (computerSelection == 1)) ||
    ((playerSelection == 3) && (computerSelection == 2))) {
        gamesWon++;
        const container = document.querySelector('.results');

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'You won! The score is ' + gamesWon + ' to ' + gamesLost + '.';

        container.appendChild(content);
        return gamesWon;
    } else if (((playerSelection == 1) && (computerSelection == 2)) ||
        ((playerSelection == 2) && (computerSelection == 3))||
        ((playerSelection == 3) && (computerSelection == 1))) {
        gamesLost++;
        const container = document.querySelector('.results');

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'You lost... the score is ' + gamesWon + ' to ' + gamesLost + '.';

        container.appendChild(content);
        return gamesLost;
    } else {
        const container = document.querySelector('.results');

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'It\'s a tie, hang in there! The score is ' + gamesWon + ' to ' + gamesLost + '.';

        container.appendChild(content);
        return;
    }
}

function counter (gamesWon) {
    const container = document.querySelector('.results');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'You lost... the score is ' + gamesWon + ' to ' + gamesLost + '.';

    container.appendChild(content);
}
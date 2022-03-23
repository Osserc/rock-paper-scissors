let gamesWon = 0;
let gamesLost = 0;

const btn = document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', function handler (e) {

    if (e.target.id == 'rock') {
        playerSelection = 1;
    } else if (e.target.id == 'paper') {
            playerSelection = 2;
        } else {
            playerSelection = 3;
        }

    let computerSelection = computerPlay(1, 3);

    playRound(playerSelection, computerSelection);

    if (gamesWon == 5) {
            const container = document.querySelector('.ongoing');

            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Congratulations, magister! You successfully defended your honor!';

            container.removeChild(container.lastChild);
            container.appendChild(content);
            const element = document.querySelectorAll('.btn').forEach(element => element.removeEventListener('click', handler))

            const reset = document.querySelector('.time-loop');

            const loop = document.createElement('button');
            loop.classList.add('restart');
            loop.textContent = 'Turn back time!';

            reset.removeChild(reset.lastChild),
            reset.appendChild(loop);

        } else if (gamesLost == 5) {
            const container = document.querySelector('.ongoing');

            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'By the gods! Your champions failed you! Exile is your only option now, magister...';

            container.removeChild(container.lastChild);
            container.appendChild(content);
            const element = document.querySelectorAll('.btn').forEach(element => element.removeEventListener('click', handler))

            const reset = document.querySelector('.time-loop');

            const loop = document.createElement('button');
            loop.classList.add('restart');
            loop.textContent = 'Turn back time!';
        
            reset.removeChild(reset.lastChild),
            reset.appendChild(loop);

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
        const container = document.querySelector('.ongoing');

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Your champion triumphed!';

        container.removeChild(container.lastChild);
        container.appendChild(content);

        const score = document.querySelector('.score-yours .score-number');

        const point = document.createElement('div');
        point.classList.add('point');
        point.textContent = gamesWon;

        score.removeChild(score.lastChild);
        score.appendChild(point);

        return gamesWon;
    } else if (((playerSelection == 1) && (computerSelection == 2)) ||
        ((playerSelection == 2) && (computerSelection == 3))||
        ((playerSelection == 3) && (computerSelection == 1))) {
        gamesLost++;
        const container = document.querySelector('.ongoing');

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Your champion lost...';

        container.removeChild(container.lastChild);
        container.appendChild(content);

        const score = document.querySelector('.score-veknos .score-number');

        const point = document.createElement('div');
        point.classList.add('point');
        point.textContent = gamesLost;

        score.removeChild(score.lastChild);
        score.appendChild(point);

        return gamesLost;

    } else {
        const container = document.querySelector('.ongoing');

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'It\'s a tie, hang in there!';

        container.removeChild(container.lastChild);
        container.appendChild(content);

        return;
    }

}

function counter (gamesWon) {
    const container = document.querySelector('.ongoing');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'You lost... the score is ' + gamesWon + ' to ' + gamesLost + '.';

    container.appendChild(content);
}
var score = [0, 0];
var activePlayer = 0;
var gameState;
var block = '<div class="player-0-score-block-red"></div>';
const player0Score = document.getElementById('finalScore-0');
const player1Score = document.getElementById('finalScore-1');
const player0Live = document.getElementById('live-0');
const player1Live = document.getElementById('live-1');
const player0Block = document.getElementById('player-0-score-block');
const player1Block = document.getElementById('player-1-score-block');
const winner0 = document.getElementById('winner-0');
const winner1 = document.getElementById('winner-1');
const dice = document.querySelector('.dice');
start();

document.querySelector('.btn-roll-dice').addEventListener('click', () => {
    if (gameState) {
        if (score[0] < 20 && score[1] < 20) {
            var diceRand = Math.floor(Math.random() * 6 + 1);
            score[activePlayer] += diceRand;
            scoreBlock();
            dice.style.display = 'block';
            dice.src = `img/dice-${diceRand}.png`
            document.getElementById('live-' + activePlayer).style.display = 'block';
            document.getElementById('finalScore-' + activePlayer).textContent = score[activePlayer];
            activePlayer = activePlayer == 0 ? 1 : 0;
            document.getElementById('live-' + activePlayer).style.display = 'none';
        }
        else {
            gameState = false;
            activePlayer = activePlayer == 0 ? 1 : 0;
            document.getElementById('winner-' + activePlayer).classList.remove('invisible');
            console.log('winner');

        }
    }

})

document.querySelector('.btn-reset').addEventListener('click', start)
function scoreBlock() {
    var size = score[activePlayer];
    if (size > 20) {
        size = 20;
    }
    switch (activePlayer) {
        case 0:
            player0Block.innerHTML = '';
            for (let i = 0; i < size; i++) {
                player0Block.innerHTML += block;
            }
            break;

        case 1:
            player1Block.innerHTML = '';
            for (let i = 0; i < size; i++) {
                player1Block.innerHTML += block;
            }
            break;
    }
}

function start() {
    gameState = true;
    score = [0, 0];
    player0Score.innerHTML = '0';
    player1Score.innerHTML = '0';
    player0Live.style.display = 'none';
    player1Live.style.display = 'none';
    player0Block.innerHTML = '';
    player1Block.innerHTML = '';
    winner0.classList.add('invisible');
    winner1.classList.add('invisible');
    dice.style.display = 'none';
}
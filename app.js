

//Score update on button click

const btnPlayer1 = document.querySelector('.player-1');
const btnPlayer2 = document.querySelector('.player-2');
const btnReset = document.querySelector('.reset');
const score1 = document.querySelector('.score-1');
const score2 = document.querySelector('.score-2');
const initialScore = document.querySelector('.score');
const scoreCap = document.querySelector('#num');

let player1Score = 0;  //initializing score to zero for both players at the start of game
let player2Score = 0;
btnPlayer1.addEventListener('click', function(e){
    player1Score ++;
    score1.innerText = player1Score;
    checkForWinner();
});
btnPlayer2.addEventListener('click',function (e){
    player2Score ++;
    score2.innerText = player2Score;
    checkForWinner();
});
btnReset.addEventListener("click", function(e){
    //location.reload();   //reloads page when reset is clicked, so that scores are cleared and new games can be played
    //initialScore.innerText = '0 - 0';
    player1Score = 0;
    player2Score = 0;
    score1.innerText = player1Score;
    score2.innerText = player2Score;
})

let scoreCapUpdate;
scoreCap.addEventListener('click', function(){
     scoreCapUpdate = scoreCap.value;
})
//const scoreCapUpdate = scoreCap.value;
function checkForWinner() {
    if (player1Score >= scoreCapUpdate) {
        alert('Player 1 wins!');
    } else if (player2Score >= scoreCapUpdate) {
        alert('Player 2 wins!');
    }
}
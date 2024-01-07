'use strict';

//Variavei
let scores = [];
let currentScore;
let activePlayer;
let playing;

//Selectors


const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')


//_____________________________//
//:


//Event Listeners

btnRoll.addEventListener('click', function(){
rollDice();},false);

btnNew.addEventListener('click', function(){init()},false);

btnHold.addEventListener('click',function(){holdScore()},false);
btnNew.addEventListener('click', function(){init ()},false)



//_____________________________//
//:

//FUNCTIONS
function init (){
    scores  = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;

    dice.classList.add('hidden');
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    
   

};
init();

function rollDice(){
    if(playing){
    const diceNr = Math.trunc(Math.random()*6)+1;
    console.log('diceNr:',diceNr);
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNr}.png`;

    //checked for  rolled 1: if true, switch to next player
    if(diceNr !==1){
        //add dice to the current score
        currentScore += diceNr;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

       

    }else {
        //switch player
        
        switchPlayer();
 
    }
}

}
function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

function holdScore(){
    if(playing){
    //Add current score to active player´s score
    scores[activePlayer] += currentScore;
    //score[1] = score[1]+ current score
    console.log('active:',scores[activePlayer]);

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // check if players score >=100
    if( scores[activePlayer] >= 10){
        playing = false;
        dice.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
       
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else
    // switch to the next player
    switchPlayer()
}
}

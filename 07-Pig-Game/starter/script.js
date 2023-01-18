'use strict';
 
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')

//Buttons
const btnRoll = document.querySelector('.btn--roll');

diceEl.classList.add('hidden')
score0El.textContent = 0
score1El.textContent = 0

let currentScore = 0
let activePlayer = 0

//BUTTON ROLE FUNCTIONALITY

function roll(params) {
    let dice = Math.trunc(Math.random() * 6 + 1)
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
}

btnRoll.addEventListener(
    'click', roll
) 




































































/*
// selecting Element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
//Buttons 
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

//sections
const player0sec = document.querySelector('.player--0')
const player1Sec = document.querySelector('.player--1')
//starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

const scores = [0,0];
let currentscore = 0;
let activePlayer = 0;

//Rolling dice functionality

function switchplayer(params) {
   document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentscore = 0;
    player0sec.classList.toggle('player--active')
    player1Sec.classList.toggle('player--active')
}


function diceRoll(params) {
   console.log('agba')
  //generating a random dice roll
  const dice = Math.trunc(Math.random() * 6 ) + 1;
  // Display dice
  diceEl.classList.remove('hidden')
  diceEl.src = `dice-${dice}.png`
  //Check for roll 1 if true
  if (dice !== 1) {
    // add dice to the current score
     currentscore = currentscore + dice
     document.getElementById(`current--${activePlayer}`).textContent = currentscore;
  } else {
    //switch player
    switchplayer()    
}

 
}

btnRoll.addEventListener(
   'click', diceRoll
)



//BUTTON HOLD FUNCTIONASSLITY

function buttonHold(params) {
   //. add current score to active player
   scores[activePlayer] += currentscore;
   // scores[1] = scores[1] + currentScore
   document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
   
   //check if score is already 100 >=
   if (score[activePlayer] >= 20) {
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner') 
   } else {
       //switch to next player
  switchplayer()
   }
     
}


btnHold.addEventListener(
   'click', buttonHold
)
*/






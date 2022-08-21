'use strict';
 /*console.log(document.querySelector('.message').textContent); 

document.querySelector('.message').textContent = 'Correct Number';

console.log(document.querySelector('.message').textContent); 

document.querySelector('.score').textContent = 40;

document.querySelector('.number').textContent = 30;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23

document.querySelector('.highscores').textContent;
*/


const secretNUmber= Math.trunc(Math.random() * 20) + 1;
console.log(secretNUmber);
let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener(
    'click', function () {
       const guess =  Number(document.querySelector('.guess').value);
      

       //when there is no guess
       if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ input a number!';
        displayMessage('⛔️ input a number!')
        
    
        
      }
       
      

     // when player wins
       else if (guess===secretNUmber) {
        
        document.querySelector('.score').textContent = score--
       // document.querySelector('.message').textContent = 'congrat you win this game'

       displayMessage('congrat you win this game')

        document.querySelector('.number').textContent= secretNUmber


        document.querySelector('body').style.backgroundColor = 'green' ;

        document.querySelector('.number').style.width = '30rem'
         
        if (score>highscore) {
          highscore = score
          document.querySelector('.highscore').textContent = highscore;
        }
      //  highscore = score;
       // document.querySelector('.highscore').textContent = highscore;



       }
      
       //when guess is wrong
       else if (guess !== secretNUmber) {
        if (score > 1) {
          //document.querySelector('.message').textContent = guess > secretNUmber ? '📈 Too high!' : '📈 too low';
          displayMessage( guess > secretNUmber ? '📈 Too high!' : '📈 too low');
           score--;
           document.querySelector('.score').textContent = score;
          } else {
            document.querySelector('.message').textContent = 'you lost the game'

            document.querySelector('.score').textContent  = 0;
          }

          
          
        /*  if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too low!';
             score--;
             document.querySelector('.score').textContent = score;
            } else {
              document.querySelector('.message').textContent = '💥 You lost the game!';
            }*/
           
       }

      }
)


    /*  //when guess is higher
       if (guess>secretNUmber) {
        if (score > 1) {
              document.querySelector('.message').textContent =      '📈 Too high!';
               score--;
               document.querySelector('.score').textContent = score;
              } else {
                document.querySelector('.message').textContent = '📈 Too high!'

                document.querySelector('.score').textContent = 0;
                
              }
      

       //WHEN PLAYER GUESS LOWER
       } else if (guess < secretNUmber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too low!';
             score--;
             document.querySelector('.score').textContent = score;
            } else {
              document.querySelector('.message').textContent = '💥 You lost the game!';
            }

        
       } 
    }
   
)  */



document.querySelector('.again').addEventListener(
  'click', function (params) {

  
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent='start guessing'
    document.querySelector('.guess').textContent=''
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem'

  }
) 




/*document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})  */
 

















      /* if (!guess) {
        document.querySelector('.message').textContent = 'NO number'
        //when player wins
       } else if (guess===secretNUmber) {
        
        document.querySelector('.score').textContent = score
        document.querySelector('.message').textContent = 'iya ope, you have win this game'

        document.querySelector('.number').textContent= secretNUmber


        document.querySelector('body').style.backgroundColor = 'green' ;

        document.querySelector('.number').style.width = '30rem'
 
       }
        if (score > highscore) {

          highscore = score;

          document.querySelector('.highscore').textContent= highscore;
        }
        
        //when the number is higher
       } else if (guess>secretNUmber) {
        document.querySelector('.score').textContent = score--
        document.querySelector('.message').textContent = 'too high, try again'
       }

       else if (guess<secretNUmber) {
        document.querySelector('.score').textContent = score--
        document.querySelector('.message').textContent = 'too low, try again'
       } else {
        
       }

    }
    
    )


    document.querySelector('.again').addEventListener(
      'click', function (params) {
        document.querySelector('.score').textContent = 20;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.message').textContent='start guessing'
        document.querySelector('.guess').textContent=''
        document.querySelector('body').style.backgroundColor='#222'
        document.querySelector('.number').style.width='15rem'
    
      }

    ) */

   


      
 
      

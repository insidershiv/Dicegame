/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var dice, activePlayer, scores, roundScore, gamePlaying = true ;
let times = 0 ;
let limit = 10;



init();



document.querySelector('.btn-roll').addEventListener('click', ()=>{
    // ** generating Random number

    
    
    if(gamePlaying){

       scramble();
    

        // *** Display the Outcome of Random of number 
    
        
        if(dice !== 1) {
            roundScore += dice ;
    
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
       }
    
        else {
            // Next Player
           
            nextPlayer();
            }
    
        
    }

    });

    document.querySelector('.btn-hold').addEventListener('click', ()=>{
       
       if(gamePlaying){

        scores[activePlayer] += roundScore; 
        
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
                    
        if(scores[activePlayer] > 20) {
            
            document.querySelector('#name-' + activePlayer).textContent = 'winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false ;
            
        }else{

            nextPlayer();
        }
       }

        });



        // Next Player function


        function nextPlayer(){
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
           
            
            // console.log(activePlayer);
           roundScore = 0; 
            document.getElementById('current-0').textContent = '0' ;
    
            document.getElementById('current-1').textContent = '0' ;

            document.querySelector('.player-0-panel').classList.toggle('active');
    
            document.querySelector('.player-1-panel').classList.toggle('active');
         
          
           
           
            document.querySelector('.dice').style.display = 'none';
      
        }


        function init(){
            
         scores = [0,0];
         roundScore = 0;
         activePlayer = 0;


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';

document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';

document.getElementById('name-1').textContent = 'Player 2';



document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');

        }


//************ Scramble Dice effect */

        let scramble = function() {
            times++;
             dice = (Math.floor((Math.random() * 100))%6) + 1;
             var diceDom = document.querySelector('.dice');
    
            diceDom.style.display= 'block' ;
        
            diceDom.src = 'assets/dice-' + dice + '.png';
       
            if(times==limit){
                times =0;

            }else {
                console.log(dice);
                
                setTimeout(scramble, 150);
            }
        }

        document.querySelector('.btn-new').addEventListener('click', init);
     
    

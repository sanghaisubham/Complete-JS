/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer;
var previousdice=0;
var gameplaying;
//A state variable simply tells us the condition of a system and we use state variable when we need to remember something
//Here state is to check if our game is playing or not playing
init(); 
//DOME ACCESS AND MANIPULATION

var dice = Math.floor(Math.random()*6)+1;
// For id => we use '#' &
// For class=> we use '.'
document.querySelector('#current-'+activePlayer).textContent=dice;// We can set and not HTML using textContent 

document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';//We can set HTML using innerHTML


//Only works for ID's but faster than querySelector
document.getElementById('current-'+activePlayer).textContent='0';// We can set and not HTML using textContent 
document.getElementById('current-'+activePlayer).textContent=dice;// We can set and not HTML using textContent
document.getElementById('current-'+activePlayer).textContent=dice;// We can set and not HTML using textContent  

//var x = document.querySelector('#score-0').textContent;
//console.log(x);

//Changing CSS
document.querySelector('.dice').style.display='none';




//EVENT HANDLING

//Event can only be processed or handled as soon as the Execution Context stack is empty or all the functions have retuned. 


function btn()
{

}
btn();

//We dont use () here because we want the event listener to call the function for us
//btn is call back function(function passed as argument in another function)
//Here Eventlistener calls the btn function

//document.querySelector('.btn-roll').addEventListener('click',btn);


//Anonymous function is a function without the name
document.querySelector('.btn-roll').addEventListener('click',function() {

	if(gameplaying)
	{
		var dice = Math.floor(Math.random()*6)+1;

	var diceDOM=document.querySelector('.dice');
	diceDOM.style.display='block';
	diceDOM.src='dice-'+dice+'.png';

	//Only works for ID's but faster than querySelector
	document.getElementById('current-'+activePlayer).textContent=dice;// We can set and not HTML using textContent 
	

	if(dice!==1 || !(previousdice===6 && dice===6))
	{
		//Add Score
		previousdice=dice;
		roundScore+=dice;
		document.getElementById('current-'+activePlayer).textContent=roundScore;// We can set and not HTML using textContent 

	}
	else
	{
		nextPlayer();//DRY principle (Dont Repeat Your Code)
		
	}
}

	//Do Something

	

});

document.querySelector('.btn-hold').addEventListener('click' ,function(){
	if(gameplaying)
	{

 //Add Current score to global score
 	scores[activePlayer]+=roundScore;

 //Update UI
 	document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
 	
 //Check if player won the game

 	if(scores[activePlayer]>=100)
 	{
 		document.querySelector("#name-"+activePlayer).textContent='Winner!'; 
 		document.querySelector('.dice').style.display='none';
 		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
 		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
 		gameplaying=false;
 	}
 	else
 	{
 		//NextPlayer

 	nextPlayer();
 }
}
});

document.querySelector('.btn-new').addEventListener('click',init);
function init(){
	scores=[0,0];
	activePlayer=0;
	roundScore=0;
    gameplaying=true;

	document.querySelector('.dice').style.display='none';

	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.getElementById('name-0').textContent='Player 1';
	document.getElementById('name-1').textContent='Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	document.querySelector('.player-0-panel').classList.add('active');
}
function nextPlayer()
{
	activePlayer^=1; 
	 roundScore = 0;
	 previousdice=0;
 	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';

		//Moving active from one class to the other one
		// document.querySelector('.player-0-panel').classList.remove('active');
		// document.querySelector('.player-1-panel').classList.add('active');

		//Instead of removing and adding , we are toggling
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('.dice').style.display='none';

}
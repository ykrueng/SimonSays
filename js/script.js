// const buttonA = document.querySelector('.a');
// const buttonS = document.querySelector('.s');
// const buttonD = document.querySelector('.d');
// const buttonW = document.querySelector('.w');

// Global variable of Array sequence
var gameSeq = [];
var userSeq = [];
var bCorrect = true;

const randomize = () => {
  return Math.floor(Math.random()*4)+1;
}
// set up click functions for the btns on page
$('#btn1').click(function(){
	console.log("test btn1");
	comparePattern(1);
})

$('#btn2').click(function(){
	console.log("test btn2");
	comparePattern(2);
})

$('#btn3').click(function(){
	console.log("test btn3");
	comparePattern(3);
})

$('#btn4').click(function(){
	console.log("test btn4");
	comparePattern(4);
})

function displayPattern(gameSeq)
{

	for(var i = 0; i <= gameSeq.length - 1; i++)
	{
		var currNum = gameSeq[i];
		switch (currNum){
			case 1:
				console.log("btn 1");
				break;
			case 2:
				console.log("btn 2");
				break;
			case 3:
				console.log("btn 3");
				break;
			case 4:
				console.log("btn 4");
				break;
			default:
				console.log("Error");
		}
	}

}

function comparePattern(userInput){
	userSeq.push(userInput);
	for(var i = 0; i <= userSeq.length - 1; i++){
		if (userSeq[i] != gameSeq[i]) {
			bCorrect = false;
			console.log("You Lost!");
			return;
		}
		else if(i = gameSeq.length - 1){
			//User got it all right!
			// clear userSeq
			//Check if the length of the userSeq or gameSeq equals 20. When they do the player has won
			
		}
	}
}

const game = () => {
	  let gameInSession = true;

	  while (gameInSession) {
	    gameSeq.push(randomize());

	    gameInSession = gameSeq.length < 5 ;

	    console.log(gameSeq);
	    displayPattern(gameSeq);

	  }
}




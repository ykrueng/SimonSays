// const buttonA = document.querySelector('.a');
// const buttonS = document.querySelector('.s');
// const buttonD = document.querySelector('.d');
// const buttonW = document.querySelector('.w');

// Global variable of Array sequence
var gameSeq = [];
var userSeq = [];
var bCorrect = false;
var timeVar = null;

const randomize = () => {
  return Math.floor(Math.random()*4)+1;
}
// set up click functions for the btns on page
$('#btn1').click(function(){
	comparePattern(1);
})

$('#btn2').click(function(){
	comparePattern(2);
})

$('#btn3').click(function(){
	comparePattern(3);
})

$('#btn4').click(function(){
	comparePattern(4);
})

function displayPattern(gameSeq)
{

	for(var i = 0; i <= gameSeq.length - 1; i++)
	{
		var currNum = gameSeq[i];
		switch (currNum){
			case 1:
				$('#btn1').addClass("glow");
				$('#btn1').removeClass("glow");
				break;
			case 2:
				$('#btn2').addClass("glow");
				$('#btn2').removeClass("glow");
				break;
			case 3:
				$('#btn3').addClass("glow");
				$('#btn3').removeClass("glow");
				break;
			case 4:
				$('#btn4').addClass("glow");
				$('#btn4').removeClass("glow");
				break;
			default:
				console.log("Error");
				break;
		}
	}

}

function comparePattern(userInput){
	if (timeVar == null || timeVar == undefined) {
		return;
	}
	userSeq.push(userInput);
	console.log("user added " + userInput);
	for(var i = 0; i <= userSeq.length - 1; i++){
		if (userSeq[i] != gameSeq[i]) {
			bCorrect = false;
			userSeq =[];
			return;
		}
		else if(i == gameSeq.length - 1){
			if (userSeq.length == 20){
				bCorrect = true;
				console.log("You won. Congrats");
				$("#displayMessage").html("You won the game, Congrats!");
				$("#displayMessage").fadeIn("slow");
				return;
			}
			bCorrect = true;
			userSeq = [];
			$("#displayMessage").html("You won. Next Level");
			$("#displayMessage").fadeIn("slow");
			console.log("You won. Next Level");
		}
	}
}

const game = () => {
	let gameInSession = true;
	gameSeq.push(randomize());
	$(this).prop("disabled",true);

    console.log(gameSeq);
    displayPattern(gameSeq);
    timeVar = setInterval(() => {
    	var userPassed = checkMatch();
    	if (userPassed) {
    		bCorrect = false;
    		gameSeq.push(randomize());
    		console.log(gameSeq);
    	}
    	else{
    		console.log("You lost! Play Again?");
    		$("#displayMessage").html("You lost the game! Try Again?");
			$("#displayMessage").fadeIn("slow");
			clearInterval(timeVar);
    		return;
    	}
    }, 3500 * gameSeq.length);

}

function clearGame(){
	gameSeq = [];
	userSeq = [];
	clearInterval(timeVar);
	console.clear();
}

function checkMatch(){
	console.log("checked");
	return bCorrect;
}




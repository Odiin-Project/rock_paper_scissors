let computerScore = 0;
let opponentScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", function (e) {
	console.log("rock");
	game("rock");
});

paper.addEventListener("click", function (e) {
	console.log("paper");
	game("paper");
});

scissors.addEventListener("click", function (e) {
	console.log("scissors");
	game("scissors");
});


function game(playerSelection) {
	
	const computerSelection = getComputerChoice();

	let result = playRound(computerSelection, playerSelection);

	if (result.includes("Win")) {
		opponentScore++;
		console.log(`YourScore: ${opponentScore}, ComputerB: ${computerScore}`);
	} else {
		computerScore++;
	}

	if(opponentScore == 5 || computerScore == 5){

		if(opponentScore > computerScore){
			console.log("You Won The Match!");
		}else if(opponentScore < computerScore){
			console.log("You Lost The Match!");
		} else{
			console.log("Draw Match.");
		}

		console.log(`FINAL SCORES: YourScore: ${opponentScore}, ComputerB: ${computerScore}`);
		computerScore = 0;
		opponentScore = 0;
	}
	


}


function playRound(computerSelection, playerSelection) {
	console.log(`You: ${playerSelection}, Computer: ${computerSelection}`);
	if (computerSelection === playerSelection) {
	  return `It's a TIE! You both played ${playerSelection}`;
	} else if (computerSelection === "rock" && playerSelection === "paper") {
	  return "You Win! Paper beats Rock";
	} else if (computerSelection === "rock" && playerSelection === "scissors") {
	  return "You Lose! Rock beats Scissors";
	} else if (computerSelection === "paper" && playerSelection === "scissors") {
	  return "You Win! Scissors beats Paper";
	} else if (computerSelection === "paper" && playerSelection === "rock") {
	  return "You Lose! Paper beats Rock";
	} else if (computerSelection === "scissors" && playerSelection === "rock") {
	  return "You Win! Rock beats Scissors";
	} else if (computerSelection === "scissors" && playerSelection === "paper") {
	  return "You Lose! Scissors beats Paper";
	}
  }
  

function getComputerChoice() {
	let arr = ["rock", "paper", "scissors"];
	return arr[Math.round(Math.random() * 2)];
  }
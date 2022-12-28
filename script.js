function game() {
  let computerScore = 0;
  let opponentScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "What's your move? - rock, paper or scissors"
    );
    const computerSelection = getComputerChoice();
    let result = playRound(computerSelection, playerSelection);
    if (result.includes("Win")) {
      opponentScore++;
    } else {
      computerScore++;
    }
  }
  
  if(opponentScore > computerScore){
    console.log("You Won The Match!");

  }else if(opponentScore < computerScore){
    console.log("You Lost The Match!");

  } else{
    console.log("Draw Match.");
  }
console.log(`YourScore: ${opponentScore}, ComputerB: ${computerScore}`);

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

// console.log(`YouB: ${playerSelection}, ComputerB: ${computerSelection}`);

// console.log(playRound(computerSelection, playerSelection));
game();

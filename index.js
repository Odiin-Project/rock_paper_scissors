function playRound (computerSelection, playerSelection) {
    if(computerSelection === playerSelection){
        return `It's a TIE! You both played ${playerSelection}`;
    } else if( computerSelection === "rock" && playerSelection === "paper"){
        return "You Win! Paper beats Rock";
    } else if( computerSelection === "rock" && playerSelection === "scissors"){
        return "You Lose! Rock beats Scissors";
    } else if( computerSelection === "paper" && playerSelection === "scissors"){
        return "You Win! Scissors beats Paper";
    } else if( computerSelection === "paper" && playerSelection === "rock"){
        return "You Lose! Paper beats Rock";
    } else if( computerSelection === "scissors" && playerSelection === "rock"){
        return "You Win! Rock beats Scissors";
    } else if( computerSelection === "scissors" && playerSelection === "paper"){
        return "You Lose! Scissors beats Paper";
    }
}


function getComputerChoice() {
    let arr = ["rock","paper","scissors"];
    return arr[Math.round(Math.random() * 2)];
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

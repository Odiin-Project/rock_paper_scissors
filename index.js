function playRound (computerSelection, playerSelection) {
    if(computerSelection == playerSelection){
        return "It's a TIE!"
    } else {
        return "Add logic"
    }
}


function getComputerChoice() {
    let arr = ["rock","paper","scissors"];
    return arr[Math.round(Math.random() * 2)];
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

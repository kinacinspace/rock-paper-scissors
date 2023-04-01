const ROCK = 0
const PAPER = 1
const SCISSORS = 2

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }  

function getComputerChoice(){
    switch (getRandomInt(1, 4)){
        case 1: return ROCK;
        case 2: return PAPER;
        case 3: return SCISSORS;
    }
}

function getPlayerChoice(){
    playerChoice = prompt("Write (rock, paper, scissors)")
    switch (playerChoice.toLowerCase()){
        case "rock": return ROCK;
        case "paper": return PAPER;
        case "scissors": return SCISSORS;
    }
    console.log("Invalid input!")
    getPlayerChoice()
}

function playRound(playerHand, computerHand){
    let playerHandString = handToString(playerHand)
    let computerHandString = handToString(computerHand)
    if (playerHand == ROCK) {
        switch (computerHand){
            case ROCK: return `Tie!`;
            case PAPER: return `You lose! ${capitalizeString(computerHandString)} beats ${playerHandString}!`;
            case SCISSORS: return `You win! ${capitalizeString(playerHandString)} beats ${computerHandString}!`;
        }
    } else if (playerHand == PAPER) {
        switch (computerHand){
            case ROCK: return `You win! ${capitalizeString(playerHandString)} beats ${computerHandString}!`;
            case PAPER: return `Tie!`;
            case SCISSORS: return `You lose! ${capitalizeString(computerHandString)} beats ${playerHandString}!`;
        }
    } else if (playerHand == SCISSORS) {
        switch (computerHand){
            case ROCK: return `You lose! ${capitalizeString(computerHandString)} beats ${playerHandString}!`;
            case PAPER: return `You win! ${capitalizeString(playerHandString)} beats ${computerHandString}!`;
            case SCISSORS: return `Tie!`
        }
    }
}

function capitalizeString(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function handToString(hand){
    switch (hand){
        case ROCK: return "rock";
        case PAPER: return "paper";
        case SCISSORS: return "scissors";
    }
    console.error("Invalid hand");
}

console.log(playRound(getPlayerChoice(), getComputerChoice()))
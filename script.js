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



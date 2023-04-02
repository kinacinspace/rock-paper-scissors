const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
let playerScore = 0;
let computerScore = 0;
let winner = -1;


const winnerText = document.querySelector(".winner");
winnerText.style.visibility = "hidden"
const buttons = document.querySelectorAll("button");
const resultText = document.querySelector(".result");
const scoreText = document.querySelector(".score")
const playerText = document.querySelector(".choice .player");
const computerText = document.querySelector(".choice .computer");


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

function getPlayerChoice(choice){
    //playerChoice = prompt("Write (rock, paper, scissors)")
    switch (choice){
        case "rock": return ROCK;
        case "paper": return PAPER;
        case "scissors": return SCISSORS;
    }
    console.log("Invalid input!");
    getPlayerChoice();
}

function playRound(playerHand){
    computerHand = getComputerChoice();
    let result = ""
    let playerHandString = handToString(playerHand)
    let computerHandString = handToString(computerHand)
    if (playerHand == ROCK) {
        switch (computerHand){
            case ROCK:
                result = `Tie!`;
                break;
            case PAPER: computerScore++
                result = `You lose! ${capitalizeString(computerHandString)} beats ${playerHandString}!`;
                break;
            case SCISSORS: playerScore++
                result = `You win! ${capitalizeString(playerHandString)} beats ${computerHandString}!`;
                break;
        }
    } else if (playerHand == PAPER) {
        switch (computerHand){
            case ROCK: playerScore++
                result = `You win! ${capitalizeString(playerHandString)} beats ${computerHandString}!`;
                break;
            case PAPER:
                result = `Tie!`;
                break;
            case SCISSORS: computerScore++
                result =  `You lose! ${capitalizeString(computerHandString)} beats ${playerHandString}!`;
                break;
        }
    } else if (playerHand == SCISSORS) {
        switch (computerHand){
            case ROCK: computerScore++
                result = `You lose! ${capitalizeString(computerHandString)} beats ${playerHandString}!`;
                break;
            case PAPER: playerScore++
                result = `You win! ${capitalizeString(playerHandString)} beats ${computerHandString}!`;
                break;
            case SCISSORS:
                result = `Tie!`
                break;
        };
    };

    if (playerScore >= 5) {
        announceWinner("player");
    } else if (computerScore >= 5) {
        announceWinner("computer");
    };

    scoreText.textContent = `${playerScore} - ${computerScore}`
    resultText.textContent = result;
    playerText.textContent = playerHandString;
    computerText.textContent = computerHandString;

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

function game(playerChoice, computerChoice){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerChoice, computerChoice))
        console.log(`Player score - ${playerScore}, Computer score - ${computerScore}`)
    }
    if (playerScore > computerScore) {
        console.log("Congrats! You won the game!")
    } else if (computerScore < playerScore) {
        console.log("Darn! You just lost the game!")
    } else {
        console.log("This game is a tie!")
    }
}


function announceWinner(winner) {
    let winText = "";
    if (winner == "player") {
        winText = "Congratulations! You won!";
    } else {
        winText = "Aww! Better luck next time!";
    }
    winnerText.style.visibility = "visible";
    winnerText.textContent = winText;
}



buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = Number(button.dataset.hand);
    playRound(playerChoice);
  });
});
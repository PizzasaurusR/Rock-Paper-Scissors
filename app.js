
// Game Functions

let playerChoice = prompt("Please make a choice: Rock, Paper, Scissors").toUpperCase();
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function getComputerChoice(){
computerChoice = Math.floor(Math.random() * 3) + 1;
console.log(computerChoice);
    if (computerChoice = 1){
        computerSelection = "ROCK";
        return computerSelection;
    } else if(computerChoice = 2){
        computerSelection = "PAPER";
    return computerSelection;
    } else {
        computerSelection = "SCISSORS"
        return computerSelection;
    }
}

function playGame(playerSelection, computerSelection){
    if (playerSelection = computerSelection){
        console.log("Its a Draw!")
    }
    if(
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ){
        playerScore++;
        roundWinner = "player";
    }
    if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ){
        computerScore++;
        roundWinner = "";
    }
}    

function isGameOver(){
    return playerScore === 5 || computerScore === 5;
}

//Make it work code

const playerScorePara = document.getElementById("playerScoreP");
const computerScorePara = document.getElementById("computerScoreP");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const resetBtn = document.getElementById("reset-btn")
const displayResults = document.getElementById("results");
const humanCurrentScore = document.getElementById("humanCurrentScore");
const computerCurrentScore = document.getElementById("computerCurrentScore");
const displayComputerChoice = document.getElementById("computerChoice");
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const displayWinner = document.getElementById("gameWinner");

buttonRock.addEventListener("click", () => playRound("rock"));
buttonPaper.addEventListener("click", () => playRound("paper"));
buttonScissors.addEventListener("click", () => playRound("scissors"));

function getComputerChoice() {
    let randomizeRockPaperScissors = Math.floor(Math.random()*3)
    if (randomizeRockPaperScissors === 0) {
        displayComputerChoice.innerText = "The computer chose rock";
        console.log("Rock")
        return "rock"
    }
    if (randomizeRockPaperScissors === 1) {
        displayComputerChoice.innerText = "The computer chose paper";
        console.log("Paper")
        return "paper"
    }
    if (randomizeRockPaperScissors === 2) {
        displayComputerChoice.innerText = "The computer chose scissors";
        console.log("Scissors")
        return "scissors"
    }
}

function getHumanChoice(choice) {
    if (choice.toLowerCase() === "rock") {
        displayResults.innerText = "The human chose rock";
        return "rock"
    }
    if (choice.toLowerCase() === "paper") {
        displayResults.innerText ="The human chose paper";
        return "paper"
    }
    if (choice.toLowerCase() === "scissors") {
        displayResults.innerText = "The human chose scissors";
        return "scissors"
    }
    else {
        alert("Are you sure you know how to play the game?")
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(choice) {
    const humanChoice = getHumanChoice(choice);
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log("Tie");
        return "tie"
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        humanCurrentScore.innerText = `Human Score: ${humanScore}`
        console.log("Human wins!")
        
        // Check if human has reached 5 points
        if (humanScore === 5) {
            displayWinner.innerText = "Human Wins the Game!";
            buttonRock.disabled = true;
            buttonPaper.disabled = true;
            buttonScissors.disabled = true;
        }
        return "human";
    }
    else {
        computerScore++;
        computerCurrentScore.innerText = `Computer Score: ${computerScore}`
        console.log("Computer wins!");
        
        // Check if computer has reached 5 points
        if (computerScore === 5) {
            displayWinner.innerText = "Computer Wins the Game!";
            buttonRock.disabled = true;
            buttonPaper.disabled = true;
            buttonScissors.disabled = true;
        }
        return "computer";
    }
}

function gameWinner() {
    if (humanScore > computerScore) {
        displayWinner.innerText = "Human Wins the Game!";
    }
    else if (humanScore < computerScore) {
        displayWinner.innerText = "Computer Wins the Game!";
    } 
    else {
        displayWinner.innerText = "The game is a tie!";
    }
}
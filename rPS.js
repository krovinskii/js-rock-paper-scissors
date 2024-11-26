
function getComputerChoice() {
    let randomizeRockPaperScissors = Math.floor(Math.random()*3)
    if (randomizeRockPaperScissors === 0) {
        console.log("The computer chose rock");
        return "rock"
    }
    if (randomizeRockPaperScissors === 1) {
        console.log("The computer chose paper");
        return "paper"
    }
    if (randomizeRockPaperScissors === 2) {
        console.log("The computer chose scissors");
        return "scissors"
    }
    
}

function getHumanChoice() {
    let humanChoice = prompt("What's it going to be? Rock, paper, or scissors?")
    if (humanChoice.toLowerCase() ==="rock") {
        console.log("The human chose rock");
        return "rock"
    }
    if (humanChoice.toLowerCase() ==="paper") {
        console.log("The human chose paper");
        return "paper"
    }
    if (humanChoice.toLowerCase() ==="scissors") {
        console.log("The human chose scissors");
        return "scissors"
    }
    else {
        alert("Are you sure you know how to play the game?")

    }

}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice();
         computerChoice = getComputerChoice();

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
            console.log("Human wins!")
            return "human";
        }
        else {
            computerScore++;
            console.log("Computer wins!");
            return "computer";
        }
    }

    // Play 5 rounds 
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    // Announce overall winner
    function gameWinner() {
        if (humanScore > computerScore) {
            console.log("Human Wins the Game!");
        }
        if (humanScore < computerScore) {
            console.log("Computer Wins the Game!");
        } else {
            console.log("The game is a tie!");
        }
    }
    



    console.log("Human: " + humanScore)
    console.log("Computer: " + computerScore)
    gameWinner();



}


playGame();








/*   Complete function for getting the winner and increasing the score by 1 
let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

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
        console.log("Human wins!")
        return "human";
    }
    else {
        computerScore++;
        console.log("Computer wins!");
        return "computer";
    }


}

console.log(playRound());
console.log("The human score is " + humanScore)
console.log("The computer score is " + computerScore)


*/ 




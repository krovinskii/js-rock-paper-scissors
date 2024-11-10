function getComputerChoice() {
    let rps = Math.floor(Math.random()*3)
    if (rps == 0){
        return ("rock");
    }
    else if (rps == 1){
        return ("paper")
    }
    else {
        return ("scissors")
    }
    


}
console.log(getComputerChoice());



console.log(getUserChoice());

let playerScore = 0;
let botScore = 0;

function playRound(humanChoice, computerChoice) {
    let botSelection = getComputerChoice();
    let humanSelection = getUserChoice();
    if (humanSelection > botSelection) {
        return ("Suck it bots! Humans win!")
    }
    if (humanSelection == botSelection) {
        return ("Try again losers, you tied.")
    }
    if (humanSelection < botSelection) {
        return ("It was only a matter of time before the bots ruled us.. Bot wins!")
    }
    
}

playRound(humanSelection, computerSelection);
//Need to read more on parameters and how they work.. 
function getUserChoice() {
    let userChoice = prompt(`What's it going to be huh, Wiseguy? Rock, paper, or scissors?`)
    return userChoice.toLowerCase(); //in case user has used capitalization, we return it lowercase to match getComputerChoice variables. 
    console.log(getUserChoice());
}

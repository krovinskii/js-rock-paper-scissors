
function getComputerChoice() {
    let randomizeRockPaperScissors = Math.floor(Math.random()*3)
    if (randomizeRockPaperScissors == 0) {
        return "rock"
    }
    if (randomizeRockPaperScissors == 1) {
        return "paper"
    }
    if (randomizeRockPaperScissors == 2) {
        return "scissors"
    }
    
}
console.log(getComputerChoice())


function getComputerChoice() {
    const options = {
        0: "paper",
        1: "rock",
        2: "scissors",
    };

    return options[Math.floor(Math.random() * 3)];
}
let computerSelection = getComputerChoice();

function getPlayerChoice() {
    const options = {
        0: "paper",
        1: "rock",
        2: "scissors",
    };

    return options[Math.floor(Math.random() * 3)];
}

let playerSelection = getPlayerChoice();

function playRound(computerSelection, playerSelection) {
    switch (true) {
        case computerSelection === "paper" && playerSelection === "paper":
            return "A tie, paper!! ";
            break;
        case computerSelection === "rock" && playerSelection === "rock":
            return "A tie, rock!!";
            break;
        case computerSelection === "scissors" && playerSelection === "scissors":
            return "A tie, scissors!!";
            break;
        case computerSelection === "rock" && playerSelection === "scissors":
            return "You lose, Rock beats Scissors!!";
            break;
        case computerSelection === "paper" && playerSelection === "rock":
            return "You lose, Paper beats Rock!!";
            break;
        case computerSelection === "scissors" && playerSelection === "paper":
            return "You Lose, Scissors beats Paper!!";
            break;
        case computerSelection === "paper" && playerSelection === "scissors":
            return "You Win, Scissors beats Paper!!";
            break;
        case computerSelection === "rock" && playerSelection === "paper":
            return "You Win, Paper beats Rock!!";
            break;
        case computerSelection === "scissors" && playerSelection === "rock":
            return "You Win, Rock beats Scissors!!";
            break;
        default:
            return "Choose some weapon to fight";
    }
}
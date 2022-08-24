function getComputerChoice() {
    const options = {
        0: "paper",
        1: "rock",
        2: "scissors",
    };

    return options[Math.floor(Math.random() * 3)];
}

// let computerSelection = getComputerChoice();

function getPlayerChoice() {
    let playerAnswer = prompt(
        "Select your weapon: Rock, Paper, Scissors!!!",
        "rock"
    );
    let finalSelection = playerAnswer.toLowerCase();
    return finalSelection;
}

// let playerSelection = getPlayerChoice();

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

let computerCounter = 0;
let playerCounter = 0;

function Game() {
    let roundResult = playRound(getComputerChoice(), getPlayerChoice());

    function gameCounter(roundResult) {
        switch (true) {
            case roundResult === "A tie, paper!! ":
                console.log("If you read this, is a tie!!");
                break;
            case roundResult === "A tie, rock!!":
                console.log("If you read this, is a tie!!");
                break;
            case roundResult === "A tie, scissors!!":
                console.log("If you read this, is a tie!!");
                break;
            case roundResult === "You lose, Rock beats Scissors!!":
                computerCounter++;
                break;
            case roundResult === "You lose, Paper beats Rock!!":
                computerCounter++;
                break;
            case roundResult === "You Lose, Scissors beats Paper!!":
                computerCounter++;
                break;
            case roundResult === "You Win, Scissors beats Paper!!":
                playerCounter++;
                break;
            case roundResult === "You Win, Paper beats Rock!!":
                playerCounter++;
                break;
            case roundResult === "You Win, Rock beats Scissors!!":
                playerCounter++;
                break;
            default:
                console.log("Nothing to show");
        }
    }
    gameCounter(roundResult);
    console.log(playerCounter, computerCounter);
    if (computerCounter === 5) {
        console.log("Has perdido manco!!");
    } else if (playerCounter === 5) {
        console.log("Eres genial!!!");
    }
}
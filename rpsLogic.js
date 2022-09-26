let userChoice;

function game(event){
  userChoice = event.target.value;
  oneRound();
  return userChoice
}

function getComputerChoice() {
  const options = {
      0: "paper",
      1: "rock",
      2: "scissors",
  };

  return options[Math.floor(Math.random() * 3)];
}

function playRound( computerSelection, playerSelection) {
  let dynamicDiv = document.getElementById('feedback');
  switch (true) {
      case computerSelection === "paper" && playerSelection === "Paper":
          dynamicDiv.textContent = "A tie!!!";
          return "A tie!!!"
      case computerSelection === "rock" && playerSelection === "Rock":
          dynamicDiv.textContent = "A tie!!!";
          return "A tie!!!"
      case computerSelection === "scissors" && playerSelection === "Scissors":
          dynamicDiv.textContent = "A tie!!!";
          return "A tie!!!"
      case computerSelection === "rock" && playerSelection === "Scissors":
          dynamicDiv.textContent = "You lose!!!";
          return "You lose!!!"
      case computerSelection === "paper" && playerSelection === "Rock":
          dynamicDiv.textContent = "You lose!!!";
          return "You lose!!!"
      case computerSelection === "scissors" && playerSelection === "Paper":
          dynamicDiv.textContent = "You lose!!!";
          return "You lose!!!"
      case computerSelection === "paper" && playerSelection === "Scissors":
          dynamicDiv.textContent = "You Win!!!";
          return "You win!!!"
      case computerSelection === "rock" && playerSelection === "Paper":
          dynamicDiv.textContent = "You Win!!!";
          return "You win!!!"
      case computerSelection === "scissors" && playerSelection === "Rock":
          dynamicDiv.textContent = "You Win!!!";
          return "You win!!!"
      default:
          dynamicDiv.textContent = "Choose some weapon to fight";
  }
}
let computerCounter = 0;
let playerCounter = 0;

function oneRound() {
  let roundResult = playRound(getComputerChoice(),userChoice );
  let playerScore = document.getElementById('player-score');
  let cpuScore = document.getElementById('cpu-score');

  if (roundResult === "A tie!!!"){
    console.log("If you read this, is a tie")
  }
  else if (roundResult === "You lose!!!"){
    computerCounter+=1;
    cpuScore.textContent = computerCounter;
  }
  else if (roundResult === "You win!!!"){
    playerCounter+=1;
    playerScore.textContent = playerCounter;
  }
  endgame(playerCounter,computerCounter)
  // console.log(playerCounter, computerCounter);
}

function endgame(playerCounter, computerCounter){
  let dynamicDivEnd = document.getElementById('feedback');
  let scsBtn = document.getElementById('scsBtn');
  let pprBtn = document.getElementById('pprBtn');
  let rckBtn = document.getElementById('rckBtn');
  if(playerCounter === 5 || computerCounter === 5){
    dynamicDivEnd.textContent = "Game Over Retry?";
    scsBtn.disabled = true;
    rckBtn.disabled = true;
    pprBtn.disabled = true;
  }
}

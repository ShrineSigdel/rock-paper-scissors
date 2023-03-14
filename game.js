//PROJECT: ROCK, PAPER & SCISSORS 

const buttons = document.querySelectorAll('button');
let audio_winner = new Audio('./audio/winner.mp3');
let computerSelection, playerSelection, playerScore = 0, computerScore = 0;
let myScore = document.querySelector('.my_score');
let compScore = document.querySelector('.computer_score');
let result = document.querySelector('.result');

buttons.forEach(button => button.addEventListener('click', (item) => {
    playerSelection = item.currentTarget.className;
    computerSelection = getComputerChoice();
    console.log(`${playerSelection} ${computerSelection}`);
    let score = gamePlay(playerSelection, computerSelection);
    getScore(score);

}));
//gamePlay
function gamePlay(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tied";
    }
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection == "paper") {
                    return "lost";
                } else {
                    return "won";
                }
            case "paper":
                if (computerSelection == "scissors") {
                    return "lost";
                } else {
                    return "won";
                }
            case "scissors":
                if (computerSelection == "rock") {
                    return "lost";
                } else {
                    return "won";
                }
        }
    }
}
// //throw a random choice by computer.
function getComputerChoice() {
    let check = parseInt(Math.random() * 3 + 1);
    if (check == 1) {
        return "rock";
    }
    else if (check == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function getScore(score) {
    if (score == "won") {
        result.textContent = `Won!!! as ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }
    else if (score == "lost") {
        result.textContent = `Lost!!! as computer chose ${computerSelection}`;
        computerScore++;
    }
    else {
        result.textContent = `Tied as both chose ${playerSelection}`;
    }
    compScore.textContent = computerScore;
    myScore.textContent = playerScore;
    //deciding the final winner.
    if (computerScore == 5 || playerScore == 5) {
        if (computerScore == 5) {
            result.textContent = "-----Winner is Computer-----";
        }
        else {
            result.textContent = "-----You are the winner-----"
        }
        audio_winner.play();
        playerScore = 0;
        computerScore = 0;
    }
}





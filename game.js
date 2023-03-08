// Project: TOP - ROCK PAPER AND SCISSORS

//main
let result, playerSelection, computerSelection;
let playerScore =0, computerScore=0;
for (let i = 1; i <= 5; i++) {

    getInput();
    result = gamePlay(playerSelection, computerSelection);
    switch (result) {
        case "tied":
            console.log("\nTied!!!");
            break;
        case "won":
            console.log("\nYou won as " + playerSelection + " beats " + computerSelection);
            break;
        case "lost":
            console.log("\nYou lost as " + playerSelection + " loses to " + computerSelection);
            break;
    }
}
getScore();


//Entire game functions are here.
//displaying the score
function getScore() {

    if(playerScore > computerScore) {
        console.log("\n\nBooyaka Wowza! You defeated the computer.");
    }
    else if (playerScore == computerScore){
        console.log("\n\nWow, That was a tough fought battle but none's worthy.");
    }
    else {
        console.log("\n\nOh baby baby baby! You lost.");
    }
}


//taking the input
function getInput() {
    
    computerSelection = getComputerChoice();
    playerSelection = prompt("Choose rock, paper or scissors");
    playerSelection = playerSelection.toLowerCase();
}

//throw a random choice.
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

//round of rock_paper_scissors
function gamePlay(playerSelection, computerSelection) {
    //player == computer tied
    if (playerSelection == computerSelection) {
        playerScore++;
        computerScore++;
        return "tied";
    }
    //else
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection == "paper") {
                    computerScore++;
                    return "lost";
                } else {
                    playerScore++;
                    return "won";
                }

            case "paper":
                if (computerSelection == "scissors") {
                    computerScore++;
                    return "lost";
                } else {
                    playerScore++;
                    return "won";
                }

            case "scissors":
                if (computerSelection == "rock") {
                    computerScore++;
                    return "lost";
                } else {
                    playerScore++;
                    return "won";
                }
        }
    }
}



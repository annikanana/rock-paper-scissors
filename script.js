// Give the computer a random choice of either rock, paper, or scissors
// Assign this option to the variable computerSelection
function getComputerChoice() {
    let options = ["rock","paper","scissors"]
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

// Let the player enter their choice of either rock, paper, or scissors

function getPlayerChoice() {
    return prompt("Choose either rock, paper or scissors:","Rock").toLowerCase();
}

function playRound(playerSelection,computerSelection) {

    console.log("Player selection: " + playerSelection);
    console.log("Computer selection: " + computerSelection);

    if (playerSelection === computerSelection) {    // If the computer and the player has selected the same option, return "Tie"
        return "Tie";
    } else if (playerSelection === "rock") {   
        if (computerSelection === "scissors") {   // If the player has selected rock and the computer has selected scissors, return "Player wins"
            return "You win! Rock beats Scissors.";
        } else {    // If the player has selected rock and the computer has selected paper, return "Computer wins"
            return "You lose! Paper beats Rock.";
        }
    } else if (playerSelection === "paper") {  
        if (computerSelection === "rock") { // If the player has selected paper and the computer has selected rock, return "Player wins"
            return "You win! Paper beats Rock.";
        } else {    // If the player has selected paper and the computer has selected scissors, return "Computer wins"
            return "You lose! Scissors beats Paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") { // If the player has selected scissors and the computer has selected paper, return "Player wins"
            return "You win! Scissors beats Paper.";
        } else {    // If the player has selected scissors and the computer has selected rock, return "Computer wins"
            return "You lose! Rock beats Scissors.";
        }
    } else {    // Else if the player has entered an invalid choice display an error message "Choose either rock, paper or scissors!"
        return "Please enter a valid option: rock, paper or scissors."
    }
}

//console.log(playRound(getPlayerChoice(),getComputerChoice()));

// Play a game of 5 rounds

function game() {

    // For each round, call the playRound function to determine a winner
    for (let i = 0; i < 5; i++) {
        console.log("Round " + i + ": " + playRound(getPlayerChoice(),getComputerChoice()));

    }

}

game();

// If the player wins, add one to the playerTally
// If the computer wins, add one to the computerTally
// If it's a tie, then exit the loop
// After 5 rounds, determine which tally is higher and report back the results
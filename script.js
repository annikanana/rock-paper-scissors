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

    // console.log("Player selection: " + playerSelection);
    // console.log("Computer selection: " + computerSelection);

    if (playerSelection === computerSelection) {    // If the computer and the player has selected the same option, return "Tie"
        return;
    } else if (playerSelection === "rock") {   
        if (computerSelection === "scissors") {   // If the player has selected rock and the computer has selected scissors, return "Player wins"
            return "player";
        } else {    // If the player has selected rock and the computer has selected paper, return "Computer wins"
            return "computer";
        }
    } else if (playerSelection === "paper") {  
        if (computerSelection === "rock") { // If the player has selected paper and the computer has selected rock, return "Player wins"
            return "player";
        } else {    // If the player has selected paper and the computer has selected scissors, return "Computer wins"
            return "computer";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") { // If the player has selected scissors and the computer has selected paper, return "Player wins"
            return "player";
        } else {    // If the player has selected scissors and the computer has selected rock, return "Computer wins"
            return "computer";
        }
    } else {    // Else if the player has entered an invalid choice display an error message "Choose either rock, paper or scissors!"
        return "Please enter a valid option: rock, paper or scissors."
    }
}

// console.log(playRound(getPlayerChoice(),getComputerChoice()));

// Play a game of 5 rounds

function game() {

let playerTally = 0;
let computerTally = 0;

    // For each round, call the playRound function to determine a winner
    for (let i = 0; i < 5; i++) {
        // console.log("Round " + (i + 1) + ": " + playRound(getPlayerChoice(),getComputerChoice()));
        let winner = playRound(getPlayerChoice(),getComputerChoice());

        if (winner === "player") {
            playerTally++;
            console.log("You win this round!")
            console.log("Round " + (i + 1) + ": Player: " + playerTally + " Computer: " + computerTally);

        } else if (winner === "computer")
        {
            computerTally++;
            console.log("You lose this round!");
            console.log("Round " + (i + 1) + ": Player: " + playerTally + " Computer: " + computerTally);
        } else {
            console.log("It's a tie!");
            console.log("Round " + (i + 1) + ": Player: " + playerTally + " Computer: " + computerTally);
        }
    }

    console.log("Player tally: " + playerTally + " Computer tally: " + computerTally);

}

game();

// If the player wins, add one to the playerTally
// If the computer wins, add one to the computerTally
// If it's a tie, then exit the loop
// After 5 rounds, determine which tally is higher and report back the results
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.getElementById('results');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

// Give the computer a random choice of either rock, paper, or scissors
function getComputerChoice() {
    let options = ["rock","paper","scissors"];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

// Likely won't need this anymore
// Let the player enter their choice of either rock, paper, or scissors
// 
// function getPlayerChoice() {
//     let playerSelection = prompt("Choose either rock, paper or scissors:","Rock");
    
//     if (playerSelection === null) {
//         return "invalid";
//     } else {
//         playerSelection = playerSelection.toLowerCase();

//         if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
//             return playerSelection;
//         } else {
//             return "invalid";
//         }
//     }
// }

function outputResults(playerSelection,computerSelection,result) {
    
    // Output player and computer selection
    document.querySelector('#player .choice').innerText = playerSelection;
    document.querySelector('#computer .choice').innerText = computerSelection;

    // Output winner
    document.querySelector('#round-winner').innerText = result;

}

function playRound(e) {

    let playerSelection = this.value;
    let computerSelection = getComputerChoice();
    let result = "";

    console.log("Player selection: " + playerSelection);
    console.log("Computer selection: " + computerSelection);

    if (playerSelection === computerSelection) {    // If the computer and the player has selected the same option, return "Tie"
        console.log("tie");
        result = "tie";
    } else if (playerSelection === "rock") {   
        if (computerSelection === "scissors") {   // If the player has selected rock and the computer has selected scissors, return "Player wins"
            console.log("player wins");
            result = "player";
        } else {    // If the player has selected rock and the computer has selected paper, return "Computer wins"
            console.log("computer wins");
            result = "computer";
        }
    } else if (playerSelection === "paper") {  
        if (computerSelection === "rock") { // If the player has selected paper and the computer has selected rock, return "Player wins"
            console.log("player wins");
            result = "player";
        } else {    // If the player has selected paper and the computer has selected scissors, return "Computer wins"
            console.log("computer wins");
            result = "computer";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") { // If the player has selected scissors and the computer has selected paper, return "Player wins"
            console.log("player wins");
            result = "player";
        } else {    // If the player has selected scissors and the computer has selected rock, return "Computer wins"
            console.log("computer wins");
            result = "computer";
        }
    }

    // Output player and computer selection to DOM
    outputResults(playerSelection,computerSelection,result);
}


function determineWinner(playerTally, computerTally) {
    if (playerTally > computerTally) {
        console.log("Congrats, you beat the computer!");
    } else if (playerTally < computerTally) {
        console.log("Sorry, but the computer beat you!");
    } else {
        console.log("Nobody wins - it's a tie!");
    }
}

function printRoundResult(roundNumber,playerTally,computerTally) {
    console.log("Round " + roundNumber + ": Player: " + playerTally + " Computer: " + computerTally);
}

// Play a game of 5 rounds
function game() {

let playerTally = 0;
let computerTally = 0;

    // For each round, call the playRound function to determine a winner
    for (let i = 0; i < 5; i++) {
        // console.log("Round " + (i + 1) + ": " + playRound(getPlayerChoice(),getComputerChoice()));
        let winner = playRound(getPlayerChoice(),getComputerChoice());

        if (winner === "invalid") {
            computerTally++;
            console.log("Player entered invalid choice. Computer wins by default!");
            printRoundResult((i + 1),playerTally,computerTally);
        }
        else if (winner === "player") {
            playerTally++; // If the player wins, add one to the playerTally
            console.log("You win this round!");
            printRoundResult((i + 1),playerTally,computerTally);
        } else if (winner === "computer") {
            computerTally++; // If the computer wins, add one to the computerTally
            console.log("You lose this round!");
            printRoundResult((i + 1),playerTally,computerTally);
        } else if (winner === "tie") { // If it's a tie, then exit the loop
            console.log("It's a tie!");
            printRoundResult((i + 1),playerTally,computerTally);
        }
    }

    determineWinner(playerTally,computerTally); // After 5 rounds, determine which tally is higher and report back the results

}

// game();


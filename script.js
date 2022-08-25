const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.getElementById('results');
const reset = document.getElementById('reset');
const winnerDiv = document.getElementById('winner');
const options = document.getElementById('options'); 
let playerTally = 0;
let computerTally = 0;

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
reset.addEventListener('click', resetGame);

function resetGame() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    playerTally = 0;
    computerTally = 0;
    document.querySelector('#player .score').innerText = playerTally;
    document.querySelector('#computer .score').innerText = computerTally;
    winnerDiv.style.display = "none";
    options.style.display = "block";
}

// Give the computer a random choice of either rock, paper, or scissors
function getComputerChoice() {
    let options = ["rock","paper","scissors"];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

function outputResults(playerSelection,computerSelection,result) {

    // Output player and computer selection
    document.querySelector('#player .choice').innerText = playerSelection;
    document.querySelector('#computer .choice').innerText = computerSelection;

    // Output winner
    document.querySelector('#round-winner').innerText = result;

    // Output tally
    document.querySelector('#player .score').innerText = playerTally;
    document.querySelector('#computer .score').innerText = computerTally;

}

function callWinner(playerTally, computerTally) {

    let winnerResult = document.querySelector('#winner p');

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    winnerDiv.style.display = "block";
    options.style.display = "none";

    if(playerTally === 5) {
        winnerResult.innerText = "You've managed to fend off kitty! Enjoy the snooze.";
    } else if (computerTally === 5) {
        winnerResult.innerText = "Kitty is hungry and persistent! Time to get out of bed.";
    }
}

function playRound(e) {

    let playerSelection = this.value;
    let computerSelection = getComputerChoice();
    let result = "";

    if (playerSelection === "rock") {   
        if (computerSelection === "scissors") {   // If the player has selected rock and the computer has selected scissors, return "Player wins"
            result = "Kitty leaves you alone to play with the ball. You win this round!";
            playerTally++;
        } else if (computerSelection === "paper") {    // If the player has selected rock and the computer has selected paper, return "Computer wins"
            result = "You throw the ball but end up accidentally redecorating your dresser. Kitty wins this round!";
            computerTally++;
        } else {
            result = "You throw the ball but Kitty jumps to the other side of the bed. It's a tie.";
        }
    } else if (playerSelection === "paper") {  
        if (computerSelection === "rock") { // If the player has selected paper and the computer has selected rock, return "Player wins"
            result = "Kitty jumps but bounces off the blanket. You win this round!";
            playerTally++;
        } else if (computerSelection === "scissors") {    // If the player has selected paper and the computer has selected scissors, return "Computer wins"
            result = "You pull up the blanket, but kitty's got her claws out. Ouch. Kitty wins this round!";
            computerTally++;
        } else {
            result = "You hide your face under your blanket, but Kitty is patient. It's a tie.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") { // If the player has selected scissors and the computer has selected paper, return "Player wins"
            result = "Kitty thinks your pot plant looks better on the floor. The noise is blissfully blocked by your pillow. You win this round!";
            playerTally++;
        } else if (computerSelection === "rock") {    // If the player has selected scissors and the computer has selected rock, return "Computer wins"
            result = "You cover your face with a pillow, but that can't stop kitty's jump on your belly. Kitty wins this round!";
            computerTally++;
        } else {
            result = "Kitty attacks with her claws but lands on your pillow. It's a tie.";
        }
    }

    // Output player and computer selection to DOM
    outputResults(playerSelection,computerSelection,result);

    // Check if either player or computer has won the game
    if(playerTally === 5 || computerTally === 5) {
        callWinner(playerTally, computerTally);
    }
}


// function printRoundResult(roundNumber,playerTally,computerTally) {
//     console.log("Round " + roundNumber + ": Player: " + playerTally + " Computer: " + computerTally);
// }

// // Play a game of 5 rounds
// function game() {

// let playerTally = 0;
// let computerTally = 0;

//     // For each round, call the playRound function to determine a winner
//     for (let i = 0; i < 5; i++) {
//         // console.log("Round " + (i + 1) + ": " + playRound(getPlayerChoice(),getComputerChoice()));
//         let winner = playRound(getPlayerChoice(),getComputerChoice());

//         if (winner === "invalid") {
//             computerTally++;
//             console.log("Player entered invalid choice. Computer wins by default!");
//             printRoundResult((i + 1),playerTally,computerTally);
//         }
//         else if (winner === "player") {
//             playerTally++; // If the player wins, add one to the playerTally
//             console.log("You win this round!");
//             printRoundResult((i + 1),playerTally,computerTally);
//         } else if (winner === "computer") {
//             computerTally++; // If the computer wins, add one to the computerTally
//             console.log("You lose this round!");
//             printRoundResult((i + 1),playerTally,computerTally);
//         } else if (winner === "tie") { // If it's a tie, then exit the loop
//             console.log("It's a tie!");
//             printRoundResult((i + 1),playerTally,computerTally);
//         }
//     }

//     determineWinner(playerTally,computerTally); // After 5 rounds, determine which tally is higher and report back the results

// }

// game();


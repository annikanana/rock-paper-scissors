const ball = document.getElementById('ball');
const blanket = document.getElementById('blanket');
const pillow = document.getElementById('pillow');
const results = document.getElementById('results');
const reset = document.getElementById('reset');
const winnerDiv = document.getElementById('winner');
const options = document.getElementById('options');
const playerScoreDiv = document.querySelector('#player .score');
const computerScoreDiv = document.querySelector('#computer .score');
const playerChoiceDiv = document.querySelector('#player .choice');
const computerChoiceDiv = document.querySelector('#computer .choice');
const roundWinner = document.querySelector('#round-winner');
let playerTally = 0;
let computerTally = 0;

ball.addEventListener('click', playRound);
blanket.addEventListener('click', playRound);
pillow.addEventListener('click', playRound);
reset.addEventListener('click', resetGame);

function resetGame() {
    // Hide winner div and display choice buttons div
    winnerDiv.style.display = "none";
    options.style.display = "block";

    // Reset tallies
    playerTally = 0;
    computerTally = 0;
    playerScoreDiv.innerText = playerTally;
    computerScoreDiv.innerText = computerTally;

    // Clear our round winner text
    roundWinner.innerText = "";

    // Clear out player and computer choice text
    playerChoiceDiv.innerText = "";
    computerChoiceDiv.innerText = "";
}

// Give the computer a random choice of either rock, paper, or scissors
function getComputerChoice() {
    let options = ["jump","redecorate","claws"];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

function outputResults(playerSelection,computerSelection,result) {
    // Output player and computer selection
    playerChoiceDiv.innerText = playerSelection;
    computerChoiceDiv.innerText = computerSelection;

    // Output winner
    roundWinner.innerText = result;

    // Output tally
    playerScoreDiv.innerText = playerTally;
    computerScoreDiv.innerText = computerTally;
}

function callWinner(playerTally, computerTally) {
    let winnerResult = document.querySelector('#winner p');

    // Hide options and display winner div
    winnerDiv.style.display = "block";
    options.style.display = "none";

    // Determine winner and output to DOM
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

    if (playerSelection === "ball") {   
        if (computerSelection === "claws") {   // If the player has selected rock and the computer has selected scissors, return "Player wins"
            result = "Kitty leaves you alone to play with the ball. You win this round!";
            playerTally++;
        } else if (computerSelection === "redecorate") {    // If the player has selected rock and the computer has selected paper, return "Computer wins"
            result = "You throw the ball but end up accidentally redecorating your dresser. Kitty wins this round!";
            computerTally++;
        } else {
            result = "You throw the ball but Kitty jumps to the other side of the bed. It's a tie.";
        }
    } else if (playerSelection === "blanket") {  
        if (computerSelection === "jump") { // If the player has selected paper and the computer has selected rock, return "Player wins"
            result = "Kitty jumps but bounces off the blanket. You win this round!";
            playerTally++;
        } else if (computerSelection === "claws") {    // If the player has selected paper and the computer has selected scissors, return "Computer wins"
            result = "You pull up the blanket, but kitty's got her claws out. Ouch. Kitty wins this round!";
            computerTally++;
        } else {
            result = "You hide your face under your blanket. In retaliation Kitty thinks your pillow looks better on the floor. It's a tie.";
        }
    } else if (playerSelection === "pillow") {
        if (computerSelection === "redecorate") { // If the player has selected scissors and the computer has selected paper, return "Player wins"
            result = "Kitty thinks your pot plant looks better on the floor. The noise is blissfully blocked by your pillow. You win this round!";
            playerTally++;
        } else if (computerSelection === "jump") {    // If the player has selected scissors and the computer has selected rock, return "Computer wins"
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


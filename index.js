// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a draw!";
    } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
               (playerChoice === "scissors" && computerChoice === "paper") ||
               (playerChoice === "paper" && computerChoice === "rock")) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Initialize variables to track score and player choice
let playerScore = 0;
let playerChoice;

// Loop to keep the game going
do {
    // Prompt player to make their choice
    playerChoice = prompt("Enter 'rock', 'paper', or 'scissors':");

    // Validate player's choice
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = prompt("Invalid choice. Enter 'rock', 'paper', or 'scissors':");
    }

    // Get computer's choice
    const computerChoice = getComputerChoice();

    console.log("You chose: " + playerChoice);
    console.log("Computer chose: " + computerChoice);

    // Determine winner
    const result = determineWinner(playerChoice, computerChoice);
    console.log(result);

    // Update player's score if they win
    if (result === "You win!") {
        playerScore++;
    }

    // Check if player wants to stop playing
    const continuePlaying = prompt("Do you want to play again? (yes/no)");
    if (continuePlaying.toLowerCase() !== "yes") {
        break;
    }
} while (true);

// Display final score
console.log("Final score: You won " + playerScore + " times!");
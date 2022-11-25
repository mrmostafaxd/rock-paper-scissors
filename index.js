const CHOICES = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let choice = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[choice];
}

function playRound(playerChoice, computerChoice) {
    let winner = 0; // 0: player, 1: Computer, 2: draw

    if (playerChoice === computerChoice) { // Draw
        winner = 2;
    } else if (playerChoice === CHOICES[0]) { // Rock
        if(computerChoice === CHOICES[1]) {
            winner = 1;
        } else {
            winner = 0;
        }
    } else if (playerChoice === CHOICES[1]) { // Paper
        if (computerChoice === CHOICES[0]) {
            winner = 0;
        } else {
            winner = 1;
        }
    } else if (playerChoice === CHOICES[2]) { // Scissors
        if (computerChoice === CHOICES[0]) {
            winner = 1;
        } else {
            winner = 0;
        }
    }

    let message = null;
    if (winner === 0) {
        message = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else if (winner === 1) {
        message = `You Lose! ${computerChoice} beats ${playerChoice}`
    } else {
        message = `Draw`
    }

    return message;
}

const playerChoice = CHOICES[1] //rock
const computerChoice = getComputerChoice(); //

console.group();
console.log(`Player choice: ${playerChoice}`);
console.log(`Computer choice: ${computerChoice}`);
console.log(playRound(playerChoice, computerChoice));
console.groupEnd();


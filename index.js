const CHOICES = ["rock", "paper", "scissors"]

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
        message = `You Lose! ${computerChoice} beats ${playerChoice}`;
    } else {
        message = `Draw`;
    }

    return message;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {

        // get player choice and ensure that it is a number
        let playerInput = prompt('Choose:\n0: Rock, 1: Paper, 2: Scissors');
        while(playerInput === null || playerInput === '' ||
         isNaN(playerInput) || playerInput > 2) {
            alert('Wrong choice');
            playerInput = prompt('Choose:\n0: Rock, 1: Paper, 2: Scissors');
        }
        const playerChoice = CHOICES[playerInput];

        // get computer choice
        const computerChoice = getComputerChoice();

        // get round result
        let roundResult = playRound(playerChoice, computerChoice);
        
        // display result
        console.log(roundResult);

        // update scores
        if  (roundResult.search(/you win/i) >= 0) {
            playerWins++;
        } else if (roundResult.search(/you lose/i) >= 0) {
            computerWins++;
        }

    }

    // display the game result
    if (computerWins > playerWins) {
        console.log('You lost the game!');
    } else if (computerWins < playerWins) {
        console.log('You Won the game!');
    } else {
        console.log('Draw!');
    }
}

console.group();
game();
console.groupEnd();


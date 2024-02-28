/* elements */
const controlsContainer = document.querySelector('#controls-container');

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

/* global variables */
const winScore = 5;
const reactions = {
  rock: '✊',
  scissors: '✌️',
  paper: '✋',
  loser: '😢',
  winner: '🥳',
  neutral: '❔',
};

let gameFinished = true;
let playerScore = 0;
let computerScore = 0;

/* event listeners */
controlsContainer.addEventListener('click', (evt) => {
  const playerSelection = evt.target.dataset.choice;

  if (playerSelection !== undefined) {
    playRound(playerSelection);
  }
});

/* functions */
function playRound(playerSelection) {
  // reset the previous game result at the start of the current game
  if (playerScore === winScore || computerScore === winScore) {
    playerScore = 0;
    computerScore = 0;

    displayScores();
    displaySelections('neutral', 'neutral');
    displayResult('reset');
  }

  const computerSelection = getComputerSelection();

  const resultValue = determineRoundResult(playerSelection, computerSelection);

  updateScores(resultValue);
  displayScores();

  if (playerScore === winScore) {
    displaySelections('winner', 'loser');
    displayResult('win');
  } else if (computerScore === winScore) {
    displaySelections('loser', 'winner');
    displayResult('lose');
  } else {
    displaySelections(playerSelection, computerSelection);
  }
}

function determineRoundResult(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'rock':
      switch (computerSelection) {
        case 'paper':
          return -1;

        case 'scissors':
          return 1;

        default:
          return 0;
      }

    case 'paper':
      switch (computerSelection) {
        case 'scissors':
          return -1;

        case 'rock':
          return 1;

        default:
          return 0;
      }

    case 'scissors':
      switch (computerSelection) {
        case 'rock':
          return -1;

        case 'paper':
          return 1;

        default:
          return 0;
      }

    default:
      return null;
  }
}

function getComputerSelection() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'unknown';
  }
}

function updateScores(value) {
  if (value > 0) {
    playerScore += value;
  } else if (value < 0) {
    // when the player loses a point, the computer wins a point
    computerScore += -1 * value;
  }
}

function displayScores() {
  const disPlayerScore = document.querySelector('#player-score');
  disPlayerScore.textContent = `You: ${playerScore}`;

  const disComputerScore = document.querySelector('#computer-score');
  disComputerScore.textContent = `Computer: ${computerScore}`;
}

function displaySelections(playerSelection, computerSelection) {
  const disPlayerSelection = document.querySelector('#player-move');
  disPlayerSelection.textContent = reactions[playerSelection];

  const disComputerSelection = document.querySelector('#computer-move');
  disComputerSelection.textContent = reactions[computerSelection];
}

function displayResult(resultType) {
  const disResultMessage = document.querySelector('#result');

  disResultMessage.classList.remove('win');
  disResultMessage.classList.remove('lose');

  switch (resultType) {
    case 'win':
      disResultMessage.textContent = 'YOU WIN !!';
      disResultMessage.classList.add('win');
      break;

    case 'lose':
      disResultMessage.textContent = 'YOU LOSE !!';
      disResultMessage.classList.add('lose');
      break;
    case 'reset':
    default:
      disResultMessage.textContent = '\xa0';
  }
}

function getComputerChoice() {
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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  switch (playerSelection) {
    case 'rock':
      switch (computerSelection) {
        case 'paper':
          return { value: -1, message: 'You Lose! Paper defeats Rock' };

        case 'scissors':
          return { value: 1, message: 'You Win! Rock beats Scissors' };

        default:
          return { value: 0, message: 'Draw!' };
      }

    case 'paper':
      switch (computerSelection) {
        case 'scissors':
          return { value: -1, message: 'You Lose! Scissors defeat Paper' };

        case 'rock':
          return { value: 1, message: 'You Win! Paper beats Rock' };

        default:
          return { value: 0, message: 'Draw!' };
      }

    case 'scissors':
      switch (computerSelection) {
        case 'rock':
          return { value: -1, message: 'You Lose! Rock defeats Scissors' };

        case 'paper':
          return { value: 1, message: 'You Win! Scissors beat Paper' };

        default:
          return { value: 0, message: 'Draw!' };
      }

    default:
      return null;
  }
}

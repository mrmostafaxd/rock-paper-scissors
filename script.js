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
          return 'You Lose! Paper defeats Rock';

        case 'scissors':
          return 'You Win! Rock beats Scissors';

        default:
          return 'Draw!';
      }

    case 'paper':
      switch (computerSelection) {
        case 'scissors':
          return 'You Lose! Scissors defeat Paper';

        case 'rock':
          return 'You Win! Paper beats Rock';

        default:
          return 'Draw!';
      }

    case 'scissors':
      switch (computerSelection) {
        case 'rock':
          return 'You Lose! Rock defeats Scissors';

        case 'paper':
          return 'You Win! Scissors beat Paper';

        default:
          return 'Draw!';
      }

    default:
      if (playerSelection === computerSelection) {
        return 'Draw!';
      }
  }
}

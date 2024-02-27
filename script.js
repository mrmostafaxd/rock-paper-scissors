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

function game() {
  let finalScore = 0;
  for (let currentRound = 0; currentRound < 5; currentRound++) {
    const playerSelection = prompt('Enter your move!', '').trim();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    finalScore += roundResult.value;
    console.log(`ROUND ${currentRound + 1}`);
    console.log(roundResult.message);
    console.log('');
  }

  if (finalScore === 0) {
    console.log('Final Result is: Draw');
  } else if (finalScore > 0) {
    console.log('Final Result is Winning');
  } else {
    console.log('Final Result is Losing');
  }
}

// game();

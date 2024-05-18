const readline = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

let playerScore = 0;
let computerScore = 0;
let round = 1;

function playerWins(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);

  return WINNING_COMBOS[playerChoice].includes(computerChoice);
}

function choiceShortened(playerChoice) {
  switch (playerChoice) {
    case 'r':
      playerChoice = 'rock';
      break;
    case 'p':
      playerChoice = 'paper';
      break;
    case 's':
      playerChoice = 'scissors';
      break;
    case 'l':
      playerChoice = 'lizard';
      break;
    case 'sp':
      playerChoice = 'spock';
      break;
  }
  return playerChoice;
}

function prompt(message) {
  console.log(`==> ${message}`);
}

function displayWinner(playerChoice, computerChoice) {
  if (playerWins(playerChoice, computerChoice)) {
    playerScore += 1;
    prompt(`You win! Your score: ${playerScore}, Computer score: ${computerScore}`);
  } else if (playerChoice === computerChoice) {
    prompt(`Its a tie! Your score: ${playerScore}, Computer score: ${computerScore}`);
  } else {
    computerScore += 1;
    prompt(`Computer wins! Your score: ${playerScore}, Computer score: ${computerScore}`);
  }
}

while (true) {

  prompt(`Round: ${round}`);
  prompt(`Choose one: ${VALID_CHOICES.join(', ')} `);
  let playerChoice = readline.question();
  playerChoice = choiceShortened(playerChoice);

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt("That's not a valid choice");
    playerChoice = readline.question();
    playerChoice = choiceShortened(playerChoice);
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`User chose: ${playerChoice}, Computer chose: ${computerChoice}`);
  displayWinner(playerChoice, computerChoice);

  prompt(`User score: ${playerScore} | Computer score: ${computerScore}`);

  if (playerScore >= 5) {
    prompt(`Player is the champion with a score of ${playerScore} vs ${computerScore}`);
    break;
  } else if (computerScore >= 5) {
    prompt(`Computer is the champion with a score of ${computerScore} vs ${playerScore}`);
    break;
  }

  prompt(`Play again (y/n)?`);
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(`Enter 'y' or 'n'`);
    answer = readline.question().toLowerCase();
  }

  if (answer[0].toLowerCase() === 'n') {
    prompt(`Thanks for playing!`);
    break;
  }

  round += 1;
}
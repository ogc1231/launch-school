const readline = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_OPTIONS = ['y', 'n'];

function prompt(message) {
  console.log(`=> ${message}`);
}

let playerScore = 0;
let computerScore = 0;

function choiceShortened(choice) {
  switch (choice) {
    case 'r':
      choice = 'rock';
      break;
    case 'p':
      choice = 'paper';
      break;
    case 's':
      choice = 'scissors';
      break;
    case 'l':
      choice = 'lizard';
      break;
    case 'sp':
      choice = 'spock';
      break;
  }
  return choice;
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'lizard' && computerChoice === 'paper') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'spock' && computerChoice === 'rock')) {
    playerScore += 1;
    prompt(`You win! Your score: ${playerScore}, Computer score: ${computerScore}`);
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
          (choice === 'paper' && computerChoice === 'scissors') ||
          (choice === 'scissors' && computerChoice === 'rock') || 
          (choice === 'lizard' && computerChoice === 'rock') ||
          (choice === 'lizard' && computerChoice === 'scissors') ||
          (choice === 'spock' && computerChoice === 'paper') ||
          (choice === 'spock' && computerChoice === 'lizard') || 
          (choice === 'paper' && computerChoice === 'lizard') ||
          (choice === 'scissors' && computerChoice === 'spock') ||
          (choice === 'rock' && computerChoice === 'spock')) {
    computerScore += 1;
    prompt(`Computer wins! Your score: ${playerScore}, Computer score: ${computerScore}`);
  } else {
    prompt(`Its a tie! Your score: ${playerScore}, Computer score: ${computerScore}`);
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();
  choice =  choiceShortened(choice)

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
    choice =  choiceShortened(choice);
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
  
  if (playerScore >= 5) {
    prompt(`Player is the Grand Champion!`)
  }
  else if (computerScore >= 5) {
    prompt(`Computer is the Grand Champion!`)
  }
  
  if (computerScore >= 5 || playerScore >= 5) {
    break;
  }
  
  prompt(`Play next hand (${VALID_OPTIONS.join('/')})?`);
  let answer = readline.question().toLowerCase();
  while (!VALID_OPTIONS.includes(answer)) {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    prompt(`Do you want to play again (${VALID_OPTIONS.join('/')})?`);
  let answer = readline.question().toLowerCase();
  while (!VALID_OPTIONS.includes(answer)) {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    break;
  }
  else {
    playerScore = 0;
    computerScore = 0;
  }
  }
}


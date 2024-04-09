const readline = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_OPTIONS = ['y', 'n'];

function prompt(message) {
  console.log(`=> ${message}`);
}


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
    prompt("You win!");
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
    prompt("Computer wins!");
  } else {
    prompt("Its a tie!");
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

  prompt(`Do you wan to play again (${VALID_OPTIONS.join('/')})?`);
  let answer = readline.question().toLowerCase();
  while (!VALID_OPTIONS.includes(answer)) {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

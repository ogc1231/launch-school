const readline = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors']

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt("You win!");
  }
  else if ((choice === 'rock' && computerChoice === 'paper') ||
          (choice === 'paper' && computerChoice === 'scissors') ||
          (choice === 'scissors' && computerChoice === 'rock')) {
    prompt("Computer wins!");
  }
  else {
    prompt("Its a tie!")
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  
  displayWinner(choice, computerChoice);
  
  prompt("Do you wan to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }
  
  if (answer[0] !== 'y') break;
}

// Q1
// yes it works but outcome displays before choices

// Q2
// assign variable to returned string and log later on

// Q3
// let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length); - always rounds down
// let randomIndex = Math.round(Math.random() * VALID_CHOICES.length); - numbers round up and down
// let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length); - always rounds up

// Q4
// 

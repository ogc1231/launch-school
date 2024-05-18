const readline = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

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
  prompt(`User chose: ${playerChoice}, Computer chose: ${computerChoice}`);
  
  if (playerChoice === computerChoice) {
    prompt(`It's a tie!`);
  } else if ((playerChoice === 'rock' && computerChoice === 'scissors') || 
    (playerChoice === 'rock' && computerChoice === 'lizard') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'scissors' && computerChoice === 'lizard') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'paper' && computerChoice === 'spock') || 
    (playerChoice === 'lizard' && computerChoice === 'paper') ||
    (playerChoice === 'lizard' && computerChoice === 'spock') || 
    (playerChoice === 'spock' && computerChoice === 'rock') ||
    (playerChoice === 'spock' && computerChoice === 'scissors')) {
      prompt(`Player wins!`);
  } else {
    prompt(`Players loses, Computer wins!`);
  }
}

while (true) {

  prompt(`Choose one: ${VALID_CHOICES.join(', ')} `)
  let playerChoice = readline.question();
  playerChoice = choiceShortened(playerChoice);
  
  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt("That's not a valid choice");
    playerChoice = readline.question();
    playerChoice = choiceShortened(playerChoice);
  }
  
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  
  displayWinner(playerChoice, computerChoice)
  
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
}
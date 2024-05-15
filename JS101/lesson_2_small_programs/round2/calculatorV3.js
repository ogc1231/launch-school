const readline = require("readline-sync");

function prompt(message) {
  console.log(`==> ${message}`)
}

function isInvalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Welcome to Calculator!");

while (true) {
  
  prompt("What's the first number?");
  let num1 = readline.question();
  
  while (isInvalidNumber(num1)) {
    prompt("That doesn't look like a valid number.");
    num1 = readline.question();
  }
  
  prompt("What's the second number?");
  let num2 = readline.question();
  
  while (isInvalidNumber(num2)) {
    prompt("That doesn't look like a valid number.");
    num2 = readline.question();
  }
  
  prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
  let choice = readline.question();
  
  while (!['1', '2', '3', '4'].includes(choice)) {
    prompt("Must choose 1, 2, 3 or 4");
    choice = readline.question();
  }
  
  let output;
  
  switch (choice) {
    case '1':
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = Number(num1) / Number(num2);
      break;
  }
  
  prompt(`The result is: ${output}`);
  
  prompt('Would you like to perform another operation? (y/n)');
  let answer = readline.question();
  
  if (answer[0].toLowerCase() !== 'y') {
    prompt("Thanks for using the calculator");
    break;
  }
  
}
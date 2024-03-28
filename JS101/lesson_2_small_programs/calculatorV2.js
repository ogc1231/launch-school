const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message};`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt("Welcome to Calculator!");

prompt("What's the first number?");
let num1 = readline.question();

while (invalidNumber(num1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  num1 = readline.question();
}

prompt("What's the second number?");
let num2 = readline.question();

while (invalidNumber(num2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  num2 = readline.question();
}

prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide 5) Power 6) Remainder");
let operation = readline.question();

while (!['1', '2', '3', '4', '5', '6'].includes(operation)) {
  prompt('Must choose 1, 2, 3, 4, 5 or 6');
  operation = readline.question();
}

let output;
switch (operation) {
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
  case '5':
    output = Number(num1) ** Number(num2);
    break;
  case '6':
    output = Number(num1) % Number(num2);
    break;
}

prompt(`The result is: ${output}`);

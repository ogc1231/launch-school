const MESSAGES = require('./messages.json');

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message};`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(MESSAGES['welcome']);

while (true) {
  
  prompt(MESSAGES['number 1']);
  let num1 = readline.question();
  
  while (invalidNumber(num1)) {
    prompt(MESSAGES['invalidNumber']);
    num1 = readline.question();
  }
  
  prompt(MESSAGES['number 2']);
  let num2 = readline.question();
  
  while (invalidNumber(num2)) {
    prompt(MESSAGES['invalidNumber']);
    num2 = readline.question();
  }
  
  prompt(MESSAGES['operation']);
  let operation = readline.question();
  
  while (!['1', '2', '3', '4', '5', '6'].includes(operation)) {
    prompt(MESSAGES['choose']);
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
  
  prompt(`${MESSAGES['result']} ${output}`);


  prompt(MESSAGES['another calculation']);
  let answer = readline.question();
  
  if (answer[0].toLowerCase() != 'y') {
    prompt(MESSAGES['thanks'])
    break;
  }
}
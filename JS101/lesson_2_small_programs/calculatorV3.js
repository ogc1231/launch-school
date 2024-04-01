const readline = require("readline-sync");
const MESSAGES = require('./messages.json');
const LANGUAGE = 'en'; // Change 'en' to 'es' for caluculator in Spanish

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

function prompt(message) {
  console.log(`${message};`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(messages('welcome', LANGUAGE));

while (true) {
  
  prompt(messages('number 1', LANGUAGE));
  let num1 = readline.question();
  
  while (invalidNumber(num1)) {
    prompt(messages('invalidNumber', LANGUAGE));
    num1 = readline.question();
  }
  
  prompt(messages('number 2', LANGUAGE));
  let num2 = readline.question();
  
  while (invalidNumber(num2)) {
    prompt(messages('invalidNumber', LANGUAGE));
    num2 = readline.question();
  }
  
  prompt(messages('operation', LANGUAGE));
  let operation = readline.question();
  
  while (!['1', '2', '3', '4', '5', '6'].includes(operation)) {
    prompt(messages('choose', LANGUAGE));
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
  
  prompt(`${messages('result', LANGUAGE)} ${output}`);


  prompt(messages('another calculation', LANGUAGE));
  let answer = readline.question();
  
  if (answer[0].toLowerCase() != 'y') {
    prompt(messages('thanks', LANGUAGE))
    break;
  }
}
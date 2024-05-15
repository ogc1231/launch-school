const MESSAGES = require('./calculatorV3.json');
const readline = require("readline-sync");

function prompt(message) {
  console.log(`==> ${message}`)
}

function isInvalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

prompt(MESSAGES['language']);
let language = readline.question();
  
while (!['en', 'es'].includes(language)) {
  prompt(MESSAGES['invalidLanguage']);
  language = readline.question();
}

prompt(messages('welcome', language));

while (true) {
  
  prompt(messages('num1', language));
  let num1 = readline.question();
  
  while (isInvalidNumber(num1)) {
    prompt(messages('invalidNumber', language));
    num1 = readline.question();
  }
  
  prompt(messages('num2', language));
  let num2 = readline.question();
  
  while (isInvalidNumber(num2)) {
    prompt(messages('invalidNumber', language));
    num2 = readline.question();
  }
  
  prompt(messages('choice', language));
  let choice = readline.question();
  
  while (!['1', '2', '3', '4'].includes(choice)) {
    prompt(messages('invalidChoice', language));
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
  
  prompt(`${messages('result', language)} ${output}`);
  
  prompt(messages('another', language));
  let answer = readline.question();
  
  if (answer === '') {
    prompt(messages('bye', language));
    break;
  } else if (language === 'en' && answer[0].toLowerCase() !== 'y') {
    prompt(messages('bye', language));
    break;
  } else if (language === 'es' && answer[0].toLowerCase() !== 's') {
    prompt(messages('bye', language));
    break;
  } 
}
const readline = require("readline-sync");
const MESSAGES = require("./loan-messages.json");

function messages(message) {
  return MESSAGES[message];
}

function prompt(message) {
  console.log(`=> ${message};`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || Number(num) < 0;
}

prompt(messages('welcome'));

while (true) {

  prompt(messages('loan amount'));
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt(messages('invalidNumber'));
    loanAmount = readline.question();
  }

  prompt(messages('APR'));
  let APR = readline.question();

  while (invalidNumber(APR)) {
    prompt(messages('invalidNumber'));
    APR = readline.question();
  }

  prompt(messages('loan duration'));
  let loanDurationMonths = readline.question();

  while (invalidNumber(loanDurationMonths)) {
    prompt(messages('invalidNumber'));
    loanDurationMonths = readline.question();
  }

  let monthlyInterestRate = (APR / 12) / 100;
  let monthlyPayment = loanAmount * (
    monthlyInterestRate / (
      1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths)))
  );

  let totalPayment = monthlyPayment * 24;

  let totalInterest = totalPayment - loanAmount;

  prompt(`${messages('monthly payment')} $${monthlyPayment.toFixed(2)}`);

  prompt(`${messages('total interest')} $${totalInterest.toFixed(2)}`);

  prompt(`${messages('total payment')} $${totalPayment.toFixed(2)}`);

  prompt(messages('another calculation'));
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') {
    prompt(messages('thanks'));
    break;
  }
}
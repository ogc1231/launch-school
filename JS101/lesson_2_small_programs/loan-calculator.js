const readline = require("readline-sync");
const MESSAGES = require("./loan-messages.json")

function messages(message) {
  return MESSAGES[message];
}

function prompt(message) {
  console.log(`=> ${message};`);
}

prompt(messages('welcome'));

prompt(messages('loan amount'))
let loanAmount = readline.question();

prompt(messages('APR'));
let APR = readline.question();

prompt(messages('loan duration'));
let loanDurationMonths = readline.question();

let monthlyInterestRate = (APR / 12) / 100;
let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

let totalPayment = monthlyPayment * 24;

let totalInterest = totalPayment - loanAmount;

prompt(`${messages('monthly payment')} $${monthlyPayment.toFixed(2)}`);

prompt(`${messages('total interest')} $${totalInterest.toFixed(2)}`);

prompt(`${messages('total payment')} $${totalPayment.toFixed(2)}`);

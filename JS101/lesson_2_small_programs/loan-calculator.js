const readline = require("readline-sync");
const MESSAGES = require("./loan-messages.json")

let loanAmount = readline.question('How much is your loan? ');

let APR = readline.question('What is your Annual Percentage Rate? ')

let loanDurationMonths = readline.question('What is the duration of your loan in months? ')

let monthlyInterestRate = (APR / 12) / 100
let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

let totalPayment = monthlyPayment * 24

let totalInterest = totalPayment - loanAmount

console.log(monthlyPayment.toFixed(2))

console.log(totalPayment.toFixed(2))

console.log(totalInterest.toFixed(2))
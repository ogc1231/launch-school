const readline = require("readline-sync");

function isInvalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || number < 0;
}

while (true) {

  console.log("What is loan amount?");
  let loanAmount = readline.question();

  while (isInvalidNumber(loanAmount)) {
    console.log("Invalid Number: enter a postive integer!");
    loanAmount = readline.question();
  }

  console.log("What is the Annual Percentage Rate (APR)?");
  let apr = readline.question();

  while (isInvalidNumber(apr)) {
    console.log("Invalid Number: enter a postive integer!");
    apr = readline.question();
  }

  console.log("What is the duration of your loan in years?");
  let loanDurationInYears = readline.question();

  while (isInvalidNumber(loanDurationInYears)) {
    console.log("Invalid Number: enter a postive integer!");
    loanDurationInYears = readline.question();
  }

  let monthlyApr = (apr / 12) / 100;
  let loanDurationInMonths = loanDurationInYears * 12;

  let monthlyPayment = loanAmount * (
    monthlyApr / (1 - Math.pow((1 + monthlyApr), (-loanDurationInMonths)
    )));
  let totalPayment = monthlyPayment * loanDurationInMonths;
  let totalInterest = totalPayment - loanAmount;
  let monthlyInterest = totalInterest / loanDurationInMonths;

  console.log(`Monthly payment is: $${monthlyPayment.toFixed(2)}`);
  console.log(`Total payemnt is: $${totalPayment.toFixed(2)}`);
  console.log(`Monthly interest: is $${monthlyInterest.toFixed(2)}`);
  console.log(`Total interest is: $${totalInterest.toFixed(2)}`);

  console.log("Calculate another loan? y/n");
  let answer = readline.question();

  if (answer === '' || answer[0].toLowerCase() !== 'y') {
    console.log('Thanks for using loan calculator');
    break;
  }
}
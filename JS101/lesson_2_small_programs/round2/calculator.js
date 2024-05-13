// Ask user for first number
// Ask user for second number
// Ask user what operation they wish to perform
// Perform selected opertation with both numbers entered by user
// Log result to console

const readline = require("readline-sync");

console.log("Welcome to Calculator!");

console.log("What's the first number?");
let num1 = Number(readline.question());

console.log("What's the second number?");
let num2 = Number(readline.question());

console.log("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let choice = readline.question();

let output;

if (choice === '1') {
  output = num1 + num2;
} else if (choice === '2') {
  output = num1 - num2;
} else if (choice === '3') {
  output = num1 * num2;
} else if (choice === '4') {
  output = num1 / num2;
}

console.log(`The result is: ${output}`);
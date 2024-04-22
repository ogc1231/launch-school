// Q1
// function isOdd(number) {
//     return Math.abs(number) % 2 === 1
// }

// console.log(isOdd(2));
// console.log(isOdd(5));
// console.log(isOdd(-17));
// console.log(isOdd(-8));
// console.log(isOdd(0));
// console.log(isOdd(7));

// Q2

// for (let i = 1; i < 100; i += 2) {
//     console.log(i)
// }

// for (let i = 1; i < 100; i += 1) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }


// Q3
// for (let i = 1; i < 100; i += 1) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i);
// }

// Q4
// const readline = require('readline-sync');
// const SQUARE_METER_IN_FEET = 10.7639

// let operation = readline.question("Are your measuremnents in meters or Feet?\nMeters or Feet ");

// while (!['Meters'.toLocaleLowerCase(), 'Feet'.toLowerCase()].includes(operation)) {
//   console.log('Must choose Meters or Feet');
//   operation = readline.question();
// }

// let length = readline.question(`Enter the length of the room in ${operation}: `);
// length = parseInt(length);

// let width = readline.question(`Enter the width of the room  ${operation}: `);
// width = parseInt(width);

// let areaMeters = length * width
// let areaFeet = (areaMeters) * SQUARE_METER_IN_FEET

// if (operation === 'Meters'.toLowerCase()) {
//     console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters or ${areaFeet.toFixed(2)} square feet`)
// } else {
//     console.log(`The area of the room is ${areaFeet.toFixed(2)} square feet or ${areaMeters.toFixed(2)} square meters`)
// }

// Q5
// const readline = require("readline-sync");

// let bill = parseFloat(readline.question('What is the bill?\n'));
// let tipPercentage = parseFloat(readline.question('What is the tip percentage?\n'));

// let tip = bill * (tipPercentage / 100);
// let totalPayment = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${totalPayment.toFixed(2)}`);

// Q6
// const readline = require("readline-sync");

// let number = parseFloat(readline.question('Please enter an integer greater than 0:\n'));

// while (!Number(number) || number < 1) {
//   number = readline.question('Please enter an integer greater than 0:\n');
// }

// let choice = readline.question('Enter "s" to compute the sum, or "p" to compute the product.\n')

// while (!['S'.toLowerCase(), 'P'.toLowerCase()].includes(choice)) {
//   choice = readline.question('Must choose "s" or "p"\n');
// }

// function computeSum(number) {
//   let totalSum = 0;
  
//   for (let i = 1; i <= number; i += 1) {
//     totalSum += i
//   }
//   return totalSum;
// }

// function computeProduct(number) {
//   let totalProduct = 1;
  
//   for (let j = 1; j <= number; j += 1) {
//     totalProduct *= j;
//   }
//   return totalProduct;
// }

// if (choice === 's') {
//   let sum = computeSum(number)
//   console.log(`The sum of the integers between 1 and ${number} is ${sum}.`)
// }
// else if (choice === 'p') {
//   let product = computeProduct(number)
//   console.log(`The product of the integers between 1 and ${number} is ${product}.`)
// }
// else {
//   console.log(`Error. Unknown operation.");`)
// }

// if starting with arrays instead of input need to change the sum and product and use array.reduce instead of for loop
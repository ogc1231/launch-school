// 1
// function isOdd(num) {
//     return Math.abs(num) % 2 === 1 ? true : false
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// 2
// for (let i = 1; i <= 99; i += 2) {
//     console.log(i);
// }

// let i = -1;
// while (i < 99) {
//     console.log(i += 2);
// }

// 3
// for (let i = 2; i <=99; i += 2) {
//     console.log(i);
// }

// for (let i = 1; i <= 99; i += 1) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i)
// }

// 4
// let readlineSync = require("readline-sync");
// const ONE_METER_SQUARED_IN_FEET = 10.7639

// console.log("Enter the length of the room in meters: ")
// let length = parseInt(readlineSync.prompt())

// console.log("Enter the width of the room in meters: ")
// let width = parseInt(readlineSync.prompt())

// let areaMeters = length * width
// let areaFeet = (length * ONE_METER_SQUARED_IN_FEET) * (width * ONE_METER_SQUARED_IN_FEET)
    
// console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`)

// 5
// let readlineSync = require("readline-sync");

// let bill = Number(readlineSync.question('What is the bill? '));

// let tipPercentage = Number(readlineSync.question('What is the tip percentage? '));

// let totalTip = bill * (tipPercentage / 100);

// let totalBill = bill + totalTip;

// console.log(`The tip is $${totalTip.toFixed(2)}`);
// console.log(`The total is $${totalBill.toFixed(2)}`);

// 6

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Please enter an integer greater than 0:')
let number = readline.question();

while (number < 1) {
  prompt("That's not a valid integer");
  number = readline.question();
}

prompt('Enter "s" to compute the sum, or "p" to compute the product.');
let choice = readline.question();

while (choice !== 's' && choice !== 'p') {
  prompt("That's not a valid choice");
  choice = readline.question();
}

function sum(number) {
  for (let i = 1, i < number; i += 1) {
    return number[i]++
  }
}

function product(number) {
  for (let i = 1, i < number; i += 1) {
    return number[i]++
  }
}


prompt('The sum of the integers between 1 and 5 is 15.');
prompt('The product of the integers between 1 and 6 is 720.');
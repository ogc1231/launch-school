// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function isOdd(number) {
//     return Math.abs(number) % 2 === 1
// }

// console.log(isOdd(2));
// console.log(isOdd(5));
// console.log(isOdd(-17));
// console.log(isOdd(-8));
// console.log(isOdd(0));
// console.log(isOdd(7));
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// for (let i = 1; i < 100; i += 2) {
//     console.log(i)
// }

// for (let i = 1; i < 100; i += 1) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// for (let i = 1; i < 100; i += 1) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i);
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
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
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let bill = parseFloat(readline.question('What is the bill?\n'));
// let tipPercentage = parseFloat(readline.question('What is the tip percentage?\n'));

// let tip = bill * (tipPercentage / 100);
// let totalPayment = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${totalPayment.toFixed(2)}`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
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
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// function shortLongShort(str1, str2) {
//   if (str1 > str2) {
//     return str1 + str2 + str1;
//   }
//   else {
//     return str2 + str1 + str2;
//   }
// }

// console.log(shortLongShort('abc', 'defgh'));  
// console.log(shortLongShort('abcde', 'fgh'));   
// console.log(shortLongShort('', 'xyz'));
// ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------
// divisible by 4 = leap
// divisible by 4 && divisible by 100 = not leap
// divisible by 100 = not leap
// divisible by 100 && divisible by 400 = leap 

// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

// fails - 2400, 240000, 2000, 400
// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------
// function isLeapYear(year) {
//   if (year < 1752 && year % 4 === 0) {
//     return true;
//   } else if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true 
// console.log(isLeapYear(1700));      // true
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // true
// console.log(isLeapYear(400));       // true
// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------
// function multisum(number) {
//   let totalSum = 0;
  
//   for (let i = 1; i <= number; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       totalSum += i;
//     }
//   }
//   return totalSum;
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

// function isMutliple(number, multiple) {
//   return number % multiple === 0;
// }

// function multisum(number) {
//   let sum = 0;
  
//   for (let i = 1; i <= number; i += 1) {
//     if (isMutliple(i, 3) || isMutliple(i, 5)) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168
// ----------------------------------------------------------------------------------------------------------------------------

// Q11
// ----------------------------------------------------------------------------------------------------------------------------
// function utf16Value(string) {
//   let sum = 0;
  
//   for (let i = 0; i < string.length; i += 1) {
//     sum += string.charCodeAt(i);
//   }
//   return sum;
// }

// console.log(utf16Value('Four score'));         // 984
// console.log(utf16Value('Launch School'));      // 1251
// console.log(utf16Value('a'));                  // 97
// console.log(utf16Value(''));                   // 0

// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// console.log(utf16Value(OMEGA));                  // 937
// console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811
// ----------------------------------------------------------------------------------------------------------------------------
// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function isOdd(num) {
//   if (Math.abs(num) % 2 === 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// for (let i = 1; i <= 99; i += 1) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// let count = 0

// while (count <= 99) {
//   if (count % 2 === 1) {
//     console.log(count);
//   }
//   count += 1;
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// for (let i = 1; i <= 99; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");
// const METERSQINFEET = 10.7639;

// console.log('Enter the length of the room in meters:');
// let length = Number(readline.question());

// console.log('Enter the width of the room in meters:');
// let width = Number(readline.question());

// let areaMeters = width * length;
// let areaFeet = areaMeters * METERSQINFEET;

// console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// console.log('What is the bill?');
// let bill = Number(readline.question());

// console.log('What is the tip percentage?');
// let tipPercentage = Number(readline.question());

// let tip = bill * (tipPercentage / 100);
// let total = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// console.log('Please enter an integer greater than 0:');
// let integer = Number(readline.question());

// console.log(`Enter "s" to compute the sum, or "p" to compute the product`);
// let answer = readline.question();

// function sum(integer) {
//   let sumTotal = 0;
  
//   for (let i = 1; i <= integer; i += 1) {
//     sumTotal += i;
//   }
//   return `The sum of the integers between 1 and ${integer} is ${sumTotal}.`
// }

// function product(integer) {
//   let productTotal = 1;
  
//   for (let i = 1; i <= integer; i += 1) {
//     productTotal *= i;
//   }
//   return `The product of the integers between 1 and ${integer} is ${productTotal}.`
// }

// if (answer === 's') {
//   console.log(sum(integer));
// } else if (answer === 'p') {
//   console.log(product(integer));
// } else {
//   console.log('error')
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// function shortLongShort(str1, str2) {
//   if (str1.length < str2.length) {
//     console.log(str1 + str2 + str1);
//   } else if (str1.length > str2.length) {
//     console.log(str2 + str1 + str2);
//   } else {
//     console.log('Same length');
//   }
// }

// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"
// ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------
// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     console.log(true);
//   } else if (year % 100 === 0) {
//     console.log(false);
//   } else {
//     console.log(year % 4 === 0);
//   }
// }

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true
// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------
// function isLeapYear(year) {
//   if (year < 1752 && year % 4 === 0) {
//     console.log(true);
//   } 
  
//   if (year % 400 === 0) {
//     console.log(true);
//   } else if (year % 100 === 0) {
//     console.log(false);
//   } else {
//     (year % 4 === 0)
//   }
// }

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true
// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------
// function multisum(num) {
//   let sum = 0;
  
//   for (let i = 1; i <= num; i += 1) {
//     if (i % 5 === 0 || i % 3 === 0) {
//       sum += i
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
// function utf16Value(str) {
//   let sum = 0;
  
//   for (let i = 0; i < str.length; i += 1) {
//     sum += str.charCodeAt(i);
//   }
//   console.log(sum);
// }

// utf16Value('Four score');         // 984
// utf16Value('Launch School');      // 1251
// utf16Value('a');                  // 97
// utf16Value('');                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
// ----------------------------------------------------------------------------------------------------------------------------
// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function isOdd(num) {
//   if (Math.abs(num) % 2 === 1) {
//     return true;
//   } else {
//     return false;
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

// let count = 1;

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

// let count = 2;

// while (count <= 99) {
//   if (count % 2 === 0) {
//     console.log(count);
//   }
//   count += 1;
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");
// const SQMETERS_TO_SQFEET = 10.7639;

// let length = Number(readline.question('Enter the length of the room in meters:\n'));
// let width = Number(readline.question('Enter the width of the room in meters:\n'));

// let area = length * width;
// let areaFeet = area * SQMETERS_TO_SQFEET;

// console.log(`The area of the room is ${area.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let bill = Number(readline.question('What is the bill?\n'));
// let tipPercentage = Number(readline.question('What is the tip percentage?\n')) / 100;

// let tip = bill * tipPercentage;
// let total = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let answer = readline.question('Enter "s" to compute the sum, or "p" to compute the product.\n')
// let integer = readline.question('Please enter an integer greater than 0:\n')

// function sum(integer) {
//   let sum = 0;
    
//   for (let i = 1; i <= integer; i += 1) {
//     sum += i;
//   }
//   return `The sum of the integers between 1 and ${integer} is ${sum}.`
// }
  
// function product(integer) {
//   let product = 1;
    
//   for (let i = 1; i <= integer; i += 1) {
//     product *= i;
//   }
//   return `The product of the integers between 1 and ${integer} is ${product}.`
// }

// if (answer === 's'.toLowerCase()) {
//     console.log(sum(integer));
// } else if (answer === 'p'.toLowerCase()) {
//   console.log(product(integer));
// } else {
//   console.log("Oops. Unknown operation.");
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// function shortLongShort(str1, str2) {
//   if (str1 > str2) {
//     console.log(str2 + str1 + str2);
//   } else if (str1 < str2) {
//     console.log(str1 + str2 + str1);
//   } else {
//     console.log('equal length');
//   }
// }

// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"
// shortLongShort('xyz', 'xyz');   
// ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------
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
// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------
// function isLeapYear(year) {
//   if (year < 1752 && year % 4 === 0) {
//     console.log(true);
//   } else if (year % 400 === 0) {
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
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true
// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------
// function multisum(number) {
//   let sum = 0;
  
//   for (let i = 0; i <= number; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }

// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168
// ----------------------------------------------------------------------------------------------------------------------------

// Q11
// ----------------------------------------------------------------------------------------------------------------------------
// function utf16Value(string) {
//   let sum = 0;
  
//   for (let i = 0; i < string.length; i += 1) {
//     sum += string.charCodeAt(i);
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
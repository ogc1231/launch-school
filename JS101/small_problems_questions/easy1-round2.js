// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function isOdd(number) {
//   if (Math.abs(number) % 2 === 1) {
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
//   console.log(count);
//   count += 2;
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// for (let i = 1; i <= 99; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let count = 1;

// while (count <= 99) {
//   if (count % 2 === 0) {
//     console.log(count)
//   }
//   count += 1;
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");
// const ONE_SQUARE_METER_IN_FEET = 10.7639;

// let choiceTypes = ['Meters', 'Feet'];

// let choice = readline.question(`Would like you to calculate in meters or feet?\n`);

// while (![choiceTypes[0].toLowerCase(), choiceTypes[choiceTypes.length - 1].toLowerCase()].includes(choice)) {
//   choice = readline.question('Must choose Meters or Feet!\n');
// }

// if (choice === 'Meters'.toLowerCase()) {
//   let lengthMeters = Number(readline.question('Enter the length of the room in meters:\n'));
//   let widthMeters = Number(readline.question('Enter the width of the room in meters:\n'));
//   let areaMeters = lengthMeters * widthMeters;
//   let areaFeet = areaMeters * ONE_SQUARE_METER_IN_FEET;
  
//   console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`);
  
// } else if (choice === 'Feet'.toLowerCase()) {
//   let lengthFeet = Number(readline.question('Enter the length of the room in feet:\n'));
//   let widthFeet = Number(readline.question('Enter the width of the room in feet:\n'));
//   let areaFeet = lengthFeet * widthFeet;
//   let areaMeters = areaFeet / ONE_SQUARE_METER_IN_FEET;

//   console.log(`The area of the room is ${areaFeet.toFixed(2)} square feet (${areaMeters.toFixed(2)} square meters).`);
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let bill = Number(readline.question('What is the bill?\n'));
// let tipPercentage = Number(readline.question('What is the tip percentage?\n'));

// let tip = bill * (tipPercentage / 100);
// let total = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let integer = Number(readline.question('Please enter an integer greater than 0:\n'));

// while (integer === 0 || Number.isNaN(integer)) {
//     integer = Number(readline.question('Please enter an integer greater than 0:\n'));
// } 

// let choice = readline.question('Enter "s" to compute the sum, or "p" to compute the product.\n');

// while (!['S'.toLowerCase(), 'P'.toLowerCase()].includes(choice)) {
//     choice = readline.question('Must enter "s" to compute the sum, or "p" to compute the product.\n');
// }

// function sum(number) {
//     let sum = 0;
    
//     for (let i = 1; i <= number; i += 1) {
//         sum += i;
//     }
//     return sum;
// }

// function product(number) {
//     let product = 1;
    
//     for (let i = 1; i <= number; i += 1) {
//         product *= i;
//     }
//     return product;
// }

// if (choice === "S".toLowerCase()) {
//     console.log(sum(integer));
// } else if (choice === 'P'.toLowerCase()) {
//     console.log(product(integer));
// }

// function sumArray(array) {
//     let value = 0;
//     let finalValue = array.reduce((accumulator, currentValue) => accumulator + currentValue, value);
//     console.log(finalValue);
// }

// function productArray(array) {
//     let value = 1;
//     let finalValue = array.reduce((accumlator, currentValue) => accumlator * currentValue, value);
//     console.log(finalValue);
// }

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, 2, 3, 4, 5, 6];

// sumArray(array1);
// productArray(array2);
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// function shortLongShort(str1, str2) {
//     if (str1.length < str2.length) {
//         console.log(str1 + str2 + str1);
//     } else if (str1.length > str2.length) {
//         console.log(str2 + str1 + str2)
//     }
// }

// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"
// ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------
// function isLeapYear(year) {
//     if (year <= 0) return `ERROR - year must be greater than zero!`;

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
//     if (year <= 0) return `ERROR - year must be greater than zero!`;

//     if (year < 1752 % year % 4 === 0) {
//         return true;  
//     } else if (year % 400 === 0) {
//         return true;
//     } else if (year % 100 === 0) {
//         return false;
//     } else {
//         return year % 4 === 0;
//     }
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

// Q10
// ----------------------------------------------------------------------------------------------------------------------------
// function multisum(num) {
//     let sum = 0;
    
//     for (let i = 0; i <= num; i += 1) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168
// ----------------------------------------------------------------------------------------------------------------------------

// Q11
// ----------------------------------------------------------------------------------------------------------------------------
// function utf16Value(string) {
//     let sum = 0;
    
//     for (let i = 0; i < string.length; i += 1) {
//         sum += string.charCodeAt(i);
//     }
//     console.log(sum);
// }


// utf16Value('Four score');         // 984
// utf16Value('Launch School');      // 1251
// utf16Value('a');                  // 97
// utf16Value('');                   // 0

// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
// ----------------------------------------------------------------------------------------------------------------------------
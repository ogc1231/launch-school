// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function crunch(str) {
//   let newStr = '';
  
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] !== str[i + 1]) {
//       newStr += str[i];
//     }
//   }
//   console.log(newStr);
// }

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// function logInBox(str) {
//   let horizontal = `+-${'-'.repeat(str.length)}-+`;
//   let vertical = `| ${' '.repeat(str.length)} |`;
//   let center = `| ${str} |`;
  
//   console.log(horizontal);
//   console.log(vertical);
//   console.log(center);
//   console.log(vertical);
//   console.log(horizontal);
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');
// // ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// function stringy(num) {
//   if (num % 2 === 0) {
//     console.log('10'.repeat(num / 2));
//   } else {
//     console.log('10'.repeat(num / 2) + 1);
//   }
// }

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
// obsolete
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// function triangle(num) {
//   for (let i = 0; i <= num; i += 1) {
//     console.log('*'.repeat(i).padStart(num));
//   }
// }

// triangle(5);
// triangle(9);
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let noun = readline.question('Enter a noun:\n');
// let verb = readline.question('Enter a verb:\n');
// let adjective = readline.question('Enter a adjective:\n');
// let adverb = readline.question('Enter a adverb:\n');

// console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
// console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
// console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// function twice(num) {
//   let numString = String(num);
//   let centerIndex = numString.length / 2;
//   let left = numString.slice(0, centerIndex);
//   let right = numString.slice(centerIndex);
  
//   if (left === right) {
//     console.log(num);
//   } else {
//     console.log(num * 2);
//   }
// }

// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676
// ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------
// function getGrade(avg1, avg2, avg3) {
//   let average = (avg1 + avg2 + avg3) / 3;
  
//   switch(true) {
//     case average >= 90 && average <= 100: return 'A';
//     case average >= 80: return 'B';
//     case average >= 70: return 'C';
//     case average >= 60: return 'D';
//     default: return 'F';
//   }
// }

// console.log(getGrade(95, 90, 93));    // "A"
// console.log(getGrade(50, 50, 95));    // "D"
// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------
// function cleanUp(str) {
//   console.log(str.replace(/[^a-z]+/gi, ' '));
// }

// cleanUp("---what's my +*& line?");    // " what s my line "
// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------
// function century(year) {
//     let centuryString = Math.ceil(year / 100).toString();
    
//     let lastChar = centuryString[centuryString.length - 1];
//     let secondLastChar = centuryString[centuryString.length - 2];
    
//     if (secondLastChar === '1') {
//         return centuryString + 'th';
//     }
    
//     if (lastChar === '1') {
//         return centuryString + 'st';
//     } else if (lastChar === '2') {
//         return centuryString + 'nd';
//     } else if (lastChar === '3') {
//         return centuryString + 'rd';
//     } else {
//         return centuryString + 'th';
//     }
    
// }

// console.log(century(2000));        // "20th"
// console.log(century(2001));        // "21st"
// console.log(century(1965));        // "20th"
// console.log(century(256));         // "3rd"
// console.log(century(5));           // "1st"
// console.log(century(10103));       // "102nd"
// console.log(century(1052));        // "11th"
// console.log(century(1127));        // "12th"
// console.log(century(11201));       // "113th"
// ----------------------------------------------------------------------------------------------------------------------------
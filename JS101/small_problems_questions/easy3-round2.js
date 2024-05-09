// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function crunch(string) {
//   let newString = '';
  
//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i] !== string[i + 1]) {
//       newString += string[i];
//     }
//   }
//   console.log(newString);
// }

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('');                           // ""
// crunch('a');                          // "a"
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// function logInBox(string) {
//   let horizontal = `+-${'-'.repeat(string.length)}-+`
//   let vertical = `│ ${' '.repeat(string.length)} │`
//   let middle = `│ ${string} │`
  
//   console.log(horizontal);
//   console.log(vertical);
//   console.log(middle);
//   console.log(vertical);
//   console.log(horizontal);
// }

// logInBox('To boldly go where no one has gone before.');
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// function stringy(number) {
//     if (number % 2 === 0) {
//         return '10'.repeat(number / 2);
//     } else {
//         return '10'.repeat((number - 1) / 2) + 1;
//     }
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
// Obsolete question
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// function triangle(number) {
//     for (let i = 0; i <= number; i += 1) {
//         console.log('*'.repeat(i).padStart(number));
//     }
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
//     let numString = String(num);
//     let center = Math.floor(numString.length / 2);
//     let left = numString.substring(0, center);
//     let right = numString.substring(center);
    
//     if (left === right) {
//         console.log(num);
//     } else {
//         console.log(num * 2);
//     }
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
// function getGrade(grade1, grade2, grade3) {
//     let average = (grade1 + grade2 + grade3) / 3;
    
//     if (average >= 90 && average < 101) {
//         console.log('A');
//     } else if (average >= 80) {
//         console.log('B');
//     } else if (average >= 70) {
//         console.log('C');
//     } else if (average >= 60) {
//         console.log('D');
//     } else {
//         console.log('F');
//     }
// }


// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"
// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------
// function cleanUp(string) {
//     console.log(string.replace(/[^a-z]+/gi, ' '));
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
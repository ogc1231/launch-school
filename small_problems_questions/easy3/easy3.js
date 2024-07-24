// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function crunch(string) {
//   let array = [];
//   let newString;
  
//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i] !== string[i + 1]) {
//       array.push(string[i])
//     }
//   }
//   newString = array.join('');
//   return newString;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// function logInBox(string) {
//   let horizontal = `+${'-'.repeat(string.length + 2)}+`
//   let vertical = `|${' '.repeat(string.length + 2)}|`
  
//   console.log(horizontal);
//   console.log(vertical);
//   console.log(`| ${string} |`)
//   console.log(vertical);
//   console.log(horizontal);
  
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// function stringy(number) {
//   if (number % 2 === 0) {
//     return '10'.repeat(number / 2);
//   } else {
//     return '10'.repeat((number - 1) / 2) + '1';
//   }
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
//Fibonacci Number Location By Length [OBSOLETE]
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// function triangle(number) {
//   for (let i = 0; i <= number; i += 1) {
//     console.log('*'.repeat(i).padStart(number));
//   }
// }

// triangle(5);
// triangle(9);
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let noun = readline.question('Enter a noun: ');
// let verb = readline.question('Enter a verb: ');
// let adjective = readline.question('Enter an adjective: ');
// let adverb = readline.question('Enter an adverb: ');

// console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
// console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`);
// console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// function twice(number) {
//   let string = String(number);
  
//   let leftSide = string.substring(0, string.length / 2);
//   let rightSide = string.substring(string.length / 2);
  
//   if (leftSide === rightSide) {
//     console.log(number);
//   } else {
//     console.log(number * 2);
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
// // ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------
// function getGrade(grade1, grade2, grade3) {
//   let average = Math.round((grade1 + grade2 + grade3) / 3);
  
//   if (average >= 90 && average <= 100) {
//     console.log('A');
//   } else if (average >= 80) {
//     console.log('B');
//   } else if (average >= 70) {
//     console.log('C');
//   } else if (average >= 60) {
//     console.log('D');
//   } else {
//     console.log('F');
//   }
// }

// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"
// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------
// function cleanUp(string) {
//   console.log(string.replace(/\W+/g, ' '));
// }

// cleanUp("---what's my +*& line?");    // " what s my line "
// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------
// function century(year) {
//   let century = Math.floor((year - 1) / 100 + 1).toString();
  
//   let penultimateChar = century[century.length - 2];
  
//   if (penultimateChar === '1') {
//     return century + 'th';
//   }
  
//   let lastChar = century[century.length - 1];
  
//   if (lastChar === '1') {
//     return century + 'st';
//   } else if (lastChar === '2') {
//     return century + 'nd';
//   } else if (lastChar === '3') {
//     return century + 'rd';
//   } else {
//     return century + 'th';
//   }
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
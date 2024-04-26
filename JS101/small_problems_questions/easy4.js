// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let numbers = [];

// let firstNum = readline.question('Enter the 1st number: ');
// let secondNum = readline.question('Enter the 2nd number: ');
// let thirdNum = readline.question('Enter the 3rd number: ');
// let fourthNum = readline.question('Enter the 4th number: ');
// let fifthNum = readline.question('Enter the 5th number: ');
// let lastNum = readline.question('Enter the last number: ');

// numbers.push(firstNum, secondNum, thirdNum, fourthNum, fifthNum);

// if (numbers.includes(lastNum)) {
//   console.log(`The number ${lastNum} appears in ${firstNum}, ${secondNum}, ${thirdNum}, ${fourthNum}, ${fifthNum}.`);
// } else {
//   console.log(`The number ${lastNum} does not appear in ${firstNum}, ${secondNum}, ${thirdNum}, ${fourthNum}, ${fifthNum}.`);
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// function isPalindrome(string) {
//   let array = string.split('');
//   let arrayReversed = string.split('').reverse();
  
//   if (array.join('') === arrayReversed.join('')) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// function isRealPalindrome(string) {
//   let array = string.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
//   let arrayReversed = string.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse();
  
//   if (array.join('') === arrayReversed.join('')) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
// function isPalindromicNumber(number) {
//   let string = number.toString();
  
//   let array = string.split('');
//   let arrayReversed = string.split('').reverse();
  
//   if (array.join('') === arrayReversed.join('')) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
  
// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// function runningTotal(array) {
//   let results = [];
//   let sum = 0
  
//   for (let i = 0; i < array.length; i += 1) {
//     results.push(sum += array[i]);
//   }
//   console.log(results);
// }

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
// function wordSizes(string) {
//   let array = string.split(' ')
//   let count = {};
  
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length === 0) {
//       continue;
//     }
    
//     if (!count[array[i].length]) {
//       count[array[i].length] = 0;
//     }
//     count[array[i].length] += 1;
//   }
//   console.log(count);
  
// }

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// function wordSizes(string) {
//   let array = string.replace(/[^\w\s]/gi, "").split(' ')
//   let count = {};
  
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length === 0) {
//       continue;
//     }
    
//     if (!count[array[i].length]) {
//       count[array[i].length] = 0;
//     }
//     count[array[i].length] += 1;
//   }
//   console.log(count);
  
// }

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
// wordSizes('');  
// ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------
// function swap(string) {
//     let array = string.split(' ').map(word => {
//         let firstChar = word.slice(0, 1);
//         let middleChar = word.slice(1, -1);
//         let lastChar = word.slice(-1);
        
//         if (word.length === 1) {
//             lastChar = '';
//         }
//         return lastChar + middleChar + firstChar;
//     })
//     console.log(array.join(' '));
// }

// swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
// swap('Abcde');                          // "ebcdA"
// swap('a');                              // "a"
// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------
// function stringToInteger(string) {
//     return string * 1;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true
// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------
// function stringToSignedInteger(string) {
//     return string * 1;
// }

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true
// ----------------------------------------------------------------------------------------------------------------------------

// Q11
// ----------------------------------------------------------------------------------------------------------------------------
// function integerToString(number) {
//     console.log(`${number}`);
// }

// integerToString(4321);        // "4321"
// integerToString(0);           // "0"
// integerToString(5000);        // "5000"
// integerToString(1234567890);  // "1234567890"
// ----------------------------------------------------------------------------------------------------------------------------

// Q12
// ----------------------------------------------------------------------------------------------------------------------------
// function signedIntegerToString(number) {
//     if (number > 0) {
//         return `+${number}`;
//     } else {
//         return `${number}`;
//     }
// }

// console.log(signedIntegerToString(4321) === "+4321");
// console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");
// ----------------------------------------------------------------------------------------------------------------------------
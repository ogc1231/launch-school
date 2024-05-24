// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let numberArr = [];

// let num1 = readline.question('Enter the 1st number:\n');
// let num2 = readline.question('Enter the 2nd number:\n');
// let num3 = readline.question('Enter the 3rd number:\n');
// let num4 = readline.question('Enter the 4th number:\n');
// let num5 = readline.question('Enter the 5th number:\n');
// let lastNum = readline.question('Enter the last number:\n');

// numberArr.push(num1, num2, num3, num4, num5);

// if (numberArr.includes(lastNum)) {
//     console.log(`The number ${lastNum} appears in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`);
// } else {
//     console.log(`The number ${lastNum} does not appears in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`);
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// function isPalindrome(string) {
//     let stringArrReversed = string.split('').reverse().join('');
    
//     if (string === stringArrReversed) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// function isRealPalindrome(string) {
//     let cleanString = string.replace(/[^0-9a-z]/gi, '').toLowerCase();
//     let stringArrReversed = cleanString.split('').reverse().join('');
    
//     if (cleanString === stringArrReversed) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
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
// function isPalindromicNumber(num) {
//     let numString = num.toString().split('').join('');
    
//     let numStringReversed = num.toString().split('').reverse().join('');
    
//     if (numString === numStringReversed) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// function runningTotal(arr) {
//     let newArr = [];
//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i += 1) {
//         newArr.push(sum += arr[i]);
//     }
//     console.log(newArr);
// }

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
function wordSizes(string) {
    let stringArr = string.split(' ');
    
    console.log(stringArr)
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------
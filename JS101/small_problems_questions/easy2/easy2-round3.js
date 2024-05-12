// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function greetings(arr, obj) {
//   let name = `${arr[0]} ${arr[1]} ${arr[2]}`;
//   let job = `${obj.title} ${obj.occupation}`;
  
//   return `Hello ${name}! Nice to have a ${job}`;
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// const readine = require("readline-sync");

// let name = readine.question('What is your name?\n');

// if (name[name.length - 1] === '!') {
//   console.log(`HELLO ${name.toUpperCase().slice(0, -1)}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`);
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// console.log(multiply(5, 3) === 15); // logs true
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function square(num) {
//   return multiply(num, num);
// }

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let num1 = Number(readline.question('==> Enter the first number:\n'));
// let num2 = Number(readline.question('==> Enter the second number:\n'));

// let sum = num1 + num2;
// let minus = num1 - num2;
// let multiply = num1 * num2;
// let divide = num1 / num2;
// let remainder = num1 % num2;
// let power = num1 ** num2;

// console.log(`${num1} + ${num2} = ${sum}`);
// console.log(`${num1} - ${num2} = ${minus}`);
// console.log(`${num1} * ${num2} = ${multiply}`);
// console.log(`${num1} / ${num2} = ${Math.floor(divide)}`);
// console.log(`${num1} % ${num2} = ${remainder}`);
// console.log(`${num1} **n ${num2} = ${power}`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
// function penultimate(string) {
//   let stringArr = string.split(' ');
  
//   if (stringArr.length === 1) {
//     return string;
//   } else if (stringArr.length === 0) {
//     return string;
//   } else {
//     return stringArr[stringArr.length - 2];
//   }
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true
// console.log(penultimate('') === '');
// console.log(penultimate('wish') === 'wish');

// function middle(string) {
//   let strArr = string.split(' ');
  
//   if (strArr.length % 2 === 0) {
//     return (strArr[(strArr.length / 2) - 1]) + " " + (strArr[(strArr.length / 2)]);
//   } else {
//     return strArr[Math.floor(strArr.length / 2)];
//   } 
// }

// console.log(middle("last word"));
// console.log(middle("Launch School is great!"));
// console.log(middle("Launch School is great dog!"));
// console.log(middle(''));
// console.log(middle('wish'));
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// function xor(num1, num2) {
//   if ((num1 && !num2) || (num2 && !num1)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(xor(5, 0) === true);          // true
// console.log(xor(false, true) === true);   // true
// console.log(xor(1, 1) === false);         // true
// console.log(xor(true, true) === false);   // true
// console.log(xor(0, false) === false);     // true
// console.log(xor(0, 0) === false);         // true
// ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------
// function oddities(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (i % 2 === 0) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []
// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------
// function randomAge(min, max) {
//     let age = Math.floor(Math.random() * (max - min + 1) + min);
//     console.log(`Teddy is ${age} years old!`);
// }

// randomAge(20, 120);
// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let currentAge = readline.question('What is your age?\n');
// let retirementAge = readline.question('At what age would you like to retire?\n');
// let date = new Date();
// let yearsLeft = retirementAge - currentAge;
// let year = date.getFullYear();
// let retirementYear = year + yearsLeft;

// console.log(`It's ${year}. You will retire in ${retirementYear}.`);
// console.log(`You have only ${yearsLeft} years of work to go!`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q11
// ----------------------------------------------------------------------------------------------------------------------------
// function centerOf(string) {
//     let centerIndex = Math.floor(string.length / 2);
    
//     if (string.length % 2 === 0) {
//         console.log(string.slice(centerIndex - 1, centerIndex + 1));
//     } else {
//         console.log(string.slice(centerIndex, centerIndex + 1));
//     }
// }

// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"
// ----------------------------------------------------------------------------------------------------------------------------

// Q12
// ----------------------------------------------------------------------------------------------------------------------------
// function negative(num) {
//     console.log(-Math.abs(num));
// }

// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0
// ----------------------------------------------------------------------------------------------------------------------------
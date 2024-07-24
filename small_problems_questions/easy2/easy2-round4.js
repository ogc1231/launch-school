// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function greetings(arr, obj) {
//   return `Hello, ${arr[0]} ${arr[1]} ${arr[2]}! Nice to have a ${obj.title} ${obj.occupation} around.`
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require('readline-sync');

// console.log("What is your name?");
// let name = readline.question();

// if (name[name.length - 1] === "!") {
//   console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`)
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
// function penultimate(str) {
//   let strArray = str.split(' ');
//   return strArray[strArray.length - 2];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// function xor(val1, val2) {
//   if ((val1 && !val2) || (val2 && !val1)) {
//     return true
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
//   let newArr = [];
  
//   for (let i = 0; i < arr.length; i += 1) {
//     if (i % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
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
//   return Math.floor(Math.random() * (120 - 20 + 1) + 20);
// }

// let age = randomAge(20, 120);
// console.log(`Teddy is ${age} years old!`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let date = new Date();
// let year = date.getFullYear();

// console.log('What is your age?');
// let currentAge = readline.question();

// console.log('At what age would you like to retire?');
// let retirementAge = readline.question();

// let yearsOfWorkLeft = retirementAge - currentAge;
// let retirementYear = year + yearsOfWorkLeft;

// console.log(`It's ${year}. You will retire in ${retirementYear}.`);
// console.log(`You have only ${yearsOfWorkLeft} years of work to go!`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q11
// ----------------------------------------------------------------------------------------------------------------------------
// function centerOf(str) {
//   let centerIndex = str.length / 2;
  
//   if (str.length % 2 === 0) {
//     console.log(str.slice(centerIndex - 1, centerIndex + 1));
//   } else {
//     console.log(str.slice(centerIndex, centerIndex + 1));
//   }
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
//   console.log(-Math.abs(num));
// }

// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0
// // ----------------------------------------------------------------------------------------------------------------------------
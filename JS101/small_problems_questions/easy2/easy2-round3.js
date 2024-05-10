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
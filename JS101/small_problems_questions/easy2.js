// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function greetings(array, object) {
//   return `Hello, ${array.join(' ')}! Nice to have a ${object.title} ${object.occupation} around.`
// }
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.

// console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let name = readline.question("What is your name?\n");

// if (name.includes("!")) {
//   let newName = name.slice(0, -1)
//   console.log(`HELLO ${newName.toUpperCase()}. WHY ARE WE SCREAMING?`);
// }
// else {
//   console.log(`Hello ${name}`);
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// function multiply(num1, num2) {
//   return num1 * num2
// }
// console.log(multiply(5, 3) === 15); // logs true
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function square(number) {
//   return multiply(number, number);
// }

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// console.log("==> Enter the first number:")
// let num1 = Number(readline.prompt());

// console.log("==> Enter the second number:")
// let num2 = Number(readline.prompt());

// let sum = num1 + num2;
// let minus = num1 - num2;
// let multiply = num1 * num2;
// let division = num1 / num2;
// let remainder = num1 % num2;
// let power = num1 ** num2;

// console.log(`${num1} + ${num2} = ${sum}`);
// console.log(`${num1} - ${num2} = ${minus}`);
// console.log(`${num1} * ${num2} = ${multiply}`);
// console.log(`${num1} / ${num2} = ${Math.floor(division)}`);
// console.log(`${num1} % ${num2} = ${remainder}`);
// console.log(`${num1} ** ${num2} = ${power}`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
// function penultimate(string) {
//     let secondLast = string.split(" ").slice(-2)[0];
//     return secondLast;
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// function middle(string) {
//     let words = string.split(" ");
//     let middle = words.length / 2;
    
//     if (words.length % 2 === 0) {
//         return words[(middle) - 1] + " " + words[(middle)];
//     }
//     else {
//         return words[Math.floor(middle)];
//     }
// }

// console.log(middle("last word")); 
// console.log(middle("Launch School is great!"));
// console.log(middle("Launch"));
// console.log(middle("Launch School is"));
// console.log(middle(" "));
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// function xor(arg1, arg2) {
//     return !arg1 !== !arg2; // ((value1 && !value2) || (value2 && !value1))
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
// function oddities(array) {
//     let newArray = [];
    
//     for (let i = 0; i < array.length; i += 2) {
//         newArray.push(array[i]);
//     }
//     return newArray;
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// function evens(array) {
//     let evenArray = [];
    
//     for (let i = 1; i < array.length; i += 2) {
//         evenArray.push(array[i])
//     }
//     return evenArray;
// }

// console.log(evens([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(evens([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(evens(["abc", "def"])); // logs ['abc']
// console.log(evens([123])); // logs [123]
// console.log(evens([])); // logs []
// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q11
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q12
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------
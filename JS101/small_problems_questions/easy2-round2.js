// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function greetings(arr, obj) {
//   let name = arr.join(' ');
  
//   return `Hello, ${name}! Nice to have a ${obj.title} ${obj.occupation} around.`
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");

// let name = readline.question('What is your name?\n');

// if (name[name.length - 1] === '!') {
//   name = name.slice(0, -1);
//   console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`)
// } else {
//   console.log(`Hello ${name}.`)
// }
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// function multiply(num1, num2) {
//     return num1 * num2;
// }

// let multiply2 = (num1, num2) => num1 * num2;

// console.log(multiply(5, 3) === 15); // logs true
// console.log(multiply2(4, 3) === 15); // logs false
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
// let mutiply = (num1, num2) => num1 * num2;

// function square(num) {
//     return mutiply(num, num)
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
// let multilpy = num1 * num2;
// let divide = Math.floor(num1 / num2);
// let remainder = num1 % num2;
// let power = Math.pow(num1, num2);

// console.log(`${num1} + ${num2} = ${sum}`);
// console.log(`${num1} - ${num2} = ${minus}`);
// console.log(`${num1} * ${num2} = ${multilpy}`);
// console.log(`${num1} / ${num2} = ${divide}`);
// console.log(`${num1} % ${num2} = ${remainder}`);
// console.log(`${num1} ** ${num2} = ${power}`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
// function penultimate(string) {
//     let array = string.split(' ');
    
//     return array[array.length - 2];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// function xor(arg1, arg2) {
//     if ((arg1 && !arg2) || (arg2 && !arg1)) {
//         return true;
//     }
//     return false;
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
    
//     for (let i = 0; i < array.length; i += 1) {
//         if (i % 2 === 0) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []
// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------
// function generateAge(minAge, maxAge) {
//     return Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
// }

// let age = generateAge(20, 120);
// console.log(`Teddy is ${age} years old!`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------
// const readline = require("readline-sync");
// const date = new Date();

// let currentAge = Number(readline.question('What is your age?\n'));
// let retirementAge = Number(readline.question('At what age would you like to retire?\n'));
// let yearsLeft = retirementAge - currentAge;

// let year = date.getFullYear();
// let retirementYear = year + yearsLeft;

// console.log(`It's ${year}. You will retire in ${retirementYear}.`);
// console.log(`You have only ${yearsLeft} years of work to go!`);
// ----------------------------------------------------------------------------------------------------------------------------

// Q11
// ----------------------------------------------------------------------------------------------------------------------------
// function centerOf(str) {
//     let middleIndex = Math.floor(str.length / 2);
    
//     if (str.length % 2 === 1) {
//         return str[middleIndex];
//     } else {
//         return str[middleIndex - 1] + str[middleIndex];
//     }
// }


// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"
// ----------------------------------------------------------------------------------------------------------------------------

// Q12
// ----------------------------------------------------------------------------------------------------------------------------
// function negative(number) {
//     return -Math.abs(number);
// }

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0
// ----------------------------------------------------------------------------------------------------------------------------
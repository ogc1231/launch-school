// Q1
// let advice = "Few things in life are as important as house training your important pet dinosaur.";
// let newAdvice = advice.replace('important', 'urgent');
// let newNewAdvice = advice.replaceAll('important', 'urgent');
// console.log(newAdvice);
// console.log(newNewAdvice);

// Q2
// let numbers = [1, 2, 3, 4, 5];
// let numbersReversed = numbers.slice().reverse();
// console.log(numbers);
// console.log(numbersReversed);

// let numbers2 = [1, 2, 3, 4, 5];
// let numbersReversed2 = [...numbers2].reverse();
// console.log(numbers2);
// console.log(numbersReversed2);

let numbers3 = [1, 2, 3, 4, 5];
let numbersReversed3 = [];

numbers3.forEach((number) => numbersReversed3.unshift(number));

console.log(numbers3);
console.log(numbersReversed3);

// Q3
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// Q4
// let famousWords = "seven years ago...";
// let newFamousWords1 = "Four score and " + famousWords;
// let newFamousWords2 = "Four score and ".concat(famousWords);
// console.log(newFamousWords1);
// console.log(newFamousWords2);

// Q5
// let array = [1, 2, 3, 4, 5];
// array.splice(2, 1);
// console.log(array);

// Q6

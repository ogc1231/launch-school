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

// let numbers3 = [1, 2, 3, 4, 5];
// let numbersReversed3 = [];

// numbers3.forEach((number) => numbersReversed3.unshift(number));

// console.log(numbers3);
// console.log(numbersReversed3);

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
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// flintstones = [].concat(...flintstones);

// console.log(flintstones);

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// let newFlintstones = [];
// flintstones.forEach(element => {
//     newFlintstones = newFlintstones.concat(element);
// });

// console.log(newFlintstones);

// Q7
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// let arrayBarney = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();
// console.log(arrayBarney);

// Q8
// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// Q9
// const characters = 40;
// let title = "Flintstone Family Members";
// let length = title.length;

// let padding = Math.floor((characters - length) / 2);

// let titlePadded = title.padStart(padding + length);
// console.log(titlePadded);

// Q10
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";


// console.log(statement1.split('').filter(letter => letter === 't').length);
// console.log(statement2.split('').filter(letter => letter === 't').length);
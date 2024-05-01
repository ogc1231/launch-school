// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function greet(greeting = 'Hello') {
//   console.log(greeting + ', world!');
// }

// greet('Salutations'); // logs: Salutations, world!

// greet();              // logs: undefined, world!
//                       // should log: Hello, world!
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// function greet(greeting = 'Hello', recipient = 'world') {
//   console.log(greeting + ', ' + recipient + '!');
// }

// greet();                                // logs: Hello, world!
// greet('Salutations');                   // logs: Salutations, world!
// greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// function greet() {
//   console.log(`${greeting()}, ${recipient()}!`)
// }

// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }

// greet();
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
// function calculateBMI(height, weight) {
//   let heightInMeters = height / 100;
//   let weightInKilograms = weight;
//   let bmi = weightInKilograms / heightInMeters**2;
  
//   console.log(bmi.toFixed(2));
  
// }

// calculateBMI(180, 80); // "24.69"
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// function catAge(age) {
//   if (age === 0) {
//     return 0;
//   } else if (age === 1) {
//     return 15;
//   } else if (age === 2) {
//     return 15 + 9;
//   } else {
//     return 24 + (age - 2) * 4;
//   }
// }

// console.log(catAge(0)); // 0
// console.log(catAge(1)); // 15
// console.log(catAge(2)); // 24
// console.log(catAge(3)); // 28
// console.log(catAge(4)); // 32
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
// function removeLastChar(string) {
//   return string.slice(0, -1);
// }

// console.log(removeLastChar('ciao!')); // 'ciao'
// console.log(removeLastChar('hello')); // 'hell'
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// const template = 'I VERB NOUN.';

// // function sentence(verb, noun) {
// //   return template
// //     .replace('VERB', verb)
// //     .replace('NOUN', noun);
// // }

// let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);

// console.log(sentence('like', 'birds'));
// // logs: I like birds.
// ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------
// // let initGame = function () {
// //   return {
// //     level: 1,
// //     score: 0
// //   }
// // };

// let initGame = () => ({level: 1, score: 0});

// let game = initGame();

// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);
// ----------------------------------------------------------------------------------------------------------------------------
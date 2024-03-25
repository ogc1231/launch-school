// 1
// function greet(greeting = 'Hello') {
//   console.log(greeting + ', world!');
// }

// greet('Salutations');

// greet();

// 2
// function greet(greeting = 'Hello', recipient = 'world') {
//   console.log(`${greeting}, ${recipient}!`);
// }

// greet();                            
// greet('Salutations');                  
// greet('Good morning', 'Launch School');

// 3
// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }

// function greet() {
//   console.log(`${greeting()}, ${recipient()}!`);
// }

// greet()

// 4
// function calculateBMI(heightInCentimeters, weightInKilograms) {
//     let heightInMeters = heightInCentimeters / 100;
//     let bmi = weightInKilograms / heightInMeters**2;
    
//     return bmi.toFixed(2)
// }

// console.log(calculateBMI(180, 80));

// 5
// let yearOneCat = 15
// let yearTwoCat = 9
// let otherYears = 4

// function catAge(age) {
//     if (age < 1) {
//         return 0
//     }
//     else if (age === 1) {
//         return yearOneCat
//     }
//     else if (age === 2) {
//         return yearOneCat + yearTwoCat
//     }
//     else {
//         return yearOneCat + yearTwoCat + ((age - 2) * 4)
//     }
// }

// console.log(catAge(0)); // 0
// console.log(catAge(1)); // 15
// console.log(catAge(2)); // 24
// console.log(catAge(3)); // 28
// console.log(catAge(4)); // 32

// function catAge(age) {
//     switch(age) {
//         case 0:
//             return 0
//         case 1:
//             return 15
//         case 2:
//             return 24
//         default:
//             return 24 + (age - 2) * 4
//     }
// }

// console.log(catAge(0)); // 0
// console.log(catAge(1)); // 15
// console.log(catAge(2)); // 24
// console.log(catAge(3)); // 28
// console.log(catAge(4)); // 32

// 6
// function removeLastChar(string) {
//     console.log(string.slice(0, -1))
// }

// removeLastChar('ciao!'); // 'ciao'
// removeLastChar('hello'); // 'hell

// 7
// const template = 'I VERB NOUN.';

// let sentence = (verb, noun) => template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);

// console.log(sentence('like', 'birds'));

// 8
// let initGame = () => ({ level: 1, score: 0 });

// let game = initGame();


// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);
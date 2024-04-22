// Q1
// function isOdd(number) {
//     return Math.abs(number) % 2 === 1
// }

// console.log(isOdd(2));
// console.log(isOdd(5));
// console.log(isOdd(-17));
// console.log(isOdd(-8));
// console.log(isOdd(0));
// console.log(isOdd(7));

// Q2

// for (let i = 1; i < 100; i += 2) {
//     console.log(i)
// }

// for (let i = 1; i < 100; i += 1) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }


// Q3
// for (let i = 1; i < 100; i += 1) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i);
// }

// Q4
// const readline = require('readline-sync');
// const SQUARE_METER_IN_FEET = 10.7639

// let operation = readline.question("Are your measuremnents in meters or Feet?\nMeters or Feet ");

// while (!['Meters'.toLocaleLowerCase(), 'Feet'.toLowerCase()].includes(operation)) {
//   console.log('Must choose Meters or Feet');
//   operation = readline.question();
// }

// let length = readline.question(`Enter the length of the room in ${operation}: `);
// length = parseInt(length);

// let width = readline.question(`Enter the width of the room  ${operation}: `);
// width = parseInt(width);

// let areaMeters = length * width
// let areaFeet = (areaMeters) * SQUARE_METER_IN_FEET

// if (operation === 'Meters'.toLowerCase()) {
//     console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters or ${areaFeet.toFixed(2)} square feet`)
// } else {
//     console.log(`The area of the room is ${areaFeet.toFixed(2)} square feet or ${areaMeters.toFixed(2)} square meters`)
// }
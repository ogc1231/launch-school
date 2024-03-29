// 1
// function isOdd(num) {
//     return Math.abs(num) % 2 === 1 ? true : false
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// 2
// for (let i = 1; i <= 99; i += 2) {
//     console.log(i);
// }

// let i = -1;
// while (i < 99) {
//     console.log(i += 2);
// }

// 3
// for (let i = 2; i <=99; i += 2) {
//     console.log(i);
// }

// for (let i = 1; i <= 99; i += 1) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i)
// }

// 4
let readlineSync = require("readline-sync");
const ONE_METER_SQUARED_IN_FEET = 10.7639

console.log("Enter the length of the room in meters: ")
let length = parseInt(readlineSync.prompt())

console.log("Enter the width of the room in meters: ")
let width = parseInt(readlineSync.prompt())

let areaMeters = length * width
let areaFeet = (length * ONE_METER_SQUARED_IN_FEET) * (width * ONE_METER_SQUARED_IN_FEET)
    
console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`)

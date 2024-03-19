// 1
// let rlSync = require('readline-sync');

// let age = Number(rlSync.question(`How old are you? `));

// console.log(`You are ${age} years old.`);

// for(let i = 10; i <= 70; i +=10){
//     console.log(`In ${i} years, you will be ${age + i} years old.`)
// }

// 2
// function factorial(number) {
//     let result = 1;
//     for(let  i = number; i > 0; i -= 1) {
//         result *= i;
//     }
//     return result
// }
// console.log(factorial(1));  
// console.log(factorial(2));   
// console.log(factorial(3));    
// console.log(factorial(4));    
// console.log(factorial(5));    
// console.log(factorial(6));    
// console.log(factorial(7));    
// console.log(factorial(8));
// console.log(factorial(9));

// 3 
// counter keeps being reasigned to one and never reaching the break

// 4
// no because the increment is still added to the i value but inside the console log

// 5 
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

 do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// 6
function factorial(num) {
    if (num === 1) {
        return 1
    }
    
    return num * factorial(num - 1)
}


console.log(factorial(1));  
console.log(factorial(2));   
console.log(factorial(3));    
console.log(factorial(4));    
console.log(factorial(5));    
console.log(factorial(6));    
console.log(factorial(7));    
console.log(factorial(8));
console.log(factorial(9));
  
// 3
function multiply(firstNum, secondNum) {
    return firstNum * secondNum
}

function getNum(prompt) {
    let rlSync = require('readline-sync');
    let num = rlSync.question(prompt)
    return Number(num)
}

let firstNum = getNum(`Enter the first number: `)
let secondNum = getNum(`Enter the second number: `)

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`)

// 4
// undefined

// 5
// returns Yipeee!!!! but doesn't log to console

// 6
// 2, 3, 4
// let result = num1 * num2 * num3 and return result;
// multiplyNumbers(2, 3, 4)
/* function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}
*/
// multiplyNumbers
// num1, num2, num3
// result or 24
// multiplyNumbers, num1, num2, num3, result, and product

// 7
// hello, undefined

// 8
// 42, 3.1415

// 9
// line 1 = multiply, left, right
// line 2 = product, left, right
// line 3 = product
// line 5 = getNumber, prompt
// line 6 = pareseFloat, question, prompt
// line 8 = left, getNumber
// line 10 = right, getNumber
// line 11 = left, right, mutliply, console

// 10
// local = left, right, prompt, product
// global = left, right, parseFloat, question, mutltiply, console, getNumber

// 11
// line 1 are local and those on 8 and 10 are global variables
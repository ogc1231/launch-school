// Question 1
// 4
// 5
// 0
// 3
// 101

// 2
// let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// for(let i = 0; i < myArray.length; i++) {
//     let value = myArray[i];
//     if(value % 2 === 0) {
//         console.log(value)
//     }
// }         

// myArray.forEach(function(value) {
//   if (value % 2 === 0) {
//     console.log(value);
//   }
// });

// 3
// let myArray2 = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// for (let i = 0; i < myArray2.length; i += 1) {
//   for (let j = 0; j < myArray2[i].length; j += 1) {
//     let value = myArray2[i][j];
//     if (value % 2 === 0) {
//       console.log(value);
//     }
//   }
// }

// myArray2.forEach(function(nestedArray) {
//     nestedArray.forEach(function(value) {
//         if(value % 2 === 0) {
//             console.log(value)
//         }
//     })
// })

// 4
// let myArray3 = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let newArray = myArray3.map(function(value) {
//     if(value % 2 === 0) {
//         return "even"
//     }
//     else {
//         return "odd"
//     }
// })

// console.log(newArray)

// 5
// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

// function findIntegers(array) {
//     return array.filter(function(element) {
//         return Number.isInteger(element);
//     })
// }

// let integers = findIntegers(things);
// console.log(integers);

// 6

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// function oddLengths(arr) {
//     let length = arr.map((value) => value.length)
//     return length.filter(function(value2) {
//         if (value2 % 2 !== 0) {
//             return value2
//         }
//     })
// }

// console.log(oddLengths(arr));

// 7
// let array = [3, 5, 7];

// function sumOfSquares(array) {
//   return array.reduce((sum, value) => {
//       return sum + value * value
//     }, 0)
// }

// console.log(sumOfSquares(array)); // => 83

// 8

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// function oddLengths(arr) {
    
//     return arr.reduce((sum, value) => {
//         let value2 = value.length
//         if (value2 % 2 !== 0) {
//             sum.push(value2)
//         }
//         return sum
//     }, [])
// }

// console.log(oddLengths(arr)); // => [1, 5, 3]

// 9
// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// console.log(numbers1.includes(3))
// console.log(numbers2.includes(3))
// console.log(numbers3.includes(3))

// 10
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606

console.log(arr)
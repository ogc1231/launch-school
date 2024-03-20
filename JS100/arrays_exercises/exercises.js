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
let myArray3 = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = myArray3.map(function(value) {
    if(value % 2 === 0) {
        return "even"
    }
    else {
        return "odd"
    }
})

console.log(newArray)

// 5

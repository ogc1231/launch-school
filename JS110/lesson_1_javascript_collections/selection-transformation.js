// function selectFruit(produceObj) {
//   let produceKeys = Object.keys(produceObj);
//   let selectedFruit = {};
  
//   for (let i = 0; i <= produceKeys.length; i += 1) {
//     let currentKey = produceKeys[i];
//     let currentValue = produceObj[currentKey];
    
//     if (currentValue === 'Fruit') {
//       selectedFruit[currentKey] = currentValue;
//     }
//   }
//   return selectedFruit;
// }

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

// // With Mutation
// function doubleNumbers(numArray) {
//   for (let i = 0; i < numArray.length; i += 1) {
//     numArray[i] = numArray[i] * 2;
//   }
//   return numArray;
// }


// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]

// // Without Mutation
// function doubleNumbers(numArray) {
//   let newArray = [];
  
//   for (let i = 0; i < numArray.length; i += 1) {
//     newArray.push(numArray[i] * 2);
//   }
//   return newArray;
// }


// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]


// function doubleOddIndicies(array) {
//   let newArray = [];
  
//   for (let i = 0; i < array.length; i += 1) {
//     let currentIndex = array[i];
    
//     if (i % 2 === 1) {
//       newArray.push(currentIndex * 2);
//     } else {
//       newArray.push(currentIndex);
//     }
//   }
//   return newArray;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleOddIndicies(myNumbers));  // => [ 1, 8, 3, 14, 2, 12 ]

// // not mutated
// console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]


// function multiply(arr, mutipler) {
//   let newArr = [];
  
//   for (let i = 0; i < arr.length; i += 1) {
//     let currentNum = arr[i];
//     newArr.push(currentNum * mutipler);
//   }
//   return newArr;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
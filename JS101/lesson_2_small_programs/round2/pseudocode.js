// 1
// # a function that returns the sum of two numbers 
// create sum function which takes two arguments
// within in the function return the sum of the two numbers
// call function which logs result to console

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(2,3));

// 2
// # a function that takes an array of strings, and returns a string that is all those strings concatenated together
// create toString function which array as an argument
// return the array joined at at one space
// call function

// function toString(array) {
//   return array.join(' ');
// }

// console.log(toString(['You', 'are', 'a', 'dog!']));

// 3
// # a method that takes an array of integers, and returns a new array with every other element from the original array,
// starting with the first element.
// create function called everyOther which takes an array as an argument
// within function SET newARR to an empty array
// iterate through the orginal arr
// if current number reamined two equals zero, push to newArr
// outside of loop return newArr
// call everyOther function

// function everyOther(arr) {
//   let newArr = [];
  
//   for (let i = 0; i < arr.length; i += 1) {
//     if (i % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(everyOther([1,4,7,2,5])); // => [1,7,5]

// 4
// # a function that determines the index of the 3rd occurrence of a given
// character in a string. For instance, if the given character is 'x' and the
// string is 'axbxcdxex', the function should return 6
// (the index of the 3rd 'x'). If the given character does not occur at least 3
// times, return null.
// create function index whicht takes a string, postion and char as arguements
// SET index to zero
// iterate thourgh postion
// if index doesn't equal -1 

// function index(string, nth, char) {
//   let index = 0
  
//   for (let i = 0; i < nth; i += 1) {
//     if (index !== -1) {
//       index = string.indexOf(char, index + 1);
//     }
//   }
//   return index
// }

// console.log(index('axbxcdxex', 3, 'x'));

// 5
// # a function that takes two arrays of numbers and returns the result of
// merging the arrays. The elements of the first array should become the
// elements at the even indexes of the returned array, while the elements of
// the second array should become the elements at the odd indexes.
// create function called merge that takes twop arrays as arguements
// SET arr3 to empty array
// iterate through arr1 and push to arr3
// iterate through arr2 and push to arr3 if index in less than the length of arr2
// return & PRINT arr3

// function merge(arr1, arr2) {
//   let arr3 = [];
  
//   for (let i = 0; i < arr1.length; i+= 1) {
//     arr3.push(arr1[i]);
    
//     if (i < arr2.length) {
//       arr3.push(arr2[i]);
//     }
//   }
//   console.log(arr3);
// }

// merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
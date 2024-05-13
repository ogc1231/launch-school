// 1
// # a function that returns the sum of two numbers 
// create sum function which takes two arguments
// within in the function return the sum of the two numbers
// call function which logs result to console

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(2,3));

// 2
// # a function that takes an array of strings, and returns a string that is all those strings concatenated together
// create toString function which array as an argument
// return the array joined at at one space
// call function

function toString(array) {
  return array.join(' ');
}

console.log(toString(['You', 'are', 'a', 'dog!']));

// 3
// # a method that takes an array of integers, and returns a new array with every other element from the original array,
// starting with the first element.
// create function called everyOther which takes an array as an argument
// within function SET newARR to an empty array
// iterate through the orginal arr
// if current number reamined two equals zero, push to newArr
// outside of loop return newArr
// call everyOther function

function everyOther(arr) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(everyOther([1,4,7,2,5])); // => [1,7,5]
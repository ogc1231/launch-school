// Q1 - sorting elements
// array as an argument and returns the same array with all elements sorted in alphabetical order
// ----------------------------------------------------------------------------------------------------------------------------
// function sorting(arr) {
//   return arr.sort();
// }

// console.log(sorting(['a', 'd', 'a', 'b'])); //=> ['a', 'a', 'b', 'd'];
// console.log(sorting(['banana', 'apple', 'pear'])); //=> ['apple', 'banana', 'pear']
// ----------------------------------------------------------------------------------------------------------------------------

// Q2 - sorting elements
// array as an argument and returns the same array with all elements sorted in descending order
// ----------------------------------------------------------------------------------------------------------------------------
// function sorting(arr) {
//   return arr.sort(function(a, b){return b - a});
// }

// console.log(sorting([3,5,1,2,11,456])); //=> [456,11,5,3,2,1];
// ----------------------------------------------------------------------------------------------------------------------------

// Q3 - sorting elements
// array as an argument and returns the same array with all elements sorted in ascending order
// ----------------------------------------------------------------------------------------------------------------------------
// function sorting(arr) {
//   return arr.sort(function(a, b){return a - b});
// }

// console.log(sorting([3,5,1,2,11,456])); //=> [1,2,3,5,11,456];
// ----------------------------------------------------------------------------------------------------------------------------

// Q4 - sorting elements
// array of strings as an argument and returns the same array with all elements sorted according to length of the string in ascending order
// ----------------------------------------------------------------------------------------------------------------------------
// function sorting(arr) {
//   return arr.sort(function(a, b){return a.length - b.length});
// }

// console.log(sorting(['o', 'hello', 'llo', 'ello','lo' ])); // => ['o', 'lo', 'llo', 'ello', 'hello']
// ----------------------------------------------------------------------------------------------------------------------------

// Q5 - sorting elements
// array of strings as an argument and returns the same array with all elements sorted according to length of the string in descending order
// ----------------------------------------------------------------------------------------------------------------------------
// function sorting(arr) {
//   return arr.sort(function(a, b){return b.length - a.length});
// }

// console.log(sorting(['o', 'hello', 'llo', 'ello','lo' ])); //=> ['hello', 'ello', 'llo', 'lo', 'o']
// ----------------------------------------------------------------------------------------------------------------------------

// Q6 - sorting elements
// array of strings as an argument and returns the same array with all elements sorted according to length of the string in alphabetical order, case insensitive
// ----------------------------------------------------------------------------------------------------------------------------
// function sorting(arr) {
//     return arr.sort(function(a, b) {
//         // Convert both strings to lowercase for comparison
//         let lowerA = a.toLowerCase();
//         let lowerB = b.toLowerCase();
        
//         // Compare the lowercase versions
//         if (lowerA < lowerB) {
//             return -1;
//         }
//         if (lowerA > lowerB) {
//             return 1; 
//         }
        
//         // If lowercase versions are equal, compare the original strings
//         if (a < b) {
//             return -1;
//         }
//         if (a > b) {
//             return 1;
//         }
        
//         return 0;
//     });
// }

// console.log(sorting(['goo', 'A', 'aB', 'Ab', 'c', 'C'])); // => ['A', 'aB', 'Ab', 'c', 'C', 'goo']
// ----------------------------------------------------------------------------------------------------------------------------

// Q7 - sorting arrays of object by key or value
// takes an array of objects as argument and return the same array with all the elements sorted according to it's value in ascending order
// ----------------------------------------------------------------------------------------------------------------------------
// function sorting(arr) {
//   return arr.sort(function(obj1, obj2){return obj1.a - obj2.a});
// }

// console.log(sorting([{a: 1}, {a: 0}, {a : 3}])); //=> [{a:0}, {a:1}, {a:3}];
// ----------------------------------------------------------------------------------------------------------------------------

// Q8 - sorting arrays of object by key or value
// array of objects as argument and return the same array with all the elements sorted according to it's key in descending order
// ----------------------------------------------------------------------------------------------------------------------------
// function sorting(arr) {
//   arr.sort((obj1, obj2) => {
//   let key1 = Object.keys(obj1)[0];
//   let key2 = Object.keys(obj2)[0];
  
//   return key2 - key1;
// });

// return arr;

// }

// console.log(sorting([{0: 1}, {3: 1}, {1 : 1}])); //[{3:1}, {1:1}, {0:1}]
// ----------------------------------------------------------------------------------------------------------------------------

// Q9 - sorting array elements by sum of the inner array elements
// takes an multidimensional array as an argument and returns the same array sorted according to the sum of elements of inner arrays., in ascending order
// ----------------------------------------------------------------------------------------------------------------------------
// function sorting(arr) {
//   return arr.sort(function(a, b){return a.length - b.length});
// }

// console.log(sorting([[1,2,3], [0,1], [2,1]])); //=> [[0,1], [2,1], [1,2,3]]
// ----------------------------------------------------------------------------------------------------------------------------

// Q10 - sorting array elements by sum of the inner array elements
// takes an multidimensional array as an argument and returns the same array sorted according to the product of elements of inner arrays in descending order
// ----------------------------------------------------------------------------------------------------------------------------
// function sorting(arr) {
//   return arr.sort(function(a, b){return b.length - a.length});
// }

// console.log(sorting([[1,2,3], [0,1], [2,1]])); //=> [[1,2,3], [2,1], [0,1]]
// ----------------------------------------------------------------------------------------------------------------------------

// Q11
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q12
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------
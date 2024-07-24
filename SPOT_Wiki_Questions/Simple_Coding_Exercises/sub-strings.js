// Q1 - creating all leading sub-strings from a string
// takes a string as an argument and returns an array with all leading sub-strings of that string
// ----------------------------------------------------------------------------------------------------------------------------
// function allLeadSubstr(str) {
//   let arr = [];
  
//   for (let i = 1; i <= str.length; i += 1) {
//     arr.push(str.substring(0, i));
//   }
//   return arr;
// }

// console.log(allLeadSubstr('abcd')); // => ['a', 'ab', 'abc', 'abcd'];
// ----------------------------------------------------------------------------------------------------------------------------

// Q2 - creating all leading sub-strings from a string
// takes a string as an argument and returns an array with all leading sub-strings of that string that are 3 letters or longer
// ----------------------------------------------------------------------------------------------------------------------------
// function allLeadSubstr(str) {
//   let arr = [];
  
//   for (let i = 3; i <= str.length; i += 1) {
//     arr.push(str.substring(0, i));
//   }
//   return arr;
// }

// console.log(allLeadSubstr('abcdef')); //=> ['abc', 'abcd', 'abce', 'abcdef'];
// ----------------------------------------------------------------------------------------------------------------------------

// Q3 - creating all leading sub-strings from a string
// takes a string as an argument and returns an array with all leading sub-strings of that string that are shorter than 5 letters, starting from the longest to the shortest
// ----------------------------------------------------------------------------------------------------------------------------
// function allLeadSubstr(str) {
//   let arr = [];
  
//   for (let i = Math.min(str.length, 4); i > 0; i -= 1){
//     arr.push(str.substring(0, i));
//   }
//   return arr;
// }

// console.log(allLeadSubstr('abcdefg')); //=> ['abcd', 'abc', 'ab', 'a'];
// ----------------------------------------------------------------------------------------------------------------------------

// Q4 - creating all sub-string from a string
// takes a string as an argument and returns an array with all the sub-string of given string
// ----------------------------------------------------------------------------------------------------------------------------
// function allSubstr(str) {
//   let arr = [];
  
//   for (let i = 0; i < str.length; i += 1) {
//     for (let j = 1; i + j <= str.length; j += 1) {
//       arr.push(str.substring(i, i + j));
//     }
//   }
//   return arr;
// }

// console.log(allSubstr('abcd')); //=> ['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd']
// ----------------------------------------------------------------------------------------------------------------------------

// Q5 - creating all sub-string from a string
// takes a string as an argument and returns an array with all the sub-string of given string that are longer than 1 letter
// ----------------------------------------------------------------------------------------------------------------------------
// function allSubstr(str) {
//   let arr = [];
  
//   for (let i = 0; i <= str.length; i += 1) {
//     for (let j = 2; i + j <= str.length; j += 1) {
//       arr.push(str.substring(i, i + j));
//     }
//   }
//   return arr;
// }

// console.log(allSubstr('abcd'));//=> ['ab', 'abc', 'abcd', 'bc', 'bcd', 'cd'];
// ----------------------------------------------------------------------------------------------------------------------------

// Q6 - creating all sub-string from a string
// takes a string as an argument and returns an array with all the sub-string of given string that are exactly 3 letters long
// ----------------------------------------------------------------------------------------------------------------------------
// function allSubstr(str) {
//   let arr = [];
  
//   for (let i = 0; i < str.length - 2; i += 1) {
//     arr.push(str.substring(i, i + 3));
//   }

//   return arr;
// }

// console.log(allSubstr('abcd')); // => ['abc', 'bcd'];
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------
// Q1
// no
// function second return undefined and has an extra semi-colon

// Q2
// { first: [1, 2] }

// Q3
// A
// "one is: one"
// "two is: two"
// "three is: three"

// B
// "one is: one"
// "two is: two"
// "three is: three"

// C
// "one is: two"
// "two is: three"
// "three is: one"

// Q4
// variables - boo, scare, myBoo, halloweenCollection, myBoo, console
// primitives - 'greet', 'scare', 'wish, "Happy Halloween", "Boo", "May all your pumpkins be glowing", 'HAPPY HALLOWEEN', 'HAPPY HALLOWEEN!!!'
// objects - boo, halloweenCollection, log, toUpperCase, console

// Q5
// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   if (dotSeparatedWords.length !== 4) {
//     return false;
//   }

//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       return false;
//     }
//   }

//   return true;
// }

// function isAnIpNumber(str) {
//   if (/^\d+$/.test(str)) {
//     let number = Number(str);
//     return number >= 0 && number <= 255;
//   }

//   return false;
// }

// console.log(isDotSeparatedIpAddress("37.228.231.173"))
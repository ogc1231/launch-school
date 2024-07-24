// Q1 letters/characters in a string
// ----------------------------------------------------------------------------------------------------------------------------
// function countOccurencies(str) {
//   let obj = {};
  
//   for (let i = 0; i < str.length; i += 1) {
//     // obj[str[i]] = ((obj[str[i]]) ? obj[str[i]] : 0) + 1;
//     let char = str[i];
    
//     if (obj[char]) {
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     };
//   }
//   return obj;
// }

// console.log(countOccurencies('abbab')); // {a:2, b:3}
// console.log(countOccurencies('aggkkk')); // {a:1, k:3, g:2}
// ----------------------------------------------------------------------------------------------------------------------------

// Q1b letters/characters in a string - Explore more
// ----------------------------------------------------------------------------------------------------------------------------
// function countOccurenciesToString(obj) {
//   let result = '';
  
//   for (const [key, value] of Object.entries(obj)) {
//   result += key.repeat(value);
// }

// // for (let key in obj) {
// //   if (obj.hasOwnProperty(key)) {
// //     for (let i = 0; i < obj[key]; i++) {
// //       result += key;
// //     }
// //   }
// // }

// return result;
// }

// console.log(countOccurenciesToString({a:1, k:3, g:2})) // 'aggkkk'
// console.log(countOccurenciesToString({a:2, b:3})) // 'aabbb'
// ----------------------------------------------------------------------------------------------------------------------------

// Q2 words in a string
// ----------------------------------------------------------------------------------------------------------------------------
// function countWords(str) {
//   let strArr = str.split(' ');
//   return strArr.length;
// }

// console.log(countWords('hello world')); // => 2
// ----------------------------------------------------------------------------------------------------------------------------

// Q2b words in a string - Explore more
// ----------------------------------------------------------------------------------------------------------------------------
// function countWords(str) {
//   let cleanStr = str.replace(',', '')
//   let strArr = cleanStr.toLowerCase().split(' ');
//   let wordCount = {};
  
//   for (let i = 0; i < strArr.length; i++) {
//   let word = strArr[i];
  
//   if (wordCount[word]) {
//     wordCount[word] += 1;
//   } else {
//     wordCount[word] = 1;
//   }
// }
//   return wordCount;
// }

// console.log(countWords('Hello, hello world')); // {'hello' : 2, 'world' : 1};
// ----------------------------------------------------------------------------------------------------------------------------

// Q3 specific characters in a string
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q4 specific sub-strings in a string or array of strings
// ----------------------------------------------------------------------------------------------------------------------------
// function countSubstr(str1, str2) {
//   let count = 0;
  
//   for (let i = 0; i < str1.length; i += 1) {
//     if (str1.substring(i, str2.length + i) === str2) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(countSubstr('Hello, Hello! How are you doing Mellody?', 'ello' ));// => 3
// ----------------------------------------------------------------------------------------------------------------------------

// Q5 specific elements of an array
// ----------------------------------------------------------------------------------------------------------------------------
// function countEle(arr, element) {
//   let count = 0;
  
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === element) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(countEle(['name', 'year', 'age', 'name'], 'name')); // => 2
// console.log(countEle([1,2,3,4,5,1,2,3,4], 2)); //=> 2
// ----------------------------------------------------------------------------------------------------------------------------

// Q6 duplicates more than once
// ----------------------------------------------------------------------------------------------------------------------------
// function countDuplic(str) {
//   let strArr = str.split(" ");
//   let wordCount = {};
//   let duplicateCount = 0;
  
//   for (let i = 0; i < strArr.length; i += 1) {
//     let word = strArr[i];
    
//     if (wordCount[word]) {
//       wordCount[word] += 1;
//     } else {
//       wordCount[word] = 1;
//     }
//   }
  
//   for (let word in wordCount) {
//     if (wordCount[word] > 1) {
//       duplicateCount += 1;
//     }
//   }
  
//   return duplicateCount;
// }

// console.log(countDuplic('one two one three two')); //=> 2
// console.log(countDuplic('flower cat cat dog flower dog')); //=> 3
// ----------------------------------------------------------------------------------------------------------------------------

// Q6b duplicates excalty twice
// ----------------------------------------------------------------------------------------------------------------------------
// function countDuplic(str) {
//   let count = 0;
//   let wordCount = {};
  
//   for (let i = 0; i < str.length; i += 1) {
//     let word = str[i];
    
//     if (wordCount[word]) {
//       wordCount[word] += 1;
//     } else {
//       wordCount[word] = 1;
//     }
//   }
  
//   for (let word in wordCount) {
//     if (wordCount[word] === 2) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(countDuplic('123123')); //=> 3
// console.log(countDuplic('abcdea ab')); //=> 1
// ----------------------------------------------------------------------------------------------------------------------------

// Q7 pairs in an array
// ----------------------------------------------------------------------------------------------------------------------------
// function appearTwice(arr) {
//   let newArr = [];
//   let elementCount = {}
  
//   for (let i = 0; i < arr.length; i += 1) {
//     let element = arr[i];
    
//     if (elementCount[element]) {
//       elementCount[element] += 1;
//     } else {
//       elementCount[element] = 1;
//     }
//   }
  
//   for (let element in elementCount) {
//     if (elementCount[element] === 2) {
//       newArr.push(element);
//     }
//   }
  
//   return newArr;
// }

// console.log(appearTwice([1, 2, undefined, 'hello', 2, undefined])); //=> [2, undefined];
// ----------------------------------------------------------------------------------------------------------------------------

// Q11
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q12
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------
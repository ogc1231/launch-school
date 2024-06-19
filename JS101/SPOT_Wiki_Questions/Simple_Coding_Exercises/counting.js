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

// Q5 specific elements of an array (proably not the best approach)
// ----------------------------------------------------------------------------------------------------------------------------
// function countEle(arr, str) {
//   let count = 0;
  
//   if (typeof str == String) {
//     let arrString = arr.join(" ");
    
//     for (let i = 0; i < arrString.length; i += 1) {
//       if (arrString.substring(i, str.length + i) === str) {
//         count += 1;
//       }
//     }
//     return count;
//   } else {
//     for (let i = 0; i < arr.length; i += 1) {
//       if (arr[i] === str) {
//         count += 1;
//       }
//     }
//     return count;
//   }
// }

// console.log(countEle(['name', 'year', 'age', 'name'], 'name')); // => 2
// console.log(countEle([1,2,3,4,5,1,2,3,4], 2)); //=> 2
// ----------------------------------------------------------------------------------------------------------------------------

// Q6 
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q11
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------

// Q12
// ----------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------
// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function dms(number) {
//   let degree = Math.floor(number);
//   let minute = Math.floor((number % 1) * 60);
//   let second = Math.floor(((((number % 1) * 60) % 1) * 60));
  
//   console.log(`${degree}˚${padZero(minute)}'${padZero(second)}"`);
// }

// function padZero(number) {
//   let numString = String(number);
  
//   if (numString.length < 2) {
//     return '0' + numString;
//   } else {
//     return numString;
//   }
// }

// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// function union(array1, array2) {
//     let mergedArray = [...array1, ...array2];
//     let unionArray = [...new Set(mergedArray)];
    
//     return unionArray;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// function halvsies(array) {
//     let half = Math.ceil(array.length / 2);
//     let array1 = array.slice(0, half);
//     let array2 = array.slice(half);
    
//     let array3 = [];
    
//     array3.push(array1, array2);
    
//     console.log(array3);
// }

// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
// function findDup(array) {
//     for (let i = 0; i < array.length; i += 1) {
//         if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
//             console.log(array[i])
//             break;
//         }
//     }
// }    

// findDup([1, 5, 3, 1]);                                // 1
// findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// function interleave(array1, array2) {
//     let newArray = [];
    
//     for (let i = 0; i < array1.length; i += 1) {
//         newArray.push(array1[i], array2[i]);
//     }
//     console.log(newArray);
// }

// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
// function multiplicativeAverage(array) {
//     let sum = 1;
    
//     for (let i = 0; i < array.length; i += 1) {
//         sum *= array[i];
//     }
//     console.log((sum / array.length).toFixed(3));
// }

// multiplicativeAverage([3, 5]);                   // "7.500"
// multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// function multiplyList(arr1, arr2) {
//     let newArr = [];
    
//     for (let i = 0; i < arr1.length; i += 1) {
//         newArr.push(arr1[i] * arr2[i]);
//     }
//     console.log(newArr);
// }
// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
// ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------
// function digitList(number) {
//     let stringArr = number.toString().split('');
//     let newArr = [];
    
//     for (let i = 0; i < stringArr.length; i += 1) {
//         newArr.push(parseInt(stringArr[i], 10));
//     }
    
//     console.log(newArr);
// }

// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

// function digitList(number) {
//     console.log([...String(number)].map(Number));
// }

// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]
// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------
// function countOccurrences(array) {
//     let count = {};
    
//     for (let i = 0; i < array.length; i += 1) {
//         let element = array[i].toLowerCase();
        
//         if (count[element]) {
//             count[element] += 1;
//         } else {
//             count[element] = 1;
//         }
//     }
//     console.log(count);
// }

// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// // console output -- your output sequence may be different
// // car => 4
// // truck => 3
// // SUV => 1
// // motorcycle => 2
// // suv => 1
// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------
// function average(array) {
//     let sum = 1;
    
//     for (let i = 0; i < array.length; i += 1) {
//         sum += array[i];
//     }
//     console.log(Math.floor(sum / array.length));
// }

// average([1, 5, 87, 45, 8, 8]);       // 25
// average([9, 47, 23, 95, 16, 52]);    // 40
// ----------------------------------------------------------------------------------------------------------------------------

// Q11
// ----------------------------------------------------------------------------------------------------------------------------
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_HOUR = 60;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function leadingZero(number) {
//     return number < 10 ? `0${number}` : String(number);
// }

// function formatTime(hours, minutes) {
//     return `${leadingZero(hours)}:${leadingZero(minutes)}`;
// }

// function timeOfDay(numberTime) {
//     if (numberTime < 0) {
//         numberTime = (numberTime % MINUTES_PER_DAY) + MINUTES_PER_DAY;
//     } else {
//         numberTime = numberTime % MINUTES_PER_DAY;
//     }
    
//     let hours = Math.floor(numberTime / MINUTES_PER_HOUR);
//     let minutes = numberTime % MINUTES_PER_HOUR;
    
//     return formatTime(hours, minutes);
// }

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");
// ----------------------------------------------------------------------------------------------------------------------------

// Q12
// ----------------------------------------------------------------------------------------------------------------------------
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_HOUR = 60;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   let [hours, minutes] = timeStr.split(":").map(num => Number(num));
//   return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
// }

// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }
//   return deltaMinutes;
// }

// console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
// console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
// console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);
// ----------------------------------------------------------------------------------------------------------------------------
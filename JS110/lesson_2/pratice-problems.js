// ---------------------------------------- 1
// let arr = ['10', '11', '9', '7', '8'];
// console.log(arr.sort((a, b) => b - a));

// ---------------------------------------- 2
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// console.log(books.sort((a, b) => {
//   return Number(a.published) - Number(b.published);
// }));

// ---------------------------------------- 3
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3]);

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1]['third'][0]);

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2]['third'][0][0]);

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1['b'][1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// console.log(Object.keys(obj2.third)[0]);

// ---------------------------------------- 4
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// console.log(arr1);

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// console.log(arr2);

// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4;
// console.log(obj1);

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4;
// console.log(obj2);

// ---------------------------------------- 5
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// let totalMaleAge = 0;

// for (let member in munsters) {
//   if (munsters[member]['gender'] === 'male') {
//     totalMaleAge += munsters[member]['age'];
//   }
// }

// console.log(totalMaleAge);

// OR

// let memberInfo = Object.values(munsters);
// let totalMaleAge = 0;

// memberInfo.forEach(member => {
//   if (member.gender === 'male') {
//     totalMaleAge += member.age;
//   }
// })

// console.log(totalMaleAge);

// ---------------------------------------- 6
// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// let munstersArr = Object.entries(munsters);

// munstersArr.forEach(data => {
//   let name = data[0];
//   let age = data[1].age;
//   let gender = data[1].gender;
  
//   console.log(`${name} is a ${age}-year-old ${gender}.`)
// });

// ---------------------------------------- 7
// let a = 2;
// let b = [5, 8];
// let arr = [a, b]; // [2, [5, 8]]

// arr[0] += 2; // 4
// arr[1][0] -= a; // [3, 8]

// console.log(a); // => 2
// console.log(b); // => [3, 8]
// console.log(arr); // => [4, [3, 8]];

// ---------------------------------------- 8
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// let vowels = 'aeiouAEIOU';

// let objValues = Object.values(obj);

// objValues.forEach(arr => {
//   arr.forEach(word => {
//     word.split('').forEach (char => {
//       if (vowels.includes(char)) {
//         console.log(char);
//       }
//     });
//   });
// });

// ---------------------------------------- 9
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// console.log(arr.map(subArr => {
//     if (typeof subArr[0] === 'string') {
//         return subArr.slice().sort();
//     } else {
//         return subArr.slice().sort((a, b) => a - b);
//     }
// }));

// ---------------------------------------- 10
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// console.log(arr.map(subArr => {
//     if (typeof subArr[0] === 'string') {
//         return subArr.slice().sort().reverse();
//     } else {
//         return subArr.slice().sort((a, b) => b - a);
//     }
// }));

// ---------------------------------------- 11
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// console.log(arr.map(obj => {
//     let newObject = {};
    
//     for (let key in obj) {
//         newObject[key] = obj[key] + 1;
//     }
    
//     return newObject;
// }));

// console.log(arr);

// ---------------------------------------- 12
// const arr = [
//   ['b', 'c', 'a'],
//   ['blue', 'black', 'green'],
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let deepArr = JSON.parse(JSON.stringify(arr));

// deepArr.push('foo')
// deepArr[0].push('w')
// deepArr[2]['d'].push(25)

// console.log(arr);
// console.log(deepArr);

// ---------------------------------------- 13
// const truthiness = {
//   falsy: [ null, undefined, '', false, NaN, 0 ],
//   truthy: ['everything else...']
// };

// const deepCopy = {};

// for (let prop in truthiness) {
//     deepCopy[prop] = [...truthiness[prop]]
// }

// console.log(truthiness);
// console.log(deepCopy);

// ---------------------------------------- 14
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// console.log(arr.map(subArr => {
//     return subArr.filter(num => num % 3 === 0);
// }));

// ---------------------------------------- 15
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// console.log(arr.sort((a, b) => {
//     let sumA = a.filter(num => num % 2 === 1)
//                 .reduce((sum, current) => sum + current);
//     let sumB = b.filter(num => num % 2 === 1)
//                 .reduce((sum, current) => sum + current);
                
//     return sumA - sumB;
// }));

// ---------------------------------------- 16
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let values = Object.values(obj);

// console.log(values.map(attributes => {
//     if (attributes['type'] === 'fruit') {
//         return attributes['colors'].map(word => word[0].toUpperCase() + word.slice(1));
//     } else {
//         return attributes['size'].toUpperCase();
//     }
// }));

// ---------------------------------------- 17
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// console.log(arr.filter(obj => {
//     return Object.values(obj).every(subArr => {
//         return subArr.every(num => num % 2 === 0);
//     });
// }));
// ---------------------------------------- 18
// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// let obj = Object.fromEntries(arr);

// console.log(obj);
// ---------------------------------------- 19
// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// let deepCopy = JSON.parse(JSON.stringify(munsters), (munster, info) => Object.freeze(info));

// deepCopy.herman.age += 1;
// deepCopy.baby = { age: 0, gender: 'male'};

// console.log(munsters);
// console.log(deepCopy);

// ---------------------------------------- 20
// function createUUID() {
//     let characters = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let sections = [8, 4, 4, 4, 12];
//     let uuid = '';
    
//     sections.forEach((section, sectionIndex) => {
//         for (let index = 1; index <= section; index++) {
//             let randomIndex = Math.floor(Math.random() * characters.length);
//             uuid += characters[randomIndex];
//         }

//         if (sectionIndex < sections.length - 1) {
//             uuid += '-';
//         }
//     });
//   return uuid;
// }

// console.log(createUUID());
// console.log(createUUID());
// console.log(createUUID());

// ---------------------------------------- 21
function scream(message, helper) {
  const shout = () => message.toUpperCase();

  return helper(shout());
}

const exclamate = str => str + "!!!";

const foo = ["heLp", "Boo", "arGH", "Oh no"];
const FOO = foo.map(word => scream(word, exclamate));

// higher-order functions
// scream, map

// callbacks
// exclamate, word => scream(word, exclamate
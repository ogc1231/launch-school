// // 1
// let arr = ['10', '11', '9', '7', '8'];
// console.log(arr.sort((a, b) => b - a));

// // 2
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

// // 3
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

// // 4
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

// // 5
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

// // 6
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

// // 7
// let a = 2;
// let b = [5, 8];
// let arr = [a, b]; // [2, [5, 8]]

// arr[0] += 2; // 4
// arr[1][0] -= a; // [3, 8]

// console.log(a); // => 2
// console.log(b); // => [3, 8]
// console.log(arr); // => [4, [3, 8]];

// // 8
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
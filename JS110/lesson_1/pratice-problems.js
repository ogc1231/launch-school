// Q8
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// let flintstonesObject = {};

// flintstones.forEach((name, i) => {
//   flintstonesObject[name] = i;
// })

// console.log(flintstonesObject);
// // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// Q9
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };


// let totalAge = 0;
// let ageArr = Object.values(ages).forEach(age => totalAge += age);
// console.log(totalAge);

// // Q10

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let ageArr = Object.values(ages);
// console.log(Math.min(...ageArr));

// // Q11

// let statement = "The Flintstones Rock";
// let stringArr = statement.split('').filter(char => char !== ' ');

// let frequency = {};

// stringArr.forEach(char => {
//   frequency[char] = frequency[char] || 0;
//   frequency[char] += 1;
// });

// console.log(frequency); // => { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
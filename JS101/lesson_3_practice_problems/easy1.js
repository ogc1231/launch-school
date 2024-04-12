// Q1.1
// no but will add empty items to indexes 3,4 and 5
// returns [1, 2, 3, <3 empty items>, 5]

// Q1.2
// returns undefined but is an empty item

// Q2
// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// function containsExclamation(string) {
//   let result = string.includes('!');
//   return result
// }

// console.log(containsExclamation(str1));
// console.log(containsExclamation(str2));


// console.log(str1.endsWith('!'));
// console.log(str2.endsWith('!'));

// Q3
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// let hasSpot = ages.hasOwnProperty('Spot')
// console.log(hasSpot)

// Q4
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// let newDescription = munstersDescription.charAt(0).toUpperCase() + munstersDescription.slice(1).toLowerCase()
// console.log(newDescription)

// Q5
// true, false is coerced to the number 0 and the string "0" is coerced to the hnumber 0
// false

// Q6
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// let allAges = {...ages, ...additionalAges};
// console.log(allAges);

// console.log(Object.assign(ages, additionalAges));

// Q7
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

// Q8
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino")
// console.log(flintstones)

// Q9
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino", "Hoppy");
// console.log(flintstones)

// Q10
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// let newAdvice = advice.slice(advice.indexOf('Few'), advice.indexOf('house'));
// console.log(newAdvice);
// 1
// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };

// console.log(student.courses)
// console.log(student['courses'])
// undefined

// 2
// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
// };

// console.log(jane.location.country)
// console.log(jane['location']['country'])

// 3
// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };

// // Add property 'age'.
// // Add property 'favorite food'.
// fido.age = 2
// fido['favorite food'] = 'pasta'

// console.log(fido)

// 4
// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   greet: function(name) {
//       console.log(`Hej, ${name}!`);
//   }
// };

// jane.greet('Bobby'); // Hej, Bobby!

// 5
// { prefix: 'Pacific' }
// { Indian: 'Pacific' }

// 6
// let obj = {
//   num: 42,
//   'property name': 'string value',
//   true: false,
//   fun: function() {
//     console.log('Harr Harr!');
//   },
// };

// for (let prop in obj) {
//   if (prop === true) {
//     console.log("It's true!");
//   }
// }
// is compare prop ro boolean true not the key-value true

// 7
// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };

// let keys = Object.keys(vehicle)

// console.log(keys)

// 8
// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// let nestedPerson = Object.entries(person)
// console.log(nestedPerson)

// 9
// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// let newArray = Object.fromEntries(nestedArray)

// console.log(newArray)


// 10
// function clone(obj) {
//   return Object.assign({}, obj)
// }

// let person = {
//   title: 'Duke',
//   name: {
//     value: 'Nukem',
//     isStageName: true
//   },
//   age: 33
// };

// let clonedPerson = clone(person);
// person.age = 34;

// console.log(person.age);      
// console.log(clonedPerson.age); 

// person.name.isStageName = false;
// console.log(person.name.isStageName);   
// console.log(clonedPerson.name.isStageName); 
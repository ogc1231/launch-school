// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };

// console.log(student.courses);
// console.log(student['courses']);
// console.log(student.locker); // undefined
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
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

// console.log(jane.location.country);
// console.log(jane['location']['country']);
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };

// fido.age = '4';
// fido['favorite food'] = 'bread';

// console.log(fido);
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
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
//     console.log(`Hey, ${name}!`);
//   }
// };

// jane.greet('Bobby'); // Hey, Bobby!
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// snippet1: prefix: 'Pacific'
// snippet2: 'Indian': 'Pacific'
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
// let obj = {
//   num: 42,
//   'property name': 'string value',
//   true: false,
//   fun: function() {
//     console.log('Harr Harr!');
//   },
// };

// for (let prop in obj) {
//   if (prop === 'true') {
//     console.log("It's true!");
//   }
// }

// // won't log anything as properties are string and the prop is comparing against a boolean true, need to chnage true to the string 'true' to log It's true!
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };

// let keys = Object.keys(vehicle);
// console.log(keys);

// let vehicle2= {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };

// let keys2= [];

// for (let prop in vehicle2) {
//     keys2.push(prop);
// }

// console.log(keys2);
// ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------
// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// let nestedPerson = Object.entries(person);
// console.log(nestedPerson);

// let person2 = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// let nestedPerson2 = [];

// for (let prop in person2) {
//   nestedPerson2.push([prop, person2[prop]]);
// }

// console.log(nestedPerson2);
// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// // ----------------------------------------------------------------------------------------------------------------------------
// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// let object = Object.fromEntries(nestedArray);
// console.log(object);

// let nestedArray2 = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// let object2 = {};

// for (let i = 0; i < nestedArray2.length; i += 1) {
//   let pair = nestedArray2[i];
  
//   object2[pair[0]] = pair[1];
// }

// console.log(object2);
// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------
// function clone(obj) {
//   return {...obj};
//   // return Object.assign({}, obj);
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

// console.log(person.age);       // 34
// console.log(clonedPerson.age); // 33

// person.name.isStageName = false;
// console.log(person.name.isStageName);       // false
// console.log(clonedPerson.name.isStageName); // false
// ----------------------------------------------------------------------------------------------------------------------------

// Objects
// logs object keys in array -- Object.keys(object)
// convert object to nestedArray -- Object.entries(object)
// convert nestedArray to object -- Object.fromEntries(nestedArray)
// return shallow copy of object -- return {...obj} or return Object.assign({}, obj)
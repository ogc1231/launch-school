//1
// let person = {
//   name:       'Bob',
//   occupation: 'web developer',
//   hobbies:    'painting',
// };
// console.log(person.name)
// console.log(person['name'])

// 2
// yes
// yes
// yes
// yes
// yes
// yes

// 3
// let myArray = { 0 : 'Sam', 1 : 28, 2 : 'Dublin', length : 3
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// 4
// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let objKeys = Object.keys(obj);
// console.log(objKeys)
// let upperCaseKeys = objKeys.map((key) => key.toUpperCase());
// console.log(upperCaseKeys);
// console.log(obj)

// 5
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj)
console.log(myObj)
console.log(myObj.foo)
console.log(myObj.bar)

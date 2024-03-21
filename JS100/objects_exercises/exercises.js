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
// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj)
// console.log(myObj)
// console.log(myObj.foo)
// console.log(myObj.bar)

// 6
// primitive
// primitive
// object
// primitive
// ?
// object
// primitive
// object

// 7
// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj)

// myObj['qux'] = 3

// no
// 1 iterates only over myObj
// 2 iterates over myProtoObj and myObj

// let objKeys = Object.keys(myObj);
// objKeys.forEach(function(key) {
//   console.log(key);
// });

// for (let key in myObj) {
//   console.log(key);
// }

// for (let key in myObj) {
//   if (myObj.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// 8
// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// function copyObj(sourceObject, keys) {
//   let newObject = {}
  
//   if (keys) {
//     keys.forEach((key) => {
//       newObject[key] = sourceObject[key]
//     })
//     return newObject
//   } 
//   else {
//     return Object.assign(newObject, sourceObject)
//   }
// }
// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// 9
// 'hi' and 'hello'
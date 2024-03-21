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

// 10
// primitive = 1,2,"a","b",false,null
// objects = [1, 2, ["a", ["b", false]], null, {}], ["a", ["b", false]], ["b", false], {}

// 11
// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };

// obj.bar[3].xyz = 606 or obj["bar"][3]["xyz"] = 606;
// obj.bar[4] = 69
// obj.bar[2] = {abc : 96}

// console.log(obj['bar'])

// 12
// function foo(bar) {
//   console.log(bar, bar, bar);
// }

// let bar = foo

// foo("hello"); // should print "hello hello hello"
// bar("hi");    // should print "hi hi hi"

// 13
// function foo(bar) {
//   console.log(bar());
// }

// foo(function() { return "Welcome" });
// foo(function() { return 3.1415 });
// foo(function() { return [1, 2, 3] });

// 14
// variables - hello, greeting, name, xyzzy, howdy, foo
// object property names - a, b, c, d, 0, 1, 2
// primitive values - 'Hi', 'Grace', 1, 2, 3, 4, 5, ' ', a, b, c, d, 0, 1, 2
// objects - { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3, 4, 5], {}, function hello(){} function xyzzy(){}

// 15
//  variables
// - bar, arg1, arg2, foo, qux, result

// object property names
// - abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3

// primitive values
// - 'Hello', 1, 2, 3, 4, 5, 6, null, NaN, abc, def, ghi, jkl, mno, pqr, 'Victor', 'Antonina', 0, 1, 2, 3, 0, 1, 2

//  objects
// - function bar(), [1, 2, 3, [4, 5, 6]], [4, 5, 6], 
// {
//     abc: [1, 2, 3, [4, 5, 6]],
//     def: null,
//     ghi: NaN,
//     jkl: foo,
//     mno: arg1,
//     pqr: arg2,
//   }
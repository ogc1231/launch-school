// 1
console.log("John" + " " + "Doe")

// 2
let num = 4936

let ones = 4936 % 10
console.log(`ones place is ${ones}`)

let num2 = (num - ones) / 10
let tens = num2 % 10
console.log(`tens place is ${tens}`)

let num3 = (num2 - tens) / 10
let hundreds = num3 % 10;
console.log(`hundreds place is ${hundreds}`);

let num4 = (num3 - hundreds) / 10;
let thousands = num4 % 10;
console.log(`thousands place is ${thousands}`);

// 3
String
Boolean
Number
Number
undefined
Object

// 4
// The number 10 is coerced into being a string

// 5
console.log(Number('5') + 10);

// 6
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// 7
// will log undefiend

// 8
let name = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin',];
console.log(name)

// 9
let pets = {asta: 'dog', butterscotch: 'cat', pudding: 'cat', neptune: 'fish', darwin: 'lizard',}
console.log(pets)
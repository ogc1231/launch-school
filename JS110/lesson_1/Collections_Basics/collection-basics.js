// Strings
// let str = 'The grass is green';
// console.log(str.slice(4, 9));

// // if start index is greater than the end index, substring swaps the two arguments while slice returns an empty 
// 'abcdef'.substring(3, 1); // => 'bc'
// 'abcdef'.slice(3, 1);     // => ''

// // if either argument is negative, substring treats them as 0, while slice treats them as length + index
// 'abcdef'.substring(-2); // => 'abcdef'
// 'abcdef'.slice(-2);     // => 'ef'

// // Arrays
// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// console.log(arr.slice(2, 5)[0]);

// // String.prototype.slice // returns new string
// // Array.prototype.slice // returns new array
// // slice without any arguments returns a shallow copy of the original array
// let arr = ['a', 'b', 'c', 'd'];
// let arrCopy = arr.slice();
// arrCopy.push('e')

// console.log(arr); // =>[ 'a', 'b', 'c', 'd' ]
// console.log(arrCopy); // => [ 'a', 'b', 'c', 'd', 'e' ]

// let numbers = [1, 2, 3, 4];
// numbers[0] = numbers[0] + 1;  // => 2
// console.log(numbers); // => [ 2, 2, 3, 4 ]
// numbers[1] = numbers[1] + 1;  // => 3
// console.log(numbers);
// numbers[2] = numbers[2] + 1;  // => 4
// console.log(numbers);
// numbers[3] = numbers[3] + 1;  // => 5
// console.log(numbers);
// numbers[4] = numbers[4] + 1;  // NaN
// console.log(numbers);

let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' };
obj['apple'] = 'Fruit';
obj.carrot = 'Vegetable';
obj['pear'] = 'Fruit';
obj.broccoli = 'Vegetable';
console.log(obj);;
// // String Methods
// // String.prototype.concat

// // String.prototype.includes
// console.log('abcdefbg'.includes('b', 3)); // => true

// // String.prototype.split
// // separates a given string into multiple strings and returns them in the form of an array
// console.log('abcdef'.split()); // => ['abcdef']
// console.log('abcdef'.split('')); //=> ['a', 'b', 'c', 'd', 'e', 'f']

// // String.prototype.trim, trimStart(), trimEnd()
// // removes whitespace from both ends of the string
// console.log('  abcdef   '.trim()); // => 'abcdef'


// // String.prototype.toUpperCase()
// // String.prototype.toLowerCase()

// // String.prototype.charAt
// when using indices for characters that don't exist: charAt returns an empty string
// 'abc'.charAt(5); // ''
// 'abc'.charAt(-5); // ''
// 'abc'[5]; // undefined
// 'abc'[-5]; // undefined

// // String.prototype.charCodeAt
// // returns the Unicode code point or character code
// // if no index given defaults to the zero index
// 'abcdef'.charCodeAt(1); // 98

// // String.fromCharCode => not a prototype method but a static method
// // takes a character code (Unicode code point) and returns the character represented by that character code
// String.fromCharCode(97) // 'a'


// // String.prototype.endsWith()
// 'Cats are the best!'.endsWith('best!'); // true

// // String.prototype.startsWith()
// 'Saturday night plans'.startsWith('Sat'); // true

// // String.prototype.repeat()
// let name = 'sam';
// name.repeat(4); // 'samsamsamsam'
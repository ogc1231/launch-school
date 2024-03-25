// 1
// function first(array) {
//     return array[0]
// }
// console.log(first(['Earth', 'Moon', 'Mars']));
// undefined

// 2
// function last(array) {
//     return array[array.length - 1]
// }

// console.log(last(['Earth', 'Moon', 'Mars']));

// 3
// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// energy.shift()
// energy.push('geothermal')

// console.log(energy)

// 4
// let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// console.log(alphabet.split(''))
// console.log(Array.from(alphabet))

// 5
// let scores = [96, 47, 113, 89, 100, 102];
// let count = 0
// for (let i = 0; i < scores.length; i += 1) {
//     if(scores[i] >= 100) {
//         count += 1
//     }
// }

// console.log(count)

// 6
// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// for (let i = 0; i < vocabulary.length; i += 1) {
//     let words = vocabulary[i]
    
//     for (let j = 0; j < words.length; j += 1) {
//         console.log(words[j])
//     }
// }

// 7
// false, because array they are different arrays

// 8
// let numbers = [0, 1, 23, 93, 87]
// let name = "sam"

// function filter(input) {
//   if (Array.isArray(input)) {
//       console.log('Is an array')
//   }
//   else {
//       console.log('Not an array')
//   }
// }

// filter(numbers)
// filter(name)

// 9
// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];
  
// function contains(input, list) {
//     for (let i = 0; i < list.length; i += 1) {
//         if(destinations[i] === input) {
//             return true
//         }
//     }
//     return false
// }

// console.log(contains('Barcelona', destinations));
// console.log(contains('Nashville', destinations));

// 10
// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];


// let joined = passcode.join('-')

// console.log(joined)

// .join('')

// 11
// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// while (groceryList.length > 0) {
//     let items = groceryList.shift()
    
//     console.log(items)
// }

// console.log(groceryList)
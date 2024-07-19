PEDAC

Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants
a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their
original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word
or if there is a space between two consonants in adjacent word.

P: Understand the Problem
- input: array of strings
- output: new array where the strings are sorted to the highest number of adjacent consonants

- explicit rules
- - If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other
- - Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.
- - 'y' and 'w' should be treated as consonants

- implicit rules
- - Strings can contain multiple words 
- - presence of a single consonant doesn't affect the sort order, only adjacent consonants

- questions
- - Do strings always contain multiple words?
- - Can strings contain a single word? 
- - Can strings be empty? 
- - Is it possible for a string to contain no adjacent consonants? 
- - What is meant by "a space between two consonants in adjacent words"? 
- - Should the strings be sorted in ascending or descending order? 
- - Is case important?
- 

E: Examples and test cases
 
```js
let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1)); // ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2)); // ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3)); // ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4)); // ['month', 'day', 'week', 'year']
```

- strings can be mutiple words
- string with month consonants come first
- when number if consonants is the same is mutiple strings, they sorted alphabetically
- we can asssume case is not important as it is not present
- we assume empty strings are as it is not present
- space between two consonants seems to be a bew the space between two words in the same string
- presence of a single consonant doesn't affect the sort order, only adjacent consonants
- 

D: Data Structures
- input and output are both arrays
- an object my used to hold counts
- 

A: Algorithm
- For each string in the input array, determine the highest number of adjacent consonants within that string
- Sort the input array based on the calculated highest number of consonants from step 1
- Return the sorted array
- 

sub-problem - Given a string, return a count of the highest number of adjacent consonants anywhere in that string.
- Remove the spaces from the input string
- Initialize a count to zero
- Initialize a temporary string to an empty string
- Iterate through the input string. For each letter:
    - If the letter is a consonant:
        - concatenate it to the temporary string
    - If the letter is a vowel:
        - If the temporary string has a length greater than 1
          AND the temporary string length is greater than the
          current count:
            - set the count to the length of the temporary
              string
        - Reset the temporary string to an empty string
- Return the count
- 

C: Code Implementation

```js
function sortStringsByConsonants(strings) {
  let stringsCopy = strings.slice();

  let sortedStrings = stringsCopy.sort((a, b) => {
    return countMaxAdjacentConsonants(b) -
           countMaxAdjacentConsonants(a);
  });

  return sortedStrings;
}

function countMaxAdjacentConsonants(string) {
  string = string.split(' ').join('');
  let count = 0;
  let tempStr = '';
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if ('bcdfghjklmnpqrstvwxyz'.includes(letter)) {
      tempStr += letter;

      if (tempStr.length > 1 && tempStr.length > count) {
        count = tempStr.length;
      }
    } else {
      tempStr = '';
    }
  }

  return count;
}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1)); // ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2)); // ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3)); // ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4)); // ['month', 'day', 'week', 'year']
```
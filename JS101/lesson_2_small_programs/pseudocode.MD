Keyword 	Meaning
START 	start of the program
SET 	set a variable that we can use for later
GET 	retrieve input from user
PRINT 	display output to user
READ 	retrieve a value from a variable
IF/ELSE IF/ELSE 	show conditional branches in logic
WHILE 	show looping logic
END 	end of the program

1)
A function that returns the sum of two numbers
- save number 1 as 3
- save number 2 as 4
- set function sum with two arugment number 1 and number 2
- In the block return number 1 + number 2
- Log value to console
- logged value is 7

START

# A function that returns the sum of two numbers

SET number 1 as 3
SET number 2 as 4

SET function called sum which takes to arugments number1 and number2

READ number1 + number2

PRINT value of sum function

END

2)
a function that takes an array of strings, and returns a 
string that is all those strings concatenated together 

- Create function called concatString
- join elements in array into string usng .join method
- join at enmpty array to sring are joined together
- return joined value
- console log value
- 

START

# a function that takes an array of strings, and returns a 
string that is all those strings concatenated together 

SET function concatString()
SET newString to result of array.join("")
return newString

PRINT newString value

END

3)
a method that takes an array of integers, and returns a new array
with every other element from the original array, starting with
the first element

- create function everyOther()
- return every other element 
- use filter to push elements to array that have index with remainder zero
- return new array
- console log new array

START

# a method that takes an array of integers, and returns a new array
with every other element from the original array, starting with
the first element

SET function everyOther() with argument array
SET newArray = array.filter(number => number.length % 2 === 0)
PRINT newArray

4)
a function that determines the index of the 3rd occurrence of a
given character in a string. For instance, if the given character
is 'x' and the string is 'axbxcdxex', the function should return 6
(the index of the 3rd 'x'). If the given character does not occur
at least 3 times, return null. 

- create function findIndex
- in function block add if/else
- in if string.split('x', 3)
- 'x' is the subStrung wanted
- 3 is the third occurence
- return index
- else return null

START

# a function that determines the index of the 3rd occurrence of a
given character in a string. For instance, if the given character
is 'x' and the string is 'axbxcdxex', the function should return 6
(the index of the 3rd 'x'). If the given character does not occur
at least 3 times, return null. 

SET function findIndex(string, subString, index)

IF return string.split(subString, index).join(subString).length

ELSE return undefined

END

5)
a function that takes two arrays of numbers and returns the result
of merging the arrays. The elements of the first array should
become the elements at the even indexes of the returned array,
while the elements of the second array should become the elements
at the odd indexes.

- creat function called merge with two arguments
- new array which a merge of the two old arrays
- Array1 go at even index poations
- Array2 elements go at odd index postions
- return new array
- log to console
- 

START

# a function that takes two arrays of numbers and returns the result
of merging the arrays. The elements of the first array should
become the elements at the even indexes of the returned array,
while the elements of the second array should become the elements
at the odd indexes.

SET newArray = []

SET function merge(array1, array2)

use forEach on array1 and push to newArray

IF array2.length > i push to newArray

PRINT newArray

END


let newArray = []

function merge(arr1, arr2) {
    arr1.forEach(function(el, i) {
        newArray.push(el)
        if (arr2.length > i ) {
            newArray.push(arr2[i])
        }
    })
    console.log(newArray)
}

merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
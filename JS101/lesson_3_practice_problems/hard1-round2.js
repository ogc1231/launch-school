// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// no, first() returns {prop1: "hi there"} and second() returns undefined as the code is formatt incorrectly and the semicolon in the object
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// { first: [1, 2] }
// use .slice() or .concat() to return new array and not mutate orginal
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// A
// one is: one
// two is: two
// three is: three
// string interpolation coerces the arrays into strings

// B
// one is: one
// two is: two
// three is: three
// string interpolation coerces the arrays into strings

// C
// one is: two
// two is: three
// three is: one
// splice changes the values
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
// variables - boo, scare, myBoo, halloweenCollection, console.
// primitives - greet, scare, wish, "Happy Halloween", "Boo", "May all your pumpkins be glowing"
//            - "greet", "!!!", "Happy Halloween", "HAPPY HALLOWEEN", "HAPPY HALLOWEEN!!!", undefined
// objects - boo, halloweenCollection, log, toUpperCase, 
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length > 4 || dotSeparatedWords.length < 4) {
    return false;
  }
  
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress("10.4.5.11"))
console.log(isDotSeparatedIpAddress("4.5.5"))
console.log(isDotSeparatedIpAddress("1.2.3.4.5"))
console.log(isDotSeparatedIpAddress('ABS'))
console.log(isDotSeparatedIpAddress('123'))
// ----------------------------------------------------------------------------------------------------------------------------
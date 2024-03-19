// 1
// false
// true
// 3
// 3
// false
// true
// false
// false
// false
// true
// false
// true

// 2
function evenOrOdd(num) {
    if(num % 2 === 0) {
        console.log('even');
    }
    else {
       console.log('odd');
    }
}

evenOrOdd(822)

// 3
function evenOrOddTwo(number) {
    if(!Number.isInteger(number)) {
        console.log('Not an integer');
        return;
    }
    
    if(number % 2 === 0) {
        console.log('even');
    }
    else {
       console.log('odd');
    }
}

evenOrOddTwo(21.5);

// 4
// Product2
// Product3
// Product not found!
// Logs all becasues no break

// 5
// if (foo()) {
//     return 'bar';
// }
// else {
//     return qux();
// }

// 6
// Not Empty

// 7
function toCaps(string) {
    if(string.length > 10) {
        return string.toUpperCase()
    }
    else {
        return string
    }
}

console.log(toCaps('hello world'))

// 8
function numberRange(number) {
    if(number >= 0 && number < 51) {
        console.log(`${number} is between 0 and 50`)
    }
    else if(number >= 51 && number < 101) {
        console.log(`${number} is between 51 and 100`)
    }
    else if(number > 100){
        console.log(`${number} is greater than 100`)
    }
    else {
        console.log(`${number} is less than 0`)
    }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

// 9
// false
// true
// 3
// false
// 3
// 3
// undefined
// null

// 10
// foo is 5, bar is 7
// foo is 0, bar is 0
// foo is 4, bar is 42
// foo is 3, bar is 42
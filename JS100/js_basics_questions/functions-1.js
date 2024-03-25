// 1
// function sum(num1, num2) {
//     return num1 + num2
// }

// console.log(sum(22, 10));

// 2
// function brendanEichQuote() {
//     console.log('Always bet on JavaScript.')
// }

// brendanEichQuote()

// 3
// function cite(string1, string2) {
//     console.log(`${string1} said: "${string2}"`)
// }

// cite('Brendan Eich', 'Always bet on JavaScript.');

// 4
// function squaredNumber(num) {
//     return num ** 2;
// }

// console.log(squaredNumber(3));

// 5
// nothing, function not called/invoked

// 6
// function compareByLength(string1, string2) {
//     if (string1.length < string2.length) {
//         return -1;
//     }
//     else if (string1.length > string2.length) {
//         return 1;
//     }
//     else {
//         return 0;
//     }
// }

// console.log(compareByLength('patience', 'perseverance')); 
// console.log(compareByLength('strength', 'dignity'));      
// console.log(compareByLength('humor', 'grace'));  

// 7
// let name = 'Captain Ruby'
// let nameNew = name.replace('Ruby', 'Javascript')
// console.log(nameNew)

// 8
// function greet(code) {
//     switch(code) {
//         case 'en':
//             return 'Hi!'
//         case 'fr':
//             return 'Salut!'
//         case 'pt':
//             return 'Olá!'
//         case 'de':
//             return 'Hallo!'
//         case 'sv':
//             return 'Hej!'
//         case 'af': 
//             return 'Haai!'
//     }
// }

// console.log(greet('en'));
// console.log(greet('fr')); 
// console.log(greet('pt')); 
// console.log(greet('de')); 
// console.log(greet('sv')); 
// console.log(greet('af')); 

// 9
// function extractLanguage(code) {
//     return code.split('_')[0];
// }

// extractLanguage('en_US.UTF-8');
// extractLanguage('en_GB.UTF-8');
// extractLanguage('ko_KR.UTF-16');

// 10
// function extractRegion(code) {
//     return code.split('_')[1].split('.')[0]
// }

// extractRegion('en_US.UTF-8');  // 'US'
// extractRegion('en_GB.UTF-8');  // 'GB'
// extractRegion('ko_KR.UTF-16'); // 'KR'

// 11
// function greet(code) {
//     switch(code) {
//         case 'en':
//             return 'Hi!'
//         case 'fr':
//             return 'Salut!'
//         case 'pt':
//             return 'Olá!'
//         case 'de':
//             return 'Hallo!'
//         case 'sv':
//             return 'Hej!'
//         case 'af': 
//             return 'Haai!'
//     }
// }

// function extractLanguage(code) {
//     return code.split('_')[0];
// }

// function extractRegion(code) {
//     return code.split('_')[1].split('.')[0]
// }

// function localGreet(code) {
//     let language = extractLanguage(code);
//     let region = extractRegion(code);
//     switch (region) {
//         case 'US': return 'Hey!';
//         case 'GB': return 'Hello!';
//         case 'AU': return 'Howdy!';
//         default: return greet(language);
//     }
// }

// console.log(localGreet('en_US.UTF-8'));
// console.log(localGreet('en_GB.UTF-8'));
// console.log(localGreet('en_AU.UTF-8'));

// console.log(localGreet('fr_FR.UTF-8'));
// console.log(localGreet('fr_CA.UTF-8'));
// console.log(localGreet('fr_MA.UTF-8'));
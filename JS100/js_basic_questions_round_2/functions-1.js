// Q1
// ----------------------------------------------------------------------------------------------------------------------------
// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(22, 10)); // 32
// ----------------------------------------------------------------------------------------------------------------------------

// Q2
// ----------------------------------------------------------------------------------------------------------------------------
// function brendanEichQuote(string) {
//   console.log('Always bet on JavaScript.');
// }

// brendanEichQuote();
// ----------------------------------------------------------------------------------------------------------------------------

// Q3
// ----------------------------------------------------------------------------------------------------------------------------
// function cite(str1, str2) {
//   console.log(`${str1} said: ${str2}`);
// }

// cite('Brendan Eich', 'Always bet on JavaScript.');
// ----------------------------------------------------------------------------------------------------------------------------

// Q4
// ----------------------------------------------------------------------------------------------------------------------------
// function squaredNumber(num) {
//   return num ** 2;
// }

// console.log(squaredNumber(3)); // 9
// ----------------------------------------------------------------------------------------------------------------------------

// Q5
// ----------------------------------------------------------------------------------------------------------------------------
// no output, function not invoked

// function multiplesOfThree() {
//   let divisor = 1;

//   for (let dividend = 3; dividend <= 30; dividend += 3) {
//     console.log(dividend + ' / ' + divisor + ' = 3');
//     divisor += 1;
//   }
// }

// multiplesOfThree();
// ----------------------------------------------------------------------------------------------------------------------------

// Q6
// ----------------------------------------------------------------------------------------------------------------------------
// function compareByLength(str1, str2) {
//   if (str1.length === str2.length) {
//     console.log(0);
//   } else if (str1.length > str2.length) {
//     console.log(1);
//   } else {
//     console.log(-1);
//   }
// }

// compareByLength('patience', 'perseverance'); // -1
// compareByLength('strength', 'dignity');      //  1
// compareByLength('humor', 'grace');           //  0
// ----------------------------------------------------------------------------------------------------------------------------

// Q7
// ----------------------------------------------------------------------------------------------------------------------------
// let name = 'Captain Ruby';
// let nameArr = name.split(' ');
// nameArr[1] = 'JavaScript'
// let newName = nameArr.join(' ');

// console.log(newName);

// console.log('Captain Ruby'.split(' ')[0] + ' JavaScript');

// console.log('Captain Ruby'.replace('Ruby', 'Javascript'));
// ----------------------------------------------------------------------------------------------------------------------------

// Q8
// ----------------------------------------------------------------------------------------------------------------------------
// function greet(language) {
//   switch (language) {
//     case 'en' : return 'Hi!';
//     case 'fr' : return 'Salut!';
//     case 'pt' : return 'Olá!';
//     case 'de' : return 'Hallo!';
//     case 'sv' : return 'Heji!';
//     case 'af' : return 'Haai!';
//   }
// }

// greet('en'); // 'Hi!'
// greet('fr'); // 'Salut!'
// greet('pt'); // 'Olá!'
// greet('de'); // 'Hallo!'
// greet('sv'); // 'Hej!'
// greet('af'); // 'Haai!'
// ----------------------------------------------------------------------------------------------------------------------------

// Q9
// ----------------------------------------------------------------------------------------------------------------------------
// function extractLanguage(locale) {
//   return locale.split('_')[0];
// }

// extractLanguage('en_US.UTF-8');  // 'en'
// extractLanguage('en_GB.UTF-8');  // 'en'
// extractLanguage('ko_KR.UTF-16'); // 'ko'
// ----------------------------------------------------------------------------------------------------------------------------

// Q10
// ----------------------------------------------------------------------------------------------------------------------------
// function extractRegion(locale) {
//   return locale.split('.')[0].split('_')[1];
// }

// extractRegion('en_US.UTF-8');  // 'US'
// extractRegion('en_GB.UTF-8');  // 'GB'
// extractRegion('ko_KR.UTF-16'); // 'KR'
// ----------------------------------------------------------------------------------------------------------------------------

// Q11
// ----------------------------------------------------------------------------------------------------------------------------
// function localGreet(locale) {
//   let language = extractLanguage(locale);
//   let region = extractRegion(locale);
  
//   switch (region) {
//     case 'US' : return 'Hey!';
//     case 'UK' : return 'Hello!';
//     case 'AU' : return 'Howdy!';
//     case 'IE' : return `What's the craic!`;
//     default: return greet(language);
//   }
// }

// console.log(localGreet('en_US.UTF-8')); // 'Hey!'
// console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
// console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
// console.log(localGreet('en_IE.UTF-8')); // 'Salut!'

// console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
// console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
// console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'
// ----------------------------------------------------------------------------------------------------------------------------
// while loop
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']

// for loop
let names2 = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames2 = [];

for (let index = 0; index < names2.length; index += 1) {
  let upperCaseName2 = names2[index].toUpperCase();
  upperNames2.push(upperCaseName2);
}

console.log(upperNames2);

// controlling loop

let names3 = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames3 = [];

for (let index = 0; index < names3.length; index += 1) {
  if (names3[index] === 'Naveed') {
    continue;
  }

  let upperCaseName3 = names3[index].toUpperCase();
  upperNames3.push(upperCaseName3);
}

console.log(upperNames3); // => ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']
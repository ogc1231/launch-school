PEDAC

Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after 
building the tallest possible valid structure.

P: Understand the Problem
- input: integer for a specific amount of cubes
- output: integer for cubes left over building the tallest possible valid structure

- explicit rules
- - The building blocks are cubes
- - The structure is built in layers 
- - The top layer is a single block
- - A block in an upper layer must be supported by four blocks in a lower layer 
- - A block in a lower layer can support more than one block in an upper layer 
- - You cannot leave gaps between blocks 

- layer 1: 1 block
- layer 2: 4 blocks
- layer 3: 16 blocks

- questions
- - Is a lower layer still valid if it has more blocks than it needs? 
- - Will there always be left-over blocks? 

E: Examples and test cases

```js
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
```

- Is a lower layer still valid if it has more blocks than it needs?

If we look at the second to last test case, the answer to this seems to be 'no'. Six blocks are provided. Five are used 
(one for the first layer, four for the second) and one block is left over. If we could add more blocks to the second layer
than necessary, zero blocks would be left over.

- Will there always be left-over blocks?

The first, second, fifth, and last tests seem to suggest that there aren't always blocks left over. If the input is the exact
amount of blocks required to build 'x' number of valid layers, then zero blocks will be left over.

D: Data Structures

```js
[
  [0],
  [0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
```
A: Algorithm

- Build the structure one layer at a time until you no longer have enough blocks left to build a 'valid' layer.
- Count how many blocks you have left.

1. Start with:
    - A count of the 'blocks remaining' equal to the input
    - A count of the 'current layer' equal to 0

2. Calculate the number for the 'next layer' by adding 1 to
   the value for the 'current layer'

3. Using the number for the 'next layer', calculate the
   'blocks required' to build that layer, by multiplying the
   number by itself

4. Determine if the 'blocks remaining' is greater than or
   equal to the 'blocks required' to build the layer
    - If it is:
      - Subtract the 'blocks required' from 'blocks remaining'
      - Increment the 'current layer' by 1
      - Go back to Step 2
    - If it isn't:
      - Return 'blocks remaining'

C: Code Soultion

```js
function calculateLeftoverBlocks(totalCubes) {
    let layer = 0;
    let cubesNeeded = 0;

    while (true) {
        let cubesForNextLayer = Math.pow(4, layer);
        if (cubesNeeded + cubesForNextLayer > totalCubes) {
            break;
        }
        cubesNeeded += cubesForNextLayer;
        layer += 1;
    }

    let leftover = totalCubes - cubesNeeded;
    return leftover;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //false
```

or 

```js
function calculateLeftoverBlocks(n) {
  let currentLayer = 0;
  let remainingCubes = n;

  let requiredCubes = (currentLayer + 1)**2;

  while (remainingCubes >= requiredCubes) {
    remainingCubes -= requiredCubes;
    currentLayer += 1;
    requiredCubes = (currentLayer + 1)**2;
  }

  return remainingCubes;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
```
/*
Tic Tac Toe is a 2-player game played on a 3x3 grid called the board. Each player takes a turn and marks a square on the board.
The first player to get 3 squares in a row–horizontal, vertical, or diagonal–wins. If all 9 squares are filled and neither player
has 3 in a row, the game is a tie.

1 - Display 3x3 board
2 - Player marks board with 'x'
3 - Computer marks board with 'o'
4 - Display updated board
5 - If winner display winner
6 - If board full display tie
7 - If no winner and the board is not full, go to #2 
8 - Play again?
9 - If 'yes' got to #1
10 - If 'no' exit application
*/
const readline = require("readline-sync");
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
let vertical = '     |     |';
let verticalFirst = `  ${board['1']}  |  ${board['2']}  |  ${board['3']}`;
let verticalMiddle = `  ${board['4']}  |  ${board['5']}  |  ${board['6']}`;
let verticalLast = `  ${board['7']}  |  ${board['8']}  |  ${board['9']}`;
let horizontal = '-----+-----+-----';
let spacer = '';

console.log(spacer);
console.log(vertical);
console.log(verticalFirst);
console.log(vertical);
console.log(horizontal);
console.log(vertical);
console.log(verticalMiddle);
console.log(vertical);
console.log(horizontal);
console.log(vertical);
console.log(verticalLast);
console.log(vertical);
console.log(spacer);
}

function createBoard() {
  let newBoard = {};
  
  for (let i = 1; i <= 9; i += 1) {
    newBoard[String(i)] = INITIAL_MARKER;
  }
  return newBoard;
}

function playerChoice(board) {
  let square;
  let emptySquares = Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
  
  while (true) {
    prompt(`Choose a square (${emptySquares.join(', ')})`);
    square = readline.question().trim();
    
    if (emptySquares.includes(square)) break;
    prompt("Not a valid choice");
  }
  board[square] = HUMAN_MARKER;
}

function computerChoice(board) {
  let emptySquares = Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
  let randomIndex = Math.floor(Math.random() * emptySquares.length);
  let square = emptySquares[randomIndex];
  
  board[square] = COMPUTER_MARKER;
}

let board = createBoard();
displayBoard(board);

playerChoice(board);
displayBoard(board);
computerChoice(board);
displayBoard(board);
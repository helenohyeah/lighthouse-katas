// detect if two queens on a chess board can attack each other
// queen can attack same row, same column, or diagonal (opposite matching coordinates)
// board represented by 8 by 8 array, 0 = unoccupied, 1 = queen
// generate a board given whiteQueen and blackQueen location then detect if they can attack each other

function generateBoard(whiteQueen, blackQueen) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      ((i === whiteQueen[0] && j === whiteQueen[1]) || (i === blackQueen[0] && j === blackQueen[1])) ? board[i][j] = 1 : board[i][j] = 0;
    }
  }
  return board;
}

function queenThreat() {
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1] || (whiteQueen[0] === blackQueen[1] && whiteQueen[1] === blackQueen[0])) {
    return true;
  } else {
    return false;
  }
}

/*
// Testing
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
*/

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
/*
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false
*/
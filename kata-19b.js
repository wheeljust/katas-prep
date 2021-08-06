/*
Kata 19 - build a chess board with two queens and detect attacking grid positions USING BOARD LAYOUT
*/

const generateBoard = function(whiteQueen, blackQueen) {
  let board = [];
  for (let x = 0; x < 8; x++) {
    board.push([]);
  }
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board[i].push(0);
    }
  }
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
};

const queenThreat = function(board) {

  //Check if queens are in the same row or column first
  if (whiteQueen[0] === blackQueen[0]) return true;
  if (whiteQueen[1] === blackQueen[1]) return true;

  //Check diagonal attack positions
  let rowsBelow = 7 - whiteQueen[0];
  let rowsAbove = 7 - rowsBelow;
  let stepDown;
  let stepUp;
  let stepLeft;
  let stepRight;

  for (let i = 1; i <= rowsBelow; i++) {
    if (i === 1) {
      stepRight = whiteQueen[1] + 1;
      stepLeft = whiteQueen[1] - 1;
      stepDown = whiteQueen[0] + 1;
    }
    
    if (stepRight <= 7 && board[stepDown][stepRight] === 1) return true;
    if (stepLeft >= 0 && board[stepDown][stepLeft] === 1) return true;

    stepDown += 1;
    stepRight += 1;
    stepLeft -= 1;
  }

  for (let j = 1; j <= rowsAbove; j++) {
    if (j === 1) {
      stepRight = whiteQueen[1] + 1;
      stepLeft = whiteQueen[1] - 1;
      stepUp = whiteQueen[0] - 1;
    }

    if (stepRight <= 7 && board[stepUp][stepRight] === 1) return true;
    if (stepLeft >= 0 && board[stepUp][stepLeft] === 1) return true;

    stepUp -= 1;
    stepRight += 1;
    stepLeft -= 1;

  }

  return false;
};


//Test Cases
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

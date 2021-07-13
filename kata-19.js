/*
Kata 19 - build a chess board with two queens and detect attacking grid positions USING QUEEN POSITIONS
*/

const whiteQueen = [6, 6];
const blackQueen = [3, 2];


const generateBoard = function(whiteQueen, blackQueen){
  let board = [];
  for(let x = 0; x < 8; x++){
    board.push([]);
  }
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      board[i].push(0);
    }
  }
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
}

const queenThreat = function(white, black){
  let threat = false;
  const aVector = [];
  
  //Check if queens are in the same row or column first
  if(white[0] === black[0]){
    threat = true;
  }
  if(white[1] === black[1]){
    threat = true;
  }

  //Check diagonal attacks using coordinate subtraction
  if(threat === false){
    aVector.push(Math.abs(white[0] - black[0]));
    aVector.push(Math.abs(white[1] - black[1]));
    //If the queens are on a matching diagonal the triangle will have equal side lengths, so subtract the rows of each queen location, and also the columns, and then take the abs value of the result.  If same distance of squares on each side, then threat is true.
    if(aVector[0] === aVector[1]){
      threat = true;
    }
  }
  return threat;
}

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(whiteQueen,blackQueen));

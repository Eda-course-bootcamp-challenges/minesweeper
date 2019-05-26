document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: true,
      hidden: true,
      surroundingMines: 1
    },
    {
      row: 0,
      col: 1,
      isMine: false,
      hidden: true,
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      hidden: true,
    },
    {
      row: 0,
      col: 3,
      isMine: false,
      hidden: true,
    },
    {
      row: 1,
      col: 0,
      isMine: false,
      hidden: true,
    },
    {
      row: 1,
      col: 1,
      isMine: true,
      hidden: true,
      surroundingMines: 3
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      hidden: true,
    },
    {
      row: 1,
      col: 3,
      isMine: false,
      hidden: true,
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      hidden: true,
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      hidden: true,
    },
    {
      row: 2,
      col: 2,
      isMine: true,
      hidden: true,
    },
    {
      row: 2,
      col: 3,
      isMine: false,
      hidden: true,
    },
    {
      row: 3,
      col: 0,
      isMine: false,
      hidden: true,
    },
    {
      row: 3,
      col: 1,
      isMine: true,
      hidden: true,
    },
    {
      row: 3,
      col: 2,
      isMine: true,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 3,
      col: 3,
      isMine: false,
      hidden: true,
      surroundingMines: 1
    },
  ]
}


function startGame () {
  for(var i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines  = countSurroundingMines(board.cells[i]);
  } 
  lib.initBoard();
}
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for(i = 0; i < surrounding.length; i++){
    if(surrounding[i].isMine){
      count++;
    }
  }
  return count

}


function checkForWin () {
  var isWinner = 0;
  for(var i = 0; i < board.cells.length; i++){
    if(board.cells[i].isMine === true && board.cells[i].isMarked === true || 
        board.cells[i].isMine === false && board.cells[i].hidden === false){
          isWinner++;
        }
        if (isWinner == board.cells.length){
          lib.displayMessage('You win') 
      }
  }
} 


document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
 






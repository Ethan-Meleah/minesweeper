document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click', checkForWin)

// Define your `board` object here!
 var board = {}

 board.cells = [{
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
                  surroundingMines: 0
                },
                {
                  row: 0,
                  col: 2,
                  isMine: false,
                  hidden: true,
                  surroundingMines: 2
                },
                {
                   row: 1,
                   col: 0,
                   isMine: false,
                   hidden: true,
                   surroundingMines: 0
                 },
                 {
                   row: 1,
                   col: 1,
                   isMine: false,
                   hidden: true,
                   surroundingMines: 0
                 },
                 {
                   row: 1,
                   col: 2,
                   isMine: false,
                   hidden: true,
                   surroundingMines: 2
                 },
                 {
                    row: 2,
                    col: 0,
                    isMine: false,
                    hidden: true,
                    surroundingMines: 1
                  },
                  {
                    row: 2,
                    col: 1,
                    isMine: true,
                    hidden: true,
                    surroundingMines: 1
                  },
                  {
                    row: 2,
                    col: 2,
                    isMine: true,
                    hidden: true,
                    surroundingMines: 0
                  },
               ]

function startGame () {

  for (var i = 0, l = board['cells'].length; i < l; i++) {
    // Get the current row and column and store as variables
    var currentRow = board['cells'][i].row;
    var currentCol = board['cells'][i].col;
    var cellMines = countSurroundingMines(board['cells'][i])
  }

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
    for (var i = 0, l = board['cells'].length; i < l; i++) {
      if ( board['cells'][i].isMine == true ) {
        if ( board['cells'][i].isMarked == true ) {
            lib.displayMessage('You win!')
        }
      }
    }

}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
    var allMines = 0
    checkingCells = getSurroundingCells(cell.row, cell.col)

    for (var i = 0, l = checkingCells.length; i < l; i++) {
      if (checkingCells[i].isMine){
        allMines++
      }
    }

    cell.surroundingMines = allMines

  }

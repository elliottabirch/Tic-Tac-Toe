
class TTT {
  constructor() {
    // retains access to current board
    this.board = new Board();
  }
  // checks for win condition
  // keeps track of current turn
  // logs current players turn
  // increments turn
}

class Board {
  constructor() {
    this.board = [['X', '-', 'X'], ['-', 'X', '-'], ['X', '-', 'X']];
    this.cleanBoard = [...this.board];
  }
  // print board
  printBoard() {
    let res = '';
    this.board.forEach((row) => {
      row.forEach((cube) => {
        res += cube;
      });
      res += '\n';
    });
    console.log(res);
  }
  // reset board
  // toggle piece
  // check diagonal win
  checkMinDiag(token) {
    const board = this.board;
    return this.board.reduce((pieces, piece, i) => {
      if (board[i][i] === token) {
        return pieces + 1;
      } return pieces;
    }, 0) === 3;
  }
  checkMajDiag(token) {
    const board = this.board;
    return this.board.reduce((pieces, piece, i) => {
      if (board[i][2 - i] === token) {
        return pieces + 1;
      } return pieces;
    }, 0) === 3;
  }
  // check horizontal win
  // checkHorizontal(token){
  //   function checkRow(row) {
  //     return row.reduce((pieces))
  //   }
  //   const board = this.board;
  //   var hasWin = false;
  //   for (var row = 0; row < board.length; row++) {

  //   }
  // }
  // check vertical win

}

class Player {
  constructor(name, marker) {
    // stores name
    this.name = name;
    // stores marker
    this.marker = marker;
  }
}

const board = new Board();
board.checkMajDiag('X');
board.checkMinDiag('X');

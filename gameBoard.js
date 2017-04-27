class Player {
  constructor(name, marker) {
    // stores name
    this.name = name;
    // stores marker
    this.marker = marker;
  }
}

class Board {
  constructor() {
    this.board = [['X', '-', 'X'], ['-', 'X', 'X'], ['X', '-', 'X']];
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
  resetBoard() {
    this.board = [...this.cleanBoard];
  }

  // toggle piece
  togglePiece(token, row, collumn) {
    this.board[row][collumn] = token;
  }

  checkWin(token) {
    return this.checkMinDiag(token) || this.checkMajDiag(token) || this.checkHorizontal(token) || this.checkVertical(token);
  }

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

  checkHorizontal(token) {
    function checkRow(row) {
      return row.reduce((pieces, piece) =>
        piece === token ? pieces + 1 : pieces, 0) === 3;
    }
    const board = this.board;
    for (var row = 0; row < board.length; row++) {
      if (checkRow(board[row])) {
        return true;
      }
    }
    return false;
  }

  checkVertical(token) {
    const board = this.board;

    function checkCollumn(collumn, board) {
      let pieces = 0;
      for (var i = 0; i < 3; i++) {
        if (board[i][collumn] === token) {
          pieces++;
        }
      }
      return pieces === 3;
    }

    for (var collumn = 0; collumn < board.length; collumn++) {
      if (checkCollumn(collumn, board)) {
        return true;
      }
    }
    return false;
  }

}

class TTT {
  constructor() {
    // retains access to current board
    this.board = new Board();
    this.players = [new Player('elliott', 'X'), new Player('ben', 'O')];
    this.turn = 0;
  }
  // keeps track of current turn
  endTurn() {
    this.turn = (this.turn + 1) % 2;
    console.log(`It is now ${this.players[this.turn].name}\'s turn`);
    this.board.printBoard();
  }
  // logs current players turn
  // increments turn
  // add player
  addPlayer(name, marker) {
    this.players.push(new Player(name, marker));
  }
}


const board = new Board();

const game = new TTT();
game.endTurn();

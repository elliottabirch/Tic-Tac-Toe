class Player {
  constructor(name, token) {
    // stores name
    this.name = name;
    // stores token
    this.token = token;
  }
}

class Board {
  constructor() {
    this.board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
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
    this.board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
    console.log(`this is the new board ${this.board}`);
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
    this.players = [];
    this.turn = 0;
  }
  // keeps track of current turn
  endTurn() {
    if (this.board.checkWin(this.players[this.turn].token)) {
      console.log(`${this.players[this.turn].name} has won, starting a new game`);
      this.board.resetBoard();
      this.board.printBoard();
      this.turn = (this.turn + 1) % 2;
    } else {
      this.turn = (this.turn + 1) % 2;
      console.log(`It is now ${this.players[this.turn].name}s turn`);
      this.board.printBoard();
    }
  }
  // logs current players turn
  // increments turn
  resetBoard() {
    this.board.resetBoard();
  }
  // add player
  addPlayer(name, marker) {
    if (this.players.length < 3) {
      this.players.push(new Player(name, marker));
      console.log(`${name} has been added to the players list, using ${marker} marker`);
    } else console.log('cant add any more players');
  }

  play(row, collumn) {
    if (this.players.length === 2) {
      this.board.togglePiece(this.players[this.turn].token, row, collumn);
      this.endTurn();
    } else console.log('Add more Players');
  }
}

const game = new TTT();

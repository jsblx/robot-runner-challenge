/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-08 18:59:15
# Last Modified by: jibalucan
# Last Modified time: 2019-10-09 09:01:53
# ---------------------------------------------
# ---------------------------------------------*/
const BoardPiece = require('./piece');

function isOutOfBounds(coordinate, maxGridCoordinate) {
  return coordinate < 0 || coordinate >= maxGridCoordinate;
}


function hasCollision(grid, row, col) {

}

class Board {
  constructor(config) {
    const { rowSize, columnSize } = config;
    this.rowSize = rowSize;
    this.columnSize = columnSize;
    this.pieces = [];

    this.initialize();
  }

  initialize() {
    const { rowSize, columnSize } = this;
    const rows = new Array(rowSize);
    this.grid = rows.map(() => new Array(columnSize).fill({}));
  }

  createBoardPiece(row = null, col = null) {
    const pieceIndex = this.pieces.length;
    const boardPiece = new BoardPiece(pieceIndex, this.setPieceCoordinates);

    if (row && col) boardPiece.setCoordinates(row, col);
  }

  setPieceCoordinates(piece, newRow, newCol) {
    if (isOutOfBounds(newRow, this.rowSize) || isOutOfBounds(newCol, this.columnSize)) {
      throw Error('ERR_PIECE_OUT_OF_BOUNDS');
    }

    if (hasCollision(this.grid, newRow, newCol)) {
      throw Error('ERR_PIECE_HAS_COLLISION');
    }

    const { row, col } = piece.getCoordinates();
    this.resetCell(row, col);
    this.setCell(newRow, newCol, piece);
  }

  clearCell(row, col) {
    this.grid[row][col] = {};
  }

  setCell(row, col, obj = {}) {
    this.grid[row][col] = obj;
  }

  printField() {
    this.grid.forEach((row) => {
      row.forEach((col) => {
        const object = col || {};
        const { id = 'null' } = object;
        console.log(`[${id}]`);
      });
    });
  }
}

module.exports = Board;

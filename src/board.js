/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-08 18:59:15
# Last Modified by: balucan.js
# Last Modified time: 2019-10-11 15:19:50
# ---------------------------------------------
# ---------------------------------------------*/
const BoardPiece = require('./piece');
const io = require('./io');

function isOutOfBounds(coordinate, maxGridCoordinate) {
  return coordinate < 0 || coordinate >= maxGridCoordinate;
}


function hasCollision(grid, row, col, objectId) {
  const gridObject = grid[row][col];
  return gridObject && (gridObject.id === objectId);
}

class Board {
  constructor(config) {
    const { rowSize, columnSize } = config;
    io.debug('BOARD', rowSize, columnSize);
    this.rowSize = rowSize;
    this.columnSize = columnSize;
    this.pieces = [];
    this.pieceCount = 0;

    this.initialize();
  }

  initialize() {
    const { rowSize, columnSize } = this;
    const rows = new Array(rowSize).fill({});
    this.grid = rows.map(() => new Array(columnSize).fill({}));
  }

  getGrid() {
    return this.grid;
  }

  createBoardPiece(row, col) {
    const pieceIndex = this.pieceCount;
    this.pieceCount += 1;
    const boardPiece = new BoardPiece(pieceIndex, (piece, newRow, newCol) => {
      this.setPieceCoordinates(piece, newRow, newCol);
    });
    if (typeof (row) !== 'undefined' && typeof (col) !== 'undefined') boardPiece.setCoordinates(col, row);
    return boardPiece;
  }

  setPieceCoordinates(piece, newRow, newCol) {
    io.debug('ROW', newRow, 'COL', newCol, 'GRID', this.grid);
    if (isOutOfBounds(newRow, this.rowSize) || isOutOfBounds(newCol, this.columnSize)) {
      throw Error('ERR_PIECE_OUT_OF_BOUNDS');
    }

    if (hasCollision(this.grid, newRow, newCol, piece.id)) {
      throw Error('ERR_PIECE_HAS_COLLISION');
    }

    const { row, col } = piece.getCoordinates();
    this.clearCell(row, col);
    this.setCell(newRow, newCol, piece);
  }

  clearCell(row, col) {
    if (typeof (row) !== 'undefined' && typeof (col) !== 'undefined') this.grid[row][col] = {};
    else io.debug(`clear [${row}][${col}]`);
  }

  setCell(row, col, obj = {}) {
    if (typeof (row) !== 'undefined' && typeof (col) !== 'undefined') this.grid[row][col] = obj;
    else io.debug(`set [${row}][${col}]`);
  }
}

module.exports = Board;

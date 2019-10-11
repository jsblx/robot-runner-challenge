/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-09 08:03:39
# Last Modified by: balucan.js
# Last Modified time: 2019-10-11 16:02:55
# ---------------------------------------------
# ---------------------------------------------*/
const io = require('./io');

class BoardPiece {
  constructor(pieceIndex, setCoordinateFn) {
    this.id = pieceIndex;
    this.setCoordinateFn = setCoordinateFn;
  }

  setCoordinates(col, row) {
    this.setCoordinateFn(this, row, col);
    this.row = row;
    this.col = col;

    io.debug(`setcoords = [${row}][${col}]`);
  }

  getCoordinates() {
    const { row, col } = this;
    io.debug(`getCoords = [${row}][${col}]`);
    return { row, col };
  }

  moveNorth() {
    const { row, col } = this;
    this.setCoordinates(col, row + 1);
  }

  moveSouth() {
    const { row, col } = this;
    this.setCoordinates(col, row - 1);
  }

  moveEast() {
    const { row, col } = this;
    this.setCoordinates(col + 1, row);
  }

  moveWest() {
    const { row, col } = this;
    this.setCoordinates(col - 1, row);
  }

  // move(direction) {
  //   switch (direction) {
  //     case 'north':
  //       this.moveNorth();
  //       break;
  //     case 'east':
  //       this.moveEast();
  //       break;
  //     case 'west':
  //       this.moveWest();
  //       break;
  //     case 'south':
  //       this.moveSouth();
  //       break;
  //     default:
  //       break;
  //   }
  // }
}


module.exports = BoardPiece;

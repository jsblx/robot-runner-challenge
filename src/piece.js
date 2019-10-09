/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-09 08:03:39
# Last Modified by: balucan.js
# Last Modified time: 2019-10-09 21:09:37
# ---------------------------------------------
# ---------------------------------------------*/

class BoardPiece {
  constructor(setCoordinateFn) {
    this.setCoordinateFn = setCoordinateFn;
  }

  setCoordinates(row, col) {
    this.setCoordinateFn(this, row, col);
    this.row = row;
    this.col = col;
  }

  getCoordinates() {
    const { row, col } = this;
    return { row, col };
  }

  moveNorth() {
    const { row, col } = this;
    this.setCoordinates(row + 1, col);
  }

  moveSouth() {
    const { row, col } = this;
    this.setCoordinates(row - 1, col);
  }

  moveEast() {
    const { row, col } = this;
    this.setCoordinates(row, col + 1);
  }

  moveWest() {
    const { row, col } = this;
    this.setCoordinates(row, col - 1);
  }
}


module.exports = BoardPiece;

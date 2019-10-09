/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-08 18:59:23
# Last Modified by: balucan.js
# Last Modified time: 2019-10-10 00:09:15
# ---------------------------------------------
# ---------------------------------------------*/
const DIRECTION_COUNT = 4;
const validDirections = ['north', 'east', 'south', 'west'];
const validCommands = [
  { name: 'place', paramCount: 3 },
  { name: 'move', paramCount: 0 },
  { name: 'left', paramCount: 0 },
  { name: 'right', paramCount: 0 },
  { name: 'report', paramCount: 0 },
];


function isValidCommand(command, params = '') {
  let valid = false;
  const match = validCommands.find((cmd) => cmd.name === command);
  if (match) {
    const { paramCount } = match;
    if (paramCount && params && params.split(',').length === paramCount) valid = true;
    else if (paramCount === 0) valid = true;
  }

  return valid;
}

class Robot {
  constructor() {
    this.isPlaced = false;
    this.direction = null;
  }

  setBoardPiece(boardPiece) {
    this.boardPiece = boardPiece;
  }

  execute(command, parameters = null) {
    const cmd = command.toLowerCase();
    if (isValidCommand(cmd, parameters)) this[cmd](parameters);
  }

  getDirection() {
    return this.direction;
  }

  place(parameters) {
    const [x, y, facing] = parameters;
    const newDirection = facing.toLowerCase();

    if (validDirections.indexOf(newDirection) >= 0) {
      this.boardPiece.setCoordinates(x, y);
      this.direction = newDirection;
      this.isPlaced = true;
    } else {
      throw Error('ERR_ROBOT_INVALID_DIRECTION');
    }
  }

  move() {
    const { direction } = this;
    if (this.isPlaced) {
      this.boardPiece.move(direction);
    } else {
      throw Error('ERR_ROBOT_NOT_PLACED');
    }
  }

  left() {
    const { direction } = this;
    if (this.isPlaced) {
      const dirIndex = validDirections.indexOf(direction);

      const adjustedDirIndex = dirIndex + DIRECTION_COUNT - 1;
      const newDirIndex = adjustedDirIndex % DIRECTION_COUNT;
      const newDirection = validDirections[newDirIndex];

      this.direction = newDirection;
    } else {
      throw Error('ERR_ROBOT_NOT_PLACED');
    }
  }

  right() {
    const { direction } = this;
    if (this.isPlaced) {
      const dirIndex = validDirections.indexOf(direction);

      const adjustedDirIndex = dirIndex + DIRECTION_COUNT + 1;
      const newDirIndex = adjustedDirIndex % DIRECTION_COUNT;
      const newDirection = validDirections[newDirIndex];

      this.direction = newDirection;
    } else {
      throw Error('ERR_ROBOT_NOT_PLACED');
    }
  }

  report() {
    if (this.isPlaced) {
      const { x, y } = this.boardPiece.getCoordinates();
      const { direction } = this;
      console.log(`${x},${y},${direction}`);
    } else {
      throw Error('ERR_ROBOT_NOT_PLACED');
    }
  }
}

module.exports = Robot;

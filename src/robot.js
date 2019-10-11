/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-08 18:59:23
# Last Modified by: balucan.js
# Last Modified time: 2019-10-11 16:11:31
# ---------------------------------------------
# ---------------------------------------------*/
const BoardPiece = require('./piece');
const io = require('./io');

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
    if (paramCount && params && params.length === paramCount) valid = true;
    else if (paramCount === 0) valid = true;
  }

  return valid;
}

class Robot extends BoardPiece {
  constructor(...args) {
    super(...args);
    this.isPlaced = false;
    this.direction = null;
  }

  execute(command, parameters = null) {
    const cmd = command.toLowerCase();
    io.debug(`robot execute ${command}`, parameters);
    if (isValidCommand(cmd, parameters)) this[cmd](parameters);
  }

  getDirection() {
    return this.direction;
  }

  place(parameters) {
    const [x, y, facing] = parameters;
    const newDirection = facing.toLowerCase();
    const setCol = parseInt(x, 10);
    const setRow = parseInt(y, 10);
    io.debug(`executing place [${setRow}][${setCol}][${facing}]`);
    if (validDirections.indexOf(newDirection) >= 0) {
      this.setCoordinates(setCol, setRow);
      this.direction = newDirection;
      this.isPlaced = true;
    } else {
      throw Error('ERR_ROBOT_INVALID_DIRECTION');
    }
  }

  move() {
    const { direction } = this;
    if (this.isPlaced) {
      io.debug(`executing move [${direction}]`);
      switch (direction) {
        case 'north':
          this.moveNorth();
          break;
        case 'east':
          this.moveEast();
          break;
        case 'west':
          this.moveWest();
          break;
        case 'south':
          this.moveSouth();
          break;
        default:
          break;
      }
    } else {
      throw Error('ERR_ROBOT_NOT_PLACED');
    }
  }

  left() {
    const { direction } = this;
    if (this.isPlaced) {
      io.debug(`executing left from ${direction}`);
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
      io.debug(`executing right from ${direction}`);
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
      const { row, col } = this.getCoordinates();
      const { direction } = this;
      io.output(`${col},${row},${direction.toUpperCase()}`);
    } else {
      throw Error('ERR_ROBOT_NOT_PLACED');
    }
  }
}

module.exports = Robot;

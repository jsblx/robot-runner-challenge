/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-08 18:59:23
# Last Modified by: jibalucan
# Last Modified time: 2019-10-09 00:32:32
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
  const match = validCommands.filter((cmd) => cmd.name === command);
  if (match) {
    const { paramCount } = match;
    if (paramCount && params && params.split(',').length === paramCount) valid = true;
  }

  return valid;
}

class Robot {
  constructor() {
    this.moveHistory = [];
    this.robotPlaced = false;
  }

  setBoardObject(boardObject) {
    this.boardObject = boardObject;
  }

  execute(command, parameters) {
    const cmd = command.toLowerCase();
    if (isValidCommand(cmd, parameters)) this[cmd](parameters);
  }

  place(parameters) {
    const [x, y, facing] = parameters;
    const newDirection = facing.toLowerCase();

    if (validDirections.indexOf(newDirection) >= 0) {
      this.boardObject.setCoordinates(x, y);
      this.direction = newDirection;

      const moveObject = { command: 'place', parameters };
      this.moveHistory.push(moveObject);
      this.robotPlaced = true;
    } else {
      throw Error('ERR_ROBOT_INVALID_DIRECTION');
    }
  }

  move() {
    const { direction } = this;
    if (this.robotPlaced) {
      this.boardObject.move(direction);
    } else {
      throw Error('ERR_ROBOT_NOT_PLACED');
    }
  }

  left() {
    const { direction } = this;
    if (this.robotPlaced) {
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
    if (this.robotPlaced) {
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
    const { x, y } = this.boardObject.getCoordinates();
    const { direction } = this;
    if (this.robotPlaced) {
      console.log(`${x},${y},${direction}`);
    } else {
      throw Error('ERR_ROBOT_NOT_PLACED');
    }
  }
}

module.exports = Robot;

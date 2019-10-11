/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-08 18:40:22
# Last Modified by: balucan.js
# Last Modified time: 2019-10-10 09:10:39
# ---------------------------------------------
# ---------------------------------------------*/
const Board = require('./src/board');
const Robot = require('./src/robot');
const io = require('./src/io');

const cfgDefaults = require('./defaults');

class RobotRunner {
  constructor(commands, config = cfgDefaults) {
    this.commands = commands;
    this.config = config;
  }

  initialize() {
    this.board = new Board(this.config);
    this.robot = new Robot();

    // Link robot to board via board object
    const boardPiece = this.board.createBoardPiece();
    this.robot.setBoardPiece(boardPiece);
  }

  run() {
    this.commands.forEach((line) => {
      try {
        const stripped = line.trim();
        const [command, parameters = ''] = stripped.split(' ');
        const splitParams = parameters.split(',');
        this.robot.execute(command, splitParams);
      } catch (error) {
        const { message } = error;
        switch (message) {
          case 'ERR_PIECE_OUT_OF_BOUNDS':
          case 'ERR_PIECE_HAS_COLLISION':
          case 'ERR_ROBOT_INVALID_DIRECTION':
          case 'ERR_ROBOT_NOT_PLACED':
            io.debug('Error:', message);
            // Ignore commands which, when executed, throw these errors
            break;
          default:
            throw Error(error);
        }
      }
    });
  }
}

module.exports = RobotRunner;

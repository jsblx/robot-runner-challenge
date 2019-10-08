/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-08 18:40:22
# Last Modified by: jibalucan
# Last Modified time: 2019-10-08 23:43:09
# ---------------------------------------------
# ---------------------------------------------*/
const Board = require('./src/board');
const Robot = require('./src/robot');

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
    const boardObject = this.board.createBoardObject();
    this.robot.setBoardObject(boardObject);
  }

  run() {
    this.commands.forEach((line) => {
      try {
        const stripped = line.trim();
        const [command, parameters] = stripped.split(' ');
        this.robot.execute(command, parameters);
      } catch (error) {
        console.log('ERROR', error);
        if (error !== 'ERR_BOARD_OUT_OF_BOUNDS') {
          throw Error(error);
        }
      }
    });
  }
}

module.exports = RobotRunner;

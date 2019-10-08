/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-08 18:40:22
# Last Modified by: jibalucan
# Last Modified time: 2019-10-08 20:17:41
# ---------------------------------------------
# ---------------------------------------------*/
const Board = require('./src/board');
const Robot = require('./src/robot');
const Commands = require('./src/commands');

const cfgDefaults = require('./defaults');


class RobotRunner {
  constructor(cmdLines, cfg = cfgDefaults) {
    this.cmdLines = cmdLines;
    this.cfg = cfg;
  }

  initialize() {
    this.commands = Commands(this.cmdLines);

    this.board = new Board(this.cfg);
    this.robot = new Robot(this.cfg);

    // Link robot to board via board object
    const boardObject = this.board.createBoardObject();
    this.robot.setBoardObject(boardObject);
  }

  run() {
    this.commands.forEach((command) => {
      try {
        command.run(this.robot);
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

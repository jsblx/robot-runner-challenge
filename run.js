/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-10 08:02:25
# Last Modified by: balucan.js
# Last Modified time: 2019-10-10 08:03:10
# ---------------------------------------------
# ---------------------------------------------*/
const RobotRunner = require('./index');
const { getFilenameFromArgs, getCommandLinesFromFile } = require('./utils');

async function run() {
  const fileName = getFilenameFromArgs();
  const loadCmdLines = await getCommandLinesFromFile(fileName);
  const robotRunner = new RobotRunner(loadCmdLines);
  robotRunner.initialize();
  robotRunner.run();
}

run();

/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-08 18:55:42
# Last Modified by: jibalucan
# Last Modified time: 2019-10-08 20:21:52
# ---------------------------------------------
# ---------------------------------------------*/
const RobotRunner = require('../index');
const { getFilenameFromArgs, getCommandLinesFromFile } = require('../utils');

async function runTest() {
  const fileName = getFilenameFromArgs();
  const loadCmdLines = await getCommandLinesFromFile(fileName);
  const robotRunner = new RobotRunner(loadCmdLines);
  robotRunner.initialize();
  robotRunner.run();
}

runTest();

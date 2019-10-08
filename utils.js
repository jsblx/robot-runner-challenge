/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-08 19:13:36
# Last Modified by: jibalucan
# Last Modified time: 2019-10-08 20:21:19
# ---------------------------------------------
# ---------------------------------------------*/
const fs = require('fs');

function getFilenameFromArgs() {
  const { argv } = process;
  if (argv.length < 3) throw Error('ERR_NO_INPUTFILE');
  const [, , fileName] = argv;
  return fileName;
}

async function getCommandLinesFromFile(fileName) {
  const contents = await fs.readFileSync(fileName);
  const cmdLines = contents.split('\n');
  return cmdLines;
}

const utils = {
  getFilenameFromArgs,
  getCommandLinesFromFile,
};

module.exports = utils;

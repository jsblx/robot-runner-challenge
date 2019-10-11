/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-09 21:18:34
# Last Modified by: balucan.js
# Last Modified time: 2019-10-10 07:50:03
# ---------------------------------------------
# ---------------------------------------------*/

const { getFilenameFromArgs, getCommandLinesFromFile } = require('../utils');

it('loads command lines from valid file', () => expect(getCommandLinesFromFile(`${__dirname}/../cmd-files/001_loadcmdline.txt`)).resolves.toEqual(['PLACE X,Y,F', 'MOVE', 'LEFT', 'RIGHT', 'REPORT']));


it('reads command line arguments and retrieves last argument as filename', () => {
  const filename = `${__dirname}/../cmd-files/001_loadcmdline.txt`;
  process.argv.push(filename);
  expect(getFilenameFromArgs()).toBe(filename);
});

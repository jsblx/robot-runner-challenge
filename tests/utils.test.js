/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-09 21:18:34
# Last Modified by: balucan.js
# Last Modified time: 2019-10-09 21:49:39
# ---------------------------------------------
# ---------------------------------------------*/

const { getCommandLinesFromFile } = require('../utils');

it('successfully loads command lines from valid file', () => expect(getCommandLinesFromFile(`${__dirname}/../cmd-files/001_loadcmdline.txt`)).resolves.toEqual(['PLACE X,Y,F', 'MOVE', 'LEFT', 'RIGHT', 'REPORT']));

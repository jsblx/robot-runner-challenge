/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-08 18:55:42
# Last Modified by: balucan.js
# Last Modified time: 2019-10-11 15:40:52
# ---------------------------------------------
# ---------------------------------------------*/
const RobotRunner = require('../index');
const { getCommandLinesFromFile } = require('../utils');
const io = require('../src/io');

const mockOutputFn = jest.fn();
beforeEach(() => mockOutputFn.mockClear());
io.output = mockOutputFn.bind(io);

async function run(fileName) {
  const fullPath = `${__dirname}/../cmd-files/${fileName}`;
  const loadCmdLines = await getCommandLinesFromFile(fullPath);
  const robotRunner = new RobotRunner(loadCmdLines);
  robotRunner.initialize();
  robotRunner.run();
}

it('puts robot at (0, 0, north) and starts sending basic commands', async () => {
  await run('002_simple.txt');
  expect(mockOutputFn).toHaveBeenCalledTimes(1);
  expect(mockOutputFn.mock.calls[0][0]).toBe('0,1,NORTH');
});

it('puts robot at (0, 0, north) and starts performing base commands and reporting each step', async () => {
  await run('003_simple_multireport.txt');
  expect(mockOutputFn).toHaveBeenCalledTimes(4);
  expect(mockOutputFn.mock.calls[0][0]).toBe('0,0,NORTH');
  expect(mockOutputFn.mock.calls[1][0]).toBe('0,1,NORTH');
  expect(mockOutputFn.mock.calls[2][0]).toBe('0,1,WEST');
  expect(mockOutputFn.mock.calls[3][0]).toBe('0,1,NORTH');
});

it('puts robot at (0, 0, north) and starts riding along the border, clockwise', async () => {
  await run('004_simple_border_cw.txt');
  expect(mockOutputFn).toHaveBeenCalledTimes(9);
  expect(mockOutputFn.mock.calls[0][0]).toBe('0,0,NORTH');
  expect(mockOutputFn.mock.calls[1][0]).toBe('0,4,NORTH');
  expect(mockOutputFn.mock.calls[2][0]).toBe('0,4,EAST');
  expect(mockOutputFn.mock.calls[3][0]).toBe('4,4,EAST');
  expect(mockOutputFn.mock.calls[4][0]).toBe('4,4,SOUTH');
  expect(mockOutputFn.mock.calls[5][0]).toBe('4,0,SOUTH');
  expect(mockOutputFn.mock.calls[6][0]).toBe('4,0,WEST');
  expect(mockOutputFn.mock.calls[7][0]).toBe('0,0,WEST');
  expect(mockOutputFn.mock.calls[8][0]).toBe('0,0,NORTH');
});

it('puts robot at (0, 0, east) and starts riding along the border, counter clockwise', async () => {
  await run('005_simple_border_ccw.txt');
  expect(mockOutputFn).toHaveBeenCalledTimes(9);
  expect(mockOutputFn.mock.calls[0][0]).toBe('0,0,EAST');
  expect(mockOutputFn.mock.calls[1][0]).toBe('4,0,EAST');
  expect(mockOutputFn.mock.calls[2][0]).toBe('4,0,NORTH');
  expect(mockOutputFn.mock.calls[3][0]).toBe('4,4,NORTH');
  expect(mockOutputFn.mock.calls[4][0]).toBe('4,4,WEST');
  expect(mockOutputFn.mock.calls[5][0]).toBe('0,4,WEST');
  expect(mockOutputFn.mock.calls[6][0]).toBe('0,4,SOUTH');
  expect(mockOutputFn.mock.calls[7][0]).toBe('0,0,SOUTH');
  expect(mockOutputFn.mock.calls[8][0]).toBe('0,0,EAST');
});


it('puts robot at (0, 0, north), moving starts straight, and oob', async () => {
  await run('010_oob_north.txt');
  expect(mockOutputFn).toHaveBeenCalledTimes(7);
  expect(mockOutputFn.mock.calls[0][0]).toBe('0,0,NORTH');
  expect(mockOutputFn.mock.calls[1][0]).toBe('0,1,NORTH');
  expect(mockOutputFn.mock.calls[2][0]).toBe('0,2,NORTH');
  expect(mockOutputFn.mock.calls[3][0]).toBe('0,3,NORTH');
  expect(mockOutputFn.mock.calls[4][0]).toBe('0,4,NORTH');
  expect(mockOutputFn.mock.calls[5][0]).toBe('0,4,NORTH');
  expect(mockOutputFn.mock.calls[6][0]).toBe('0,4,NORTH');
});

it('puts robot at (0, 4, east), moving starts straight, and oob', async () => {
  await run('011_oob_east.txt');
  expect(mockOutputFn).toHaveBeenCalledTimes(7);
  expect(mockOutputFn.mock.calls[0][0]).toBe('0,4,EAST');
  expect(mockOutputFn.mock.calls[1][0]).toBe('1,4,EAST');
  expect(mockOutputFn.mock.calls[2][0]).toBe('2,4,EAST');
  expect(mockOutputFn.mock.calls[3][0]).toBe('3,4,EAST');
  expect(mockOutputFn.mock.calls[4][0]).toBe('4,4,EAST');
  expect(mockOutputFn.mock.calls[5][0]).toBe('4,4,EAST');
  expect(mockOutputFn.mock.calls[6][0]).toBe('4,4,EAST');
});

it('puts robot at (4, 4, south), moving starts straight, and oob', async () => {
  await run('012_oob_south.txt');
  expect(mockOutputFn).toHaveBeenCalledTimes(7);
  expect(mockOutputFn.mock.calls[0][0]).toBe('4,4,SOUTH');
  expect(mockOutputFn.mock.calls[1][0]).toBe('4,3,SOUTH');
  expect(mockOutputFn.mock.calls[2][0]).toBe('4,2,SOUTH');
  expect(mockOutputFn.mock.calls[3][0]).toBe('4,1,SOUTH');
  expect(mockOutputFn.mock.calls[4][0]).toBe('4,0,SOUTH');
  expect(mockOutputFn.mock.calls[5][0]).toBe('4,0,SOUTH');
  expect(mockOutputFn.mock.calls[6][0]).toBe('4,0,SOUTH');
});


it('puts robot at (4, 0, west), moving starts straight, and oob', async () => {
  await run('013_oob_west.txt');
  expect(mockOutputFn).toHaveBeenCalledTimes(7);
  expect(mockOutputFn.mock.calls[0][0]).toBe('4,0,WEST');
  expect(mockOutputFn.mock.calls[1][0]).toBe('3,0,WEST');
  expect(mockOutputFn.mock.calls[2][0]).toBe('2,0,WEST');
  expect(mockOutputFn.mock.calls[3][0]).toBe('1,0,WEST');
  expect(mockOutputFn.mock.calls[4][0]).toBe('0,0,WEST');
  expect(mockOutputFn.mock.calls[5][0]).toBe('0,0,WEST');
  expect(mockOutputFn.mock.calls[6][0]).toBe('0,0,WEST');
});


it('puts robot at (0, 0, west), attempts to go oob, then gets re-placed at different corners, attempting to oob', async () => {
  await run('020_oob_corners.txt');
  expect(mockOutputFn).toHaveBeenCalledTimes(16);
  expect(mockOutputFn.mock.calls[0][0]).toBe('0,0,WEST');
  expect(mockOutputFn.mock.calls[1][0]).toBe('0,0,WEST');
  expect(mockOutputFn.mock.calls[2][0]).toBe('0,0,SOUTH');
  expect(mockOutputFn.mock.calls[3][0]).toBe('0,0,EAST');
  expect(mockOutputFn.mock.calls[4][0]).toBe('4,0,SOUTH');
  expect(mockOutputFn.mock.calls[5][0]).toBe('4,0,SOUTH');
  expect(mockOutputFn.mock.calls[6][0]).toBe('4,0,EAST');
  expect(mockOutputFn.mock.calls[7][0]).toBe('4,0,NORTH');
  expect(mockOutputFn.mock.calls[8][0]).toBe('4,4,EAST');
  expect(mockOutputFn.mock.calls[9][0]).toBe('4,4,EAST');
  expect(mockOutputFn.mock.calls[10][0]).toBe('4,4,NORTH');
  expect(mockOutputFn.mock.calls[11][0]).toBe('4,4,WEST');
  expect(mockOutputFn.mock.calls[12][0]).toBe('0,4,NORTH');
  expect(mockOutputFn.mock.calls[13][0]).toBe('0,4,NORTH');
  expect(mockOutputFn.mock.calls[14][0]).toBe('0,4,WEST');
  expect(mockOutputFn.mock.calls[15][0]).toBe('0,4,SOUTH');
});


it('puts robot at (0, 0, east), and traverses in zigzag while performing oob whenever possible', async () => {
  await run('030_fulltraverse_sw.txt');
  expect(mockOutputFn).toHaveBeenCalledTimes(37);
  expect(mockOutputFn.mock.calls[0][0]).toBe('0,0,EAST');
  expect(mockOutputFn.mock.calls[1][0]).toBe('1,0,EAST');
  expect(mockOutputFn.mock.calls[2][0]).toBe('1,0,SOUTH');
  expect(mockOutputFn.mock.calls[3][0]).toBe('2,0,EAST');
  expect(mockOutputFn.mock.calls[4][0]).toBe('2,0,SOUTH');
  expect(mockOutputFn.mock.calls[5][0]).toBe('3,0,EAST');
  expect(mockOutputFn.mock.calls[6][0]).toBe('3,0,SOUTH');
  expect(mockOutputFn.mock.calls[7][0]).toBe('4,0,EAST');
  expect(mockOutputFn.mock.calls[8][0]).toBe('4,0,SOUTH');
  expect(mockOutputFn.mock.calls[9][0]).toBe('4,0,EAST');
  expect(mockOutputFn.mock.calls[10][0]).toBe('4,1,NORTH');
  expect(mockOutputFn.mock.calls[11][0]).toBe('4,1,EAST');
  expect(mockOutputFn.mock.calls[12][0]).toBe('4,1,WEST');
  expect(mockOutputFn.mock.calls[13][0]).toBe('0,1,WEST');
  expect(mockOutputFn.mock.calls[14][0]).toBe('0,1,WEST');
  expect(mockOutputFn.mock.calls[15][0]).toBe('0,2,NORTH');
  expect(mockOutputFn.mock.calls[16][0]).toBe('0,2,WEST');
  expect(mockOutputFn.mock.calls[17][0]).toBe('0,2,EAST');
  expect(mockOutputFn.mock.calls[18][0]).toBe('4,2,EAST');
  expect(mockOutputFn.mock.calls[19][0]).toBe('4,2,EAST');
  expect(mockOutputFn.mock.calls[20][0]).toBe('4,3,NORTH');
  expect(mockOutputFn.mock.calls[21][0]).toBe('4,3,EAST');
  expect(mockOutputFn.mock.calls[22][0]).toBe('4,3,WEST');
  expect(mockOutputFn.mock.calls[23][0]).toBe('0,3,WEST');
  expect(mockOutputFn.mock.calls[24][0]).toBe('0,3,WEST');
  expect(mockOutputFn.mock.calls[25][0]).toBe('0,4,NORTH');
  expect(mockOutputFn.mock.calls[26][0]).toBe('0,4,WEST');
  expect(mockOutputFn.mock.calls[27][0]).toBe('0,4,NORTH');
  expect(mockOutputFn.mock.calls[28][0]).toBe('1,4,EAST');
  expect(mockOutputFn.mock.calls[29][0]).toBe('1,4,NORTH');
  expect(mockOutputFn.mock.calls[30][0]).toBe('2,4,EAST');
  expect(mockOutputFn.mock.calls[31][0]).toBe('2,4,NORTH');
  expect(mockOutputFn.mock.calls[32][0]).toBe('3,4,EAST');
  expect(mockOutputFn.mock.calls[33][0]).toBe('3,4,NORTH');
  expect(mockOutputFn.mock.calls[34][0]).toBe('4,4,EAST');
  expect(mockOutputFn.mock.calls[35][0]).toBe('4,4,NORTH');
  expect(mockOutputFn.mock.calls[36][0]).toBe('4,4,EAST');
});

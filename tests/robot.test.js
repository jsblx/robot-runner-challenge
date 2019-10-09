/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-09 23:36:01
# Last Modified by: balucan.js
# Last Modified time: 2019-10-10 00:21:40
# ---------------------------------------------
# ---------------------------------------------*/
const Robot = require('../src/robot');
const BoardPiece = require('../src/piece');

jest.mock('../src/piece');

it('creates a robot, performs a move command, and throws ERR_ROBOT_NOT_PLACED when robot is not yet placed', () => {
  const robot = new Robot();
  expect(() => robot.move()).toThrow('ERR_ROBOT_NOT_PLACED');
});

it('creates a robot, performs a left command, and throws ERR_ROBOT_NOT_PLACED when robot is not yet placed', () => {
  const robot = new Robot();
  expect(() => robot.left()).toThrow('ERR_ROBOT_NOT_PLACED');
});

it('creates a robot, performs a right command, and throws ERR_ROBOT_NOT_PLACED when robot is not yet placed', () => {
  const robot = new Robot();
  expect(() => robot.right()).toThrow('ERR_ROBOT_NOT_PLACED');
});

it('creates a robot, performs a report command, and throws ERR_ROBOT_NOT_PLACED when robot is not yet placed', () => {
  const robot = new Robot();
  expect(() => robot.report()).toThrow('ERR_ROBOT_NOT_PLACED');
});


it('creates a robot, executes move command, and throws ERR_ROBOT_NOT_PLACED when robot is not yet placed', () => {
  const robot = new Robot();
  const command = 'MOVE';
  expect(() => robot.execute(command)).toThrow('ERR_ROBOT_NOT_PLACED');
});

it('creates a robot, executes left command, and throws ERR_ROBOT_NOT_PLACED when robot is not yet placed', () => {
  const robot = new Robot();
  const command = 'LEFT';
  expect(() => robot.execute(command)).toThrow('ERR_ROBOT_NOT_PLACED');
});

it('creates a robot, executes right command, and throws ERR_ROBOT_NOT_PLACED when robot is not yet placed', () => {
  const robot = new Robot();
  const command = 'RIGHT';
  expect(() => robot.execute(command)).toThrow('ERR_ROBOT_NOT_PLACED');
});

it('creates a robot, executes report command, and throws ERR_ROBOT_NOT_PLACED when robot is not yet placed', () => {
  const robot = new Robot();
  const command = 'REPORT';
  expect(() => robot.execute(command)).toThrow('ERR_ROBOT_NOT_PLACED');
});


beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  BoardPiece.mockClear();
});

it('creates a robot and performs a place command into (0, 0, north)', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'north']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('north');
});


it('creates a robot and performs a place command into (0, 0, south)', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'south']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('south');
});


it('creates a robot and performs a place command into (0, 0, east)', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'east']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('east');
});

it('creates a robot and performs a place command into (0, 0, west)', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'west']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('west');
});


it('creates a robot and performs a place command into (0, 0, north), and performs left()', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'north']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('north');
  robot.left();
  expect(robot.getDirection()).toBe('west');
});

it('creates a robot and performs a place command into (0, 0, north), and performs left() twice', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'north']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('north');
  robot.left();
  expect(robot.getDirection()).toBe('west');
  robot.left();
  expect(robot.getDirection()).toBe('south');
});


it('creates a robot and performs a place command into (0, 0, north), and performs right()', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'north']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('north');
  robot.right();
  expect(robot.getDirection()).toBe('east');
});

it('creates a robot and performs a place command into (0, 0, north), and performs right() twice', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'north']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('north');
  robot.right();
  expect(robot.getDirection()).toBe('east');
  robot.right();
  expect(robot.getDirection()).toBe('south');
});


it('creates a robot and performs a place command into (0, 0, east), and performs left()', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'east']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('east');
  robot.left();
  expect(robot.getDirection()).toBe('north');
});

it('creates a robot and performs a place command into (0, 0, east), and performs left() twice', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'east']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('east');
  robot.left();
  expect(robot.getDirection()).toBe('north');
  robot.left();
  expect(robot.getDirection()).toBe('west');
});


it('creates a robot and performs a place command into (0, 0, east), and performs right()', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'east']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('east');
  robot.right();
  expect(robot.getDirection()).toBe('south');
});

it('creates a robot and performs a place command into (0, 0, east), and performs right() twice', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'east']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('east');
  robot.right();
  expect(robot.getDirection()).toBe('south');
  robot.right();
  expect(robot.getDirection()).toBe('west');
});


it('creates a robot and performs a place command into (0, 0, south), and performs left()', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'south']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('south');
  robot.left();
  expect(robot.getDirection()).toBe('east');
});

it('creates a robot and performs a place command into (0, 0, south), and performs left() twice', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'south']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('south');
  robot.left();
  expect(robot.getDirection()).toBe('east');
  robot.left();
  expect(robot.getDirection()).toBe('north');
});


it('creates a robot and performs a place command into (0, 0, south), and performs right()', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'south']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('south');
  robot.right();
  expect(robot.getDirection()).toBe('west');
});

it('creates a robot and performs a place command into (0, 0, south), and performs right() twice', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'south']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('south');
  robot.right();
  expect(robot.getDirection()).toBe('west');
  robot.right();
  expect(robot.getDirection()).toBe('north');
});

it('creates a robot and performs a place command into (0, 0, west), and performs left()', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'west']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('west');
  robot.left();
  expect(robot.getDirection()).toBe('south');
});

it('creates a robot and performs a place command into (0, 0, west), and performs left() twice', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'west']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('west');
  robot.left();
  expect(robot.getDirection()).toBe('south');
  robot.left();
  expect(robot.getDirection()).toBe('east');
});


it('creates a robot and performs a place command into (0, 0, west), and performs right()', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'west']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('west');
  robot.right();
  expect(robot.getDirection()).toBe('north');
});

it('creates a robot and performs a place command into (0, 0, west), and performs right() twice', () => {
  const robot = new Robot();
  const piece = new BoardPiece();
  robot.setBoardPiece(piece);
  robot.place([0, 0, 'west']);
  const mockPieceInstance = BoardPiece.mock.instances[0];
  const mockSetCoordinates = mockPieceInstance.setCoordinates;
  expect(mockSetCoordinates).toHaveBeenCalledTimes(1);
  expect(robot.isPlaced).toBeTruthy();
  expect(robot.getDirection()).toBe('west');
  robot.right();
  expect(robot.getDirection()).toBe('north');
  robot.right();
  expect(robot.getDirection()).toBe('east');
});

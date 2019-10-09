/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-09 21:46:39
# Last Modified by: balucan.js
# Last Modified time: 2019-10-09 23:28:09
# ---------------------------------------------
# ---------------------------------------------*/

const Board = require('../src/board');

it('initializes 3x5 grid', () => {
  const config = { rowSize: 3, columnSize: 5 };
  const board = new Board(config);
  const gridArray = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ];
  expect(board.grid).toStrictEqual(gridArray);
});

it('initializes 5x5 grid', () => {
  const config = { rowSize: 5, columnSize: 5 };
  const board = new Board(config);
  const gridArray = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ];
  expect(board.grid).toStrictEqual(gridArray);
});


it('creates a board piece and sets piece in (2,1) of the 5x5 grid', () => {
  const config = { rowSize: 5, columnSize: 5 };
  const board = new Board(config);
  const piece = board.createBoardPiece(2, 1);

  const gridArray = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, piece, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ];

  expect(piece.getCoordinates()).toEqual({ row: 2, col: 1 });
  expect(board.grid).toStrictEqual(gridArray);
});


it('creates a board piece and sets piece in (3,4) of the 5x5 grid', () => {
  const config = { rowSize: 5, columnSize: 5 };
  const board = new Board(config);
  const piece = board.createBoardPiece(3, 4);

  const gridArray = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, piece],
    [{}, {}, {}, {}, {}],
  ];

  expect(piece.getCoordinates()).toEqual({ row: 3, col: 4 });
  expect(board.grid).toStrictEqual(gridArray);
});


it('creates a board piece and sets piece in (0,0) of the 5x5 grid', () => {
  const config = { rowSize: 5, columnSize: 5 };
  const board = new Board(config);
  const piece = board.createBoardPiece(0, 0);

  const gridArray = [
    [piece, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ];

  expect(piece.getCoordinates()).toEqual({ row: 0, col: 0 });
  expect(board.grid).toStrictEqual(gridArray);
});

it('creates a board piece and sets piece in (4,4) of the 5x5 grid', () => {
  const config = { rowSize: 5, columnSize: 5 };
  const board = new Board(config);
  const piece = board.createBoardPiece(4, 4);

  const gridArray = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, piece],
  ];

  expect(piece.getCoordinates()).toEqual({ row: 4, col: 4 });
  expect(board.grid).toStrictEqual(gridArray);
});


it('creates a board piece and sets piece in (0,4) of the 5x5 grid', () => {
  const config = { rowSize: 5, columnSize: 5 };
  const board = new Board(config);
  const piece = board.createBoardPiece(0, 4);

  const gridArray = [
    [{}, {}, {}, {}, piece],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ];

  expect(piece.getCoordinates()).toEqual({ row: 0, col: 4 });
  expect(board.grid).toStrictEqual(gridArray);
});

it('creates a board piece and sets piece in (4,0) of the 5x5 grid', () => {
  const config = { rowSize: 5, columnSize: 5 };
  const board = new Board(config);
  const piece = board.createBoardPiece(4, 0);

  const gridArray = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [piece, {}, {}, {}, {}],
  ];

  expect(piece.getCoordinates()).toEqual({ row: 4, col: 0 });
  expect(board.grid).toStrictEqual(gridArray);
});


it('creates a board piece, sets piece in (6,3) of the 5x5 grid, and throws ERR_PIECE_OUT_OF_BOUNDS', () => {
  const config = { rowSize: 5, columnSize: 5 };
  const board = new Board(config);
  expect(() => board.createBoardPiece(6, 3)).toThrow('ERR_PIECE_OUT_OF_BOUNDS');
});


it('creates a board piece, sets piece in (3,6) of the 5x5 grid, and throws ERR_PIECE_OUT_OF_BOUNDS', () => {
  const config = { rowSize: 5, columnSize: 5 };
  const board = new Board(config);
  expect(() => board.createBoardPiece(3, 6)).toThrow('ERR_PIECE_OUT_OF_BOUNDS');
});


it('creates a board piece, sets piece in (-3,3) of the 5x5 grid, and throws ERR_PIECE_OUT_OF_BOUNDS', () => {
  const config = { rowSize: 5, columnSize: 5 };
  const board = new Board(config);
  expect(() => board.createBoardPiece(-3, 3)).toThrow('ERR_PIECE_OUT_OF_BOUNDS');
});


it('creates a board piece, sets piece in (3,-3) of the 5x5 grid, and throws ERR_PIECE_OUT_OF_BOUNDS', () => {
  const config = { rowSize: 5, columnSize: 5 };
  const board = new Board(config);
  expect(() => board.createBoardPiece(-3, 3)).toThrow('ERR_PIECE_OUT_OF_BOUNDS');
});


it('creates a board piece and sets piece in (2,1) of the 7x5 grid', () => {
  const config = { rowSize: 7, columnSize: 5 };
  const board = new Board(config);
  const piece = board.createBoardPiece(2, 1);

  const gridArray = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, piece, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ];

  expect(piece.getCoordinates()).toEqual({ row: 2, col: 1 });
  expect(board.grid).toStrictEqual(gridArray);
});


it('creates a board piece and sets piece in (3,4) of the 7x5 grid', () => {
  const config = { rowSize: 7, columnSize: 5 };
  const board = new Board(config);
  const piece = board.createBoardPiece(3, 4);

  const gridArray = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, piece],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ];

  expect(piece.getCoordinates()).toEqual({ row: 3, col: 4 });
  expect(board.grid).toStrictEqual(gridArray);
});


it('creates a board piece and sets piece in (0,0) of the 7x5 grid', () => {
  const config = { rowSize: 7, columnSize: 5 };
  const board = new Board(config);
  const piece = board.createBoardPiece(0, 0);

  const gridArray = [
    [piece, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ];

  expect(piece.getCoordinates()).toEqual({ row: 0, col: 0 });
  expect(board.grid).toStrictEqual(gridArray);
});

it('creates a board piece and sets piece in (6,4) of the 7x5 grid', () => {
  const config = { rowSize: 7, columnSize: 5 };
  const board = new Board(config);
  const piece = board.createBoardPiece(6, 4);

  const gridArray = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, piece],
  ];

  expect(piece.getCoordinates()).toEqual({ row: 6, col: 4 });
  expect(board.grid).toStrictEqual(gridArray);
});


it('creates a board piece and sets piece in (0,4) of the 7x5 grid', () => {
  const config = { rowSize: 7, columnSize: 5 };
  const board = new Board(config);
  const piece = board.createBoardPiece(0, 4);

  const gridArray = [
    [{}, {}, {}, {}, piece],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
  ];

  expect(piece.getCoordinates()).toEqual({ row: 0, col: 4 });
  expect(board.grid).toStrictEqual(gridArray);
});

it('creates a board piece and sets piece in (6,0) of the 7x5 grid', () => {
  const config = { rowSize: 7, columnSize: 5 };
  const board = new Board(config);
  const piece = board.createBoardPiece(6, 0);

  const gridArray = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
    [piece, {}, {}, {}, {}],
  ];

  expect(piece.getCoordinates()).toEqual({ row: 6, col: 0 });
  expect(board.grid).toStrictEqual(gridArray);
});


it('creates a board piece, sets piece in (7,3) of the 7x5 grid, and throws ERR_PIECE_OUT_OF_BOUNDS', () => {
  const config = { rowSize: 7, columnSize: 5 };
  const board = new Board(config);
  expect(() => board.createBoardPiece(7, 3)).toThrow('ERR_PIECE_OUT_OF_BOUNDS');
});


it('creates a board piece, sets piece in (3,7) of the 7x5 grid, and throws ERR_PIECE_OUT_OF_BOUNDS', () => {
  const config = { rowSize: 7, columnSize: 5 };
  const board = new Board(config);
  expect(() => board.createBoardPiece(3, 7)).toThrow('ERR_PIECE_OUT_OF_BOUNDS');
});


it('creates a board piece, sets piece in (-3,3) of the 7x5 grid, and throws ERR_PIECE_OUT_OF_BOUNDS', () => {
  const config = { rowSize: 7, columnSize: 5 };
  const board = new Board(config);
  expect(() => board.createBoardPiece(-3, 3)).toThrow('ERR_PIECE_OUT_OF_BOUNDS');
});


it('creates a board piece, sets piece in (3,-3) of the 7x5 grid, and throws ERR_PIECE_OUT_OF_BOUNDS', () => {
  const config = { rowSize: 7, columnSize: 5 };
  const board = new Board(config);
  expect(() => board.createBoardPiece(-3, 3)).toThrow('ERR_PIECE_OUT_OF_BOUNDS');
});

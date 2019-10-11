/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-10 00:22:54
# Last Modified by: balucan.js
# Last Modified time: 2019-10-11 15:18:26
# ---------------------------------------------
# ---------------------------------------------*/
const BoardPiece = require('../src/piece');

const setCoordinateMock = jest.fn();

beforeEach(() => setCoordinateMock.mockClear());


it('sets coordinates as (3,3)', () => {
  const piece = new BoardPiece(0, setCoordinateMock);
  piece.setCoordinates(3, 3);
  expect(piece.getCoordinates()).toEqual({ row: 3, col: 3 });
  expect(setCoordinateMock).toHaveBeenCalledTimes(1);
});

it('sets coordinates as (0,0)', () => {
  const piece = new BoardPiece(0, setCoordinateMock);
  piece.setCoordinates(0, 0);
  expect(piece.getCoordinates()).toEqual({ row: 0, col: 0 });
  expect(setCoordinateMock).toHaveBeenCalledTimes(1);
});


it('sets coordinates as (1,4)', () => {
  const piece = new BoardPiece(0, setCoordinateMock);
  piece.setCoordinates(1, 4);
  expect(piece.getCoordinates()).toEqual({ col: 1, row: 4 });
  expect(setCoordinateMock).toHaveBeenCalledTimes(1);
});

it('sets coordinates as (4,1)', () => {
  const piece = new BoardPiece(0, setCoordinateMock);
  piece.setCoordinates(4, 1);
  expect(piece.getCoordinates()).toEqual({ col: 4, row: 1 });
  expect(setCoordinateMock).toHaveBeenCalledTimes(1);
});


it('sets coordinates as (2,3), and moves north', () => {
  const piece = new BoardPiece(0, setCoordinateMock);
  piece.setCoordinates(2, 3);
  expect(piece.getCoordinates()).toEqual({ col: 2, row: 3 });
  expect(setCoordinateMock).toHaveBeenCalledTimes(1);

  piece.moveNorth();
  expect(piece.getCoordinates()).toEqual({ col: 2, row: 4 });
  expect(setCoordinateMock).toHaveBeenCalledTimes(2);
});

it('sets coordinates as (3,2), and moves south', () => {
  const piece = new BoardPiece(0, setCoordinateMock);
  piece.setCoordinates(3, 2);
  expect(piece.getCoordinates()).toEqual({ col: 3, row: 2 });
  expect(setCoordinateMock).toHaveBeenCalledTimes(1);

  piece.moveSouth();
  expect(piece.getCoordinates()).toEqual({ col: 3, row: 1 });
  expect(setCoordinateMock).toHaveBeenCalledTimes(2);
});

it('sets coordinates as (2,3), and moves east', () => {
  const piece = new BoardPiece(0, setCoordinateMock);
  piece.setCoordinates(2, 3);
  expect(piece.getCoordinates()).toEqual({ col: 2, row: 3 });
  expect(setCoordinateMock).toHaveBeenCalledTimes(1);

  piece.moveEast();
  expect(piece.getCoordinates()).toEqual({ col: 3, row: 3 });
  expect(setCoordinateMock).toHaveBeenCalledTimes(2);
});

it('sets coordinates as (3,4), and moves west', () => {
  const piece = new BoardPiece(0, setCoordinateMock);
  piece.setCoordinates(3, 4);
  expect(piece.getCoordinates()).toEqual({ col: 3, row: 4 });
  expect(setCoordinateMock).toHaveBeenCalledTimes(1);

  piece.moveWest();
  expect(piece.getCoordinates()).toEqual({ col: 2, row: 4 });
  expect(setCoordinateMock).toHaveBeenCalledTimes(2);
});

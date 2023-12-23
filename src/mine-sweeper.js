const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resMatrix = [];

  for (let i = 0; i < matrix.length; i += 1) {
    resMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      resMatrix[i][j] = 0;
      // check left
      if (i >= 0 && i < matrix.length && (j - 1) >= 0 && (j - 1) < matrix[i].length && matrix[i][j - 1]) resMatrix[i][j] += 1;
      // check right
      if (i >= 0 && i < matrix.length && (j + 1) >= 0 && (j + 1) < matrix[i].length && matrix[i][j + 1]) resMatrix[i][j] += 1;
      // check up
      if ((i - 1) >= 0 && (i - 1) < matrix.length && j >= 0 && j < matrix[i].length && matrix[i - 1][j]) resMatrix[i][j] += 1;
      // check down
      if ((i + 1) >= 0 && (i + 1) < matrix.length && j >= 0 && j < matrix[i].length && matrix[i + 1][j]) resMatrix[i][j] += 1;
      // check left up
      if ((i - 1) >= 0 && (i - 1) < matrix.length && (j - 1) >= 0 && (j - 1) < matrix[i].length && matrix[i - 1][j - 1]) resMatrix[i][j] += 1;
      // check right up
      if ((i - 1) >= 0 && (i - 1) < matrix.length && (j + 1) >= 0 && (j + 1) < matrix[i].length && matrix[i - 1][j + 1]) resMatrix[i][j] += 1;
      // check left down
      if ((i + 1) >= 0 && (i + 1) < matrix.length && (j - 1) >= 0 && (j - 1) < matrix[i].length && matrix[i + 1][j - 1]) resMatrix[i][j] += 1;
      // check right down
      if ((i + 1) >= 0 && (i + 1) < matrix.length && (j + 1) >= 0 && (j + 1) < matrix[i].length && matrix[i + 1][j + 1]) resMatrix[i][j] += 1;
    }
  }
  return resMatrix;
}

module.exports = {
  minesweeper
};

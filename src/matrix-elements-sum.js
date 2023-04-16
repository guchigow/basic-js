const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let cur = i;
      if (i === 0) {
        cur = 0;
      } else {
        cur = cur - 1;
      }
      if (matrix[cur][j] !== 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};

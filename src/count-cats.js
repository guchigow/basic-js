const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function checkSubArray(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') {
      continue;
    }
    if (arr[i].length !== 2) {
      continue;
    }
    if (arr[i] === '^^') {
      count++;
    }
  }
  return count;
}

function countCats(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    count += checkSubArray(matrix[i]);
  }
  return count;
}

module.exports = {
  countCats
};

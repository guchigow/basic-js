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

function checkPosition(pos) {
  if (pos !== undefined) {
    return (pos) ? 1 : 0;
  }
  return 0;
}

function checkCurLevel(subArr, j) {
  let bombsAround = 0;
  bombsAround += checkPosition(subArr[j - 1]); //check left position
  bombsAround += checkPosition(subArr[j + 1]); //check right position
  return bombsAround;
}

function checkOtherLevel(level, j) {
  let bombsAround = 0;
  if (level !== undefined) {
    bombsAround += (level[j]) ? 1 : 0;// check top or down
    bombsAround += checkPosition(level[j - 1]); //left diagonal check
    bombsAround += checkPosition(level[j + 1]); //right diagonal check
  }
  return bombsAround;
}

function checkSubArr(matrix, i) {
  let resSubArr = [];
  for (let j = 0; j < matrix[i].length; j++) {
    let bombsAround = 0;
    bombsAround += checkCurLevel(matrix[i], j); //check left and right position
    bombsAround += checkOtherLevel(matrix[i - 1], j); // check top array
    bombsAround += checkOtherLevel(matrix[i + 1], j); // check down array
    resSubArr.push(bombsAround);
  }
  return resSubArr;
}

function minesweeper(matrix) {
  let resMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    let resSubArr = checkSubArr(matrix, i); // check current sub array
    resMatrix.push(resSubArr); // result of sub array to result matrix
  }
  return resMatrix;
}

module.exports = {
  minesweeper
};

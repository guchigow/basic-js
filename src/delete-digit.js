const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    let tmp = Array.from(str);
    tmp.splice(i, 1); //remove one char
    tmp = tmp.join('');
    arr.push(Number(tmp));
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};

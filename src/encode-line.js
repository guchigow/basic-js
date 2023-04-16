const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    let cur = str[i];
    let next = str[i + 1];
    if (cur === next) {
      count++;
    } else {
      if (count === 1) {
        res += cur;
      } else {
        res += `${count}${cur}`;
        count = 1;
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine
};

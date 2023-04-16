const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */


function isSimpleArray(arr, controls) {
  for (let i = 0; i < controls.length; i++) {
    if (arr.includes(controls[i])) {
      return false;
    }
  }
  return true;
}

function transform(arr) {
  const controls = ['--discard-prev', '--double-prev', '--double-next', '--discard-next'];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length < 1) {
    return arr;
  }
  if (isSimpleArray(arr, controls)) {
    return arr;
  }
  const newArr = [];
  let lastState = 'notPush';
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const prev = newArr[newArr.length - 1];
    const next = arr[i + 1];
    switch (current) {
      case '--double-next':
        if (next) {
          newArr.push(next);
        }
        break;
      case '--double-prev':
        if (prev) {
          newArr.push(prev);
        }
        break;
      case '--discard-next':
        lastState = '--discard-next';
        break;
      case '--discard-prev':
        newArr.pop();
        break;
      default:
        if (lastState !== '--discard-next') {
          newArr.push(current);
        } else {
          i += 1;
          lastState = 'notPush';
        }
    }
  }
  return newArr;
}

module.exports = {
  transform
};

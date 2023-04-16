const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function makeLine(str, times, separator) {
  let localArr = [];
  if (times === 0) {
    return str;
  }
  for (let i = 0; i < times; i++) {
    localArr.push(str);
  }
  return localArr.join(separator);
}

function repeater(str, options) {
  const string = String(str);
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 0;
  const separator = String(options.separator ? options.separator : '+');
  let addition;
  if (typeof options.addition === 'boolean') {
    addition = options.addition.toString();
  } else if (options.addition === null) {
    addition = String(options.addition);
  } else {
    addition = String(options.addition ? options.addition : '');
  }
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0;
  let additionSeparator = '';
  if (additionRepeatTimes > 1 && addition.length > 1) {
    if (!options.additionSeparator) {
      additionSeparator = '|'
    } else {
      additionSeparator = options.additionSeparator;
    }
  }
  let localArr = [];
  if (repeatTimes === 0) {
    localArr.push(`${string}${addition}`);
  } else {
    for (let i = 0; i < repeatTimes; i++) {
      let addStr = makeLine(addition, additionRepeatTimes, additionSeparator);
      localArr.push(`${string}${addStr}`);
    }
  }
  return localArr.join(separator);
}

module.exports = {
  repeater
};

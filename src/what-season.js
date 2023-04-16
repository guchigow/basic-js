const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */


function getIndexSeason(month) {
  const year = [
    [11, 0, 1],
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10]
  ];
  for (let i = 0; i < year.length; i++) {
    const curSeason = year[i];
    if (curSeason.includes(month)) {
      return i;
    }
  }
}

function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if (Number.isNaN(Date.parse(date))) {
    throw new Error('Invalid date!');
  }
  if (Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }
  try {
    date.getMonth();
  } catch (error) {
    throw new Error('Invalid date!');
  }
  const seasonArr = ['winter', 'spring', 'summer', 'autumn'];
  const month = date.getMonth();
  const index = getIndexSeason(month);
  return seasonArr[index];
}

module.exports = {
  getSeason
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function isValidName(name) {
  return typeof name === 'string';
}

function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const arr = [];
  members.forEach(name => {
    if (isValidName(name)) {
      let correctName = name.trim();
      arr.push(correctName[0].toUpperCase());
    };
  });
  return arr.sort().join('');
}

module.exports = {
  createDreamTeam
};

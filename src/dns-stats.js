const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function countOneStr(str, obj) {
  const arr = str.split('.').reverse().map((item) => {
    return `.${item}`
  });
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
    if (obj.hasOwnProperty(res)) {
      obj[res] += 1;
    } else {
      obj[res] = 1;
    }
  }
}

function getDNSStats(domains) {
  if (domains.length === 0) {
    return {};
  }
  let res = {};
  for (let i = 0; i < domains.length; i++) {
    countOneStr(domains[i], res);
  }
  return res;
}

module.exports = {
  getDNSStats
};

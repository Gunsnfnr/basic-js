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
function getDNSStats(domains) {  
  const obj = {};
  domains.forEach(element => {
    const splitted = element.split('.');
    const firstDns = '.' + splitted[splitted.length - 1];
    if (firstDns in obj) {
      obj[firstDns] = obj[firstDns] + 1;
    } else {
      obj[firstDns] = 1;
    }
    let acc = firstDns;
    for (let i = splitted.length - 2; i >= 0; i -= 1) {
      acc += '.' + splitted[i];
      if (acc in obj) {
        obj[acc] = obj[acc] + 1;
      } else {
        obj[acc] = 1;
      }
    }
  });
  return obj;
}

module.exports = {
  getDNSStats
};

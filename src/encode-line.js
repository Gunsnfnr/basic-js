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
  let result = '';
  let acc = '';
  let currQuantity = 1;
  for (let i = 0; i <= str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      acc = str[i];
      currQuantity += 1;
    } else {
      if (acc === '') {
        result += str[i];
      } else {
        result += currQuantity + acc;
        currQuantity = 1;
        acc = '';
      }
    }
  }

  return result;
}


module.exports = {
  encodeLine
};

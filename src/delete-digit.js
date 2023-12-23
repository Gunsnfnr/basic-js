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
  const string_n = String(n);
  console.log('string_n: ', string_n);
  const arr = [];
  let max = null;
  for (let i = 0; i < string_n.length; i += 1) {
    arr.push(string_n.slice(0, i) + string_n.slice(i + 1, string_n.length));
  }
  arr.forEach(element => {
    if (element > max) max = element;
  });
  console.log('max: ', max);
  return +max;
}
module.exports = {
  deleteDigit
};

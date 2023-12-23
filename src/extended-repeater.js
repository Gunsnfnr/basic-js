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
function repeater(str, options) {
  let summand = '';
  let result = '';
  if (options.addition === false) options.addition = 'false';
  if (options.addition === null) options.addition = 'null';

  if (!options.additionRepeatTimes) options.additionRepeatTimes = 0;
  if (!options.additionRepeatTimes && options.addition) {
    options.additionRepeatTimes = 1;
  }
  if (!options.additionSeparator) options.additionSeparator = '|';
  for (let i = 0; i < options.additionRepeatTimes; i += 1) {
    i > 0 ? summand += options.additionSeparator + options.addition : summand = str + options.addition;
  }
  if (!summand) summand = str;
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.separator) options.separator = '+';
  for (let i = 0; i < options.repeatTimes; i += 1) {
    i > 0 ? result += options.separator + summand : result = summand;
  }
  return result;
}

module.exports = {
  repeater
};

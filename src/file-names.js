const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of files, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let resArr = [];
  names.forEach(element => {
    if (resArr.includes(element)) {
      let copyElement = element + '(1)';
      if (resArr.includes(copyElement)) {
        const index = copyElement.slice(copyElement.indexOf('(') + 1, copyElement.indexOf(')'));
        copyElement = element + '(' + (+index + 1) + ')';
        resArr.push(copyElement);
        // }
      } else {
        resArr.push(copyElement);
      }
    } else {
      resArr.push(element);
    }
  });
  return resArr;
}

module.exports = {
  renameFiles
};

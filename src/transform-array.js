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
function transform(arr) {
  let filteredArr = [];
  if (!Array.isArray(arr)) {
    throw new Error ("\'arr\' parameter must be an instance of the Array!");
  }
  let myArr = [];
  arr.forEach(element => {
    myArr.push(element);
  });

  for (let i = 0; i < myArr.length; i += 1) {
    
    if (myArr[i] === '--double-next' && (i < (myArr.length - 1))) {
      myArr.splice(i, 1, myArr[i + 1]);
    } else if (myArr[i] === '--double-next') myArr.splice(i, 1)

    if (myArr[i] === '--double-prev' && i > 0) {
      myArr.splice(i, 1, myArr[i - 1]);
    } else if (myArr[i] === '--double-prev') myArr.splice(i, 1)

    if (myArr[i] === '--discard-prev' && i > 0) {
      myArr.splice(i - 1 , 2);
    } else if (myArr[i] === '--discard-prev') myArr.splice(i, 1)

    if (myArr[i] === '--discard-next' && (i < (myArr.length - 1))) {
      myArr.splice(i, 2, 'deleted', 'deleted');
    } else if (myArr[i] === '--discard-next') myArr.splice(i, 1)
  }
  filteredArr = myArr.filter( el => el !== 'deleted');

  return filteredArr;
}

module.exports = {
  transform
};

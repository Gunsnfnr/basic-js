const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 * depthCalc.calculateDepth([1, 2, 3, [4, 5], 6, [[7]]]) => 3
 */
class DepthCalculator {
  maxDepth = 1;
  isNotFlatArrayIndex = 0;
  isArrayInside;
  
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return false;
    let newArr = arr.slice(0, arr.length);
    if (this.isNotFlatArrayIndex === 0) {
      this.maxDepth = 1;
    }
    newArr = newArr.flat(this.isNotFlatArrayIndex);
    this.isArrayInside = false;

    newArr.forEach( element => {
      if (Array.isArray(element)) {
        this.isArrayInside = true;
      }
    });

    if (this.isArrayInside) {
      this.maxDepth += 1;
      this.isNotFlatArrayIndex = 1;
      return this.calculateDepth(newArr);
    } else {
      this.isNotFlatArrayIndex = 0;
      return this.maxDepth;
    }
  }
}

module.exports = {
  DepthCalculator
};

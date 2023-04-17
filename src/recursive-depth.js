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
 *
 */
class DepthCalculator {
  /*
    constructor() {
      this.maxDeep = 1;
    }

    calculateOneArr(arr, curDeep) {
      let res = 0;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          res = this.calculateOneArr(arr[i], curDeep + 1);
        }
        if (res > this.maxDeep) {
          this.maxDeep = res;
        }
      }
      return curDeep;
    }

    calculateDepth(arr) {
      let curDeep = 0;
      if (arr.length === 0) {
        return 1;
      }
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          this.calculateOneArr(arr[i], curDeep + 1);
        }
      }
      return this.maxDeep + 1;
    }
  */

  // constructor() {
  //   this.maxDeep = 1;
  // }

  // calculateDepth(arr, curDeep = 1, first = true) {
  //   let res = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (Array.isArray(arr[i])) {
  //       res = this.calculateDepth(arr[i], curDeep + 1, false);
  //       if (res > this.maxDeep) {
  //         this.maxDeep = res;
  //       }
  //     }
  //   }
  //   if (first) {
  //     return this.maxDeep;
  //   }
  //   return curDeep;
  // }

  calculateDepth(arr) {
    let maxDeep = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let curDeep = 1 + this.calculateDepth(arr[i]);
        if (curDeep > maxDeep) {
          maxDeep = curDeep;
        }
      }
    }
    return maxDeep;
  }
}

module.exports = {
  DepthCalculator
};

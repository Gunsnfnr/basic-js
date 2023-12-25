const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (typeof String(value) !== 'string') return false;
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position > this.chain.length || position < 1) {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    };
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    res = '';
    visual = this.chain.reduce((acc, currElem) => acc === null ? currElem : acc + '~~' + currElem, null);
    this.chain = [];
    return visual;
  }
};

module.exports = {
  chainMaker
};

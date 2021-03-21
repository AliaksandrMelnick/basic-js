const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position)){
      this.chain = [];
      throw new Error();
    }
    if(position - 1 < 0){
      this.chain = [];
      throw new Error();
    }
    if(position > this.chain.length){
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = '';
    for(let i=0; i<this.chain.length; i++){
      if(i + 1 >= this.chain.length){
        res += `( ${this.chain[i]} )`;
      }
      else{
        res += `( ${this.chain[i]} )~~`;
      }
    }
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;

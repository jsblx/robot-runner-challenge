/* # ---------------------------------------------
# ---------------------------------------------
# Author: Joseph Ian Balucan
# Date:   2019-10-10 00:14:12
# Last Modified by: balucan.js
# Last Modified time: 2019-10-10 08:47:44
# ---------------------------------------------
# ---------------------------------------------*/

const validOutputType = ['console'];

class IO {
  constructor(type = 'console') {
    this.type = type;
  }


  setType(type) {
    if (validOutputType.indexOf(type) >= 0) {
      this.type = type;
    }
  }

  output(...args) {
    const { type } = this;
    switch (type) {
      case 'console':
      default:
        console.log(...args);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  debug(...args) {
    if (process.env.DEBUG === 'true') {
      console.log(...args);
    }
  }
}

const io = new IO();

module.exports = io;

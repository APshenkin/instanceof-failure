const { Error1 } = require('./Errors');

class Data {
  on(handler) {
    const res = handler();

    console.log('data check Error1', res instanceof Error1);
    console.log('data check Error', res instanceof Error);
  }
}

module.exports = Data

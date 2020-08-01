const Data = require('./data');
const { Error1 } = require('./errors');

class Service {
  constructor(data) {
    this.data = data
  }

async init() {
  this.data.on(() => {
    const es = new Error1('test');
    console.log('service check Error1', es instanceof Error1);
    console.log('service check Error', es instanceof Error);

    return es;
  });
}
}

const data = new Data();
const service = new Service(data);

service.init();

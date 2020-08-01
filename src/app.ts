import Data from './data';
import { Error1 } from './errors';

class Service {
  constructor(
    private data: Data,
  ) {}

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

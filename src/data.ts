import { Error1 } from './Errors';

export default class Data {
  on(handler: (req: any) => any) {
    const res = handler({});

    console.log('data check Error1', res instanceof Error1);
    console.log('data check Error', res instanceof Error);
  }
}

import { MilitairePipe } from './militaire.pipe';

describe('MilitairePipe', () => {
  it('transform 900 to 9:00 AM', () => {
    const pipe = new MilitairePipe();
    expect(pipe.transform(900)).toEqual('9:00 AM');
  });
  
  it('transform 1300 to 1:00 PM', () => {
    const pipe = new MilitairePipe();
    expect(pipe.transform(1300)).toEqual('1:00 PM');
  });
});

import { CurrencyPipe } from './currency.pipe.pipe';

describe('CurrencyPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});

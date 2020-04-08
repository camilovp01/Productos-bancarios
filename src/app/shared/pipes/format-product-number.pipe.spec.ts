import { FormatProductNumberPipe } from './format-product-number.pipe';

xdescribe('FormatProductNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatProductNumberPipe();
    expect(pipe).toBeTruthy();
  });
});

import { Beer } from './beer';

describe('Beer', () => {
  it('should create an instance', () => {
    expect(new Beer('', '', '', false)).toBeTruthy();
  });
});

import defaultMessage, { message } from '../src';

describe('index.ts', () => {
  it('should export a string', () => {
    expect(message).toBe('Hello');
    expect(defaultMessage).toBe(message);
  });
});

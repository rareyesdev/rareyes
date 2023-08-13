import { asyncDelay } from './async-delay';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('asyncDelay', () => {
  it('should return the given value', () => {
    const value = 'value';
    const promise = asyncDelay(100, { resolveWith: value });

    jest.advanceTimersByTime(100);

    expect(promise).resolves.toBe(value);
  });

  it('should reject the given value', () => {
    const value = 'value';
    const promise = asyncDelay(100, { rejectWith: value });

    jest.advanceTimersByTime(100);

    expect(promise).rejects.toBe(value);
  });
});

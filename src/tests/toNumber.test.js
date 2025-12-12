import toNumber from '../toNumber.js';

describe('toNumber positive cases', () => {
  test('Converts a string format decimal number of to a number which can be used as a price', () => {
    expect(toNumber("3.2")).toBe(3.2);
  });

  test('Converts a string format of an Integer to a number which can be used as a price', () => {
    expect(toNumber("3")).toBe(3);
  });

  test('Converts a bigger string format decimal number of to a number which can be used as a price', () => {
    expect(toNumber("3125.2")).toBe(3125.2);
  });

  test('Converts a bigger string format of an Integer to a number which can be used as a price', () => {
    expect(toNumber("3612")).toBe(3612);
  });

  test('Converts binary strings to numbers', () => {
    expect(toNumber('0b1')).toBe(1);
    expect(toNumber('0b0')).toBe(0);
    expect(toNumber('0b110')).toBe(6);
    expect(toNumber('0b111')).toBe(7);
  });

  test('Converts string with extra white space to a number', () => {
    expect(toNumber("  3  ")).toBe(3);
  });

  test('Handles empty string and undefined correctly', () => {
    expect(toNumber("")).toBe(0);
    expect(toNumber(undefined)).toBeNaN();
  });

  test('Return number with object with valueOf being integer', () => {
    expect(toNumber({ valueOf: () => 1 })).toBe(1);
  });

  test('Return number with object with valueOf being decimal', () => {
    expect(toNumber({ valueOf: () => 1.1 })).toBe(1.1);
  });

  test('Return number with object with valueOf being string', () => {
    expect(toNumber({ valueOf: () => '1.1' })).toBe(1.1);
  });

  test('Return NaN with object with valueOf being and empty object', () => {
    expect(toNumber({ valueOf: () => ({}) })).toBeNaN();
  });

  test('Returns Nan for symbol input', () => {
    expect(toNumber(Symbol())).toBeNaN();
  });

  test('If number is asserted it is returned', () => {
    expect(toNumber(0)).toBe(0);
    expect(toNumber(1)).toBe(1);
    expect(toNumber(-1.1)).toBe(-1.1);
    expect(toNumber(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
    expect(toNumber(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER);
    expect(toNumber(Infinity)).toBe(Infinity);
    expect(toNumber(NaN)).toBeNaN();
  });
});
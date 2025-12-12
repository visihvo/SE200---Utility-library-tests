import add from '../add.js';


describe('Should return wanted number.', () => {
  test('Adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
  test('Adds zero to another number', () => {
    expect(add(0, 1)).toBe(1);
  });
  test('Adds zero to zero', () => {
    expect(add(0, 0)).toBe(0);
  });
  test('Adds negative to positive', () => {
    expect(add(-2, 5)).toBe(3);
  });
  test('Adds negative to negative', () => {
    expect(add(-2, -5)).toBe(-7);
  });
  test('Doesnt add to max value', () => {
    expect(add(Number.MAX_VALUE, 1)).toBe(Number.MAX_VALUE);
  });
});

describe('Should return integer', () => {

  test('returns integer when adding string', () => {
    expect(Number.isInteger(add("ni"+1))).toBe(true);
  });
});
import isEmpty from '../isEmpty.js';

describe('Should return true.', () => {
  test('Returns true when an array is truly empty', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('Returns true when called with null', () => {
    expect(isEmpty(null)).toBe(true); 
  });

  test('Returns true when called with an int number', () => {
    expect(isEmpty(5)).toBe(true);
  });

  test('Returns true when called with a decimal number', () => {
    expect(isEmpty(5.12)).toBe(true);
  });

  test('Returns true when called with an empty set', () => {
    const set = new Set([]);
    expect(isEmpty(set)).toBe(true);
  });

  test('Returns true when called with an empty map', () => {
    const map = new Map([]);
    expect(isEmpty(map)).toBe(true);
  })

  test('Returns true when called with true', () => {
    expect(isEmpty(true)).toBe(true);
  })
});

describe('Should return false.', () => {
  test('One length string returns false', () => {
    expect(isEmpty("a")).toBe(false);
  });

  test('Non-empty object returns false', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false);
  });

  test('Array with multiple elements returns false', () => {
    expect(isEmpty([1,2,3])).toBe(false);
  })
});
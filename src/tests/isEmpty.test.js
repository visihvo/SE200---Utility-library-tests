import isEmpty from '../isEmpty.js';

describe('Should return true.', () => {
  test('Returns true when called with null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('Returns true when called with an int type', () => {
    expect(isEmpty(-1)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(5)).toBe(true);
  });

  test('Returns true when called with a decimal number', () => {
    expect(isEmpty(5.12)).toBe(true);
    expect(isEmpty(0.0001)).toBe(true);
    expect(isEmpty(-0.0001)).toBe(true);
  });

  test('Should return true for empty string', () => {
    expect(isEmpty("")).toBe(true);
  });

  test('Should return true for empty Buffer', () => {
    const buf = Buffer.from('');
    expect(isEmpty(buf)).toBe(true);
  });


  test('First returns false with an empty set, then return false after adding an object to the set', () => {
    const set = new Set([]);
    expect(isEmpty(set)).toBe(true);
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });

  test('Returns true when called with an empty map, then return false after adding an object to the map', () => {
    const map = new Map([]);
    expect(isEmpty(map)).toBe(true);
    map.set('key', 'value');
    expect(isEmpty(map)).toBe(false);
  });

  test('Returns true when called with true', () => {
    expect(isEmpty(true)).toBe(true);
  });

  test('Returns true when called with an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });
});

describe('Should return false.', () => {
  test('One length string returns false', () => {
    expect(isEmpty("a")).toBe(false);
  });

  test('Normal random string returns false', () => {
    expect(isEmpty("Bear meat")).toBe(false);
  });

  test('Non-empty object returns false', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false);
  });

  test('Shopping cart object returns true when empty and false when items are added', () => {
    const cart = {};
    expect(isEmpty(cart)).toBe(true);
    cart.items = ['item1', 'item2'];
    expect(isEmpty(cart)).toBe(false);
});

  test('Array with multiple elements returns false', () => {
    expect(isEmpty([1,2,3])).toBe(false);
  })
});
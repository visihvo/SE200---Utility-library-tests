import toNumber from '../toNumber.js';

test('Converts a string format of an Integer to a number', () => {
  expect(toNumber("3")).toBe(3);
});
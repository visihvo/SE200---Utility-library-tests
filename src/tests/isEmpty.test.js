import isEmpty from '../isEmpty.js';

test('Returns correct value (true) when an array is truly empty', () => {
  expect(isEmpty([])).toBe(true);
});
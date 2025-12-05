import eq from '../eq.js';

test('Compares two strings right', () => {
  expect(eq("abc", "abc")).toBe(true);
});
import capitalize from '../capitalize.js';

test('Changes first character of a word to be capital', () => {
  expect(capitalize("beer")).toBe("Beer");
});
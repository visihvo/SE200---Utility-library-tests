import capitalize from '../capitalize.js';

test('Changes first character of a word to be capital', () => {
  expect(capitalize("beer")).toBe("Beer");
});
test('Changes all but first character to lowercase', () => {
  expect(capitalize("BEER")).toBe("Beer");
});
test('Changes all but first character to lowercase, and first character to upper case', () => {
  expect(capitalize("bEER")).toBe("Beer");
});
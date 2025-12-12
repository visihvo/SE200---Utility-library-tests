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
test("Doesn't break with UTF-8 characters",() => {
  expect(capitalize("äiti")).toBe("Äiti");
});
test("Doesn't break with empty string",() => {
  expect(capitalize("")).toBe("");
});
test("Doesn't break with non-string input",() => {
  expect(capitalize(1234)).toBe("1234");
});
test("Doesn't break when the string includes spaces",() => {
  expect(capitalize("en haJoa vÄlilYönneistä")).toBe("En hajoa välilyönneistä");
} );
test("Doesn't break with null string",() => {
  expect(capitalize(null)).toBe("");
});
test("Doesn't break when first character isn't a letter",() => {
  expect(capitalize("1äiti")).toBe("1äiti");
});
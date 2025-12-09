import eq from '../eq.js';

test('Compares two strings right', () => {
  expect(eq("abc", "abc")).toBe(true);
});
test('Compares two strings incorrect', () => {
  expect(eq("abc", "ab")).toBe(false);
});
test('Compares two numbers right', () => {
  expect(eq(5, 5)).toBe(true);
});
test('Compares two numbers incorrect', () => {
  expect(eq(5, 10)).toBe(false);
});
test('Compares two objects same reference', () => {
  const obj = { 'a': 1 };
  expect(eq(obj, obj)).toBe(true);
});
test('Compares two objects different reference', () => {
  const obj1 = { 'a': 1 };
  const obj2 = { 'a': 1 };
  expect(eq(obj1, obj2)).toBe(false);
});
test('Compares NaN values', () => {
  expect(eq(NaN, NaN)).toBe(true);
});
test('Compares different types', () => {
  expect(eq('5', 5)).toBe(false);
}); 
test('Compares null values', () => {
  expect(eq(null, null)).toBe(true);
});
test('Compares undefined values', () => {
  expect(eq(undefined, undefined)).toBe(true);
});
test('Compares boolean similar values', () => {
  expect(eq(true, true)).toBe(true);
});
test('Compares boolean different values', () => {
  expect(eq(true, false)).toBe(false);
});

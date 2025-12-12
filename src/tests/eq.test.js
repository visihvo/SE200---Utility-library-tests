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
test('Compares a product with itself', () => {
  const obj = { 'name': 'El gato', 'vol':15.7 };
  expect(eq(obj, obj)).toBe(true);
});
test('Compares if two different products are the same', () => {
  const obj1 = { 'name': 'El gato', 'vol':15.7 }; // different years :)
  const obj2 = { 'name': 'El gato', 'vol':15.7 };
  expect(eq(obj1, obj2)).toBe(false);
});
test('Compares NaN values', () => {
  expect(eq(NaN, NaN)).toBe(true);
});
test('Compares different types', () => {
  expect(eq('5', 5)).toBe(false);
});
test('Compares different types', () => {
  expect(eq('55', 55)).toBe(false);
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

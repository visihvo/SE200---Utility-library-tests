import chunk from '../chunk.js';

test('Turns an array containing 4 integers into an array containing\
 2 arrays both of which hold 2 integers', () => {
  expect(chunk([1,2,3,4], 2)).toEqual([[1,2],[3,4]]);
});
test('Turns an array containing 4 elements into an array containing\
 4 arrays both of which hold 1 elements', () => {
  expect(chunk(['a','b','c','d'], 1)).toEqual([['a'],['b'],['c'],['d']]);
});
test('Turns an array containing 4 strings into an array containing\
 2 arrays both of which hold 2 strings', () => {
  expect(chunk(['a','b','c','d'], 2)).toEqual([['a', 'b'],['c', 'd']]);
});
test('Turns an array containing 5 strings into an array containing\
 3 arrays holding 2, 2 and 1 strings', () => {
  expect(chunk(['a','b','c','d','e'], 2)).toEqual([['a', 'b'],['c', 'd'],['e']]);
});
test('Default size parameter should be 1', () => {
  expect(chunk([1,2,3])).toEqual([[1],[2],[3]]);
});
test('Array has objects', () => {
  const obj1 = {id: 1};
  const obj2 = {id: 2};
  expect(chunk([obj1, obj2], 1)).toEqual([[obj1], [obj2]]);
});
test('return empty array when given an empty array', () => {
  expect(chunk([], 2)).toEqual([]);
});
test('return empty array when given null', () => {
  expect(chunk(null, 2)).toEqual([]);
});
test('Return same array when array length is set as the length of the array', () => {
  expect(chunk(['a','b','c','d','e'], 5)).toEqual([['a','b','c','d','e']]);
});
test('Array length is one', () => {
  expect(chunk(['a'], 2)).toEqual([['a']]);
});
test('Splits products list of 7 products in to chunks of three elems. 2 even lists and \
  1 odd list leaving 1 element alone in the last one', () => {
  const products = ["Bear meat", "Sandels", "Ale Coq", "Organic carrots", "El Gato", "Black Tower", "Rib eye steak"];
  expect(chunk(products, 3)).toEqual([["Bear meat", "Sandels", "Ale Coq"], ["Organic carrots", "El Gato", "Black Tower"], ["Rib eye steak"]]);
});
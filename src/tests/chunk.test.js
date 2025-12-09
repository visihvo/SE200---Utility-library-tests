import chunk from '../chunk.js';

test('Turns an array containing 4 integers into an array containing\
 2 arrays both of which hold 2 integers', () => {
  expect(chunk([1,2,3,4], 2)).toEqual([[1,2],[3,4]]);
});
test('Turns an array containing 4 elements into an array containing\
 4 arrays both of which hold 1 elements', () => {
  expect(chunk(['a','b','c','d'], 4)).toEqual([['a'],['b'],['c'],['d']]);
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
  expect(chunk([], 2)).toEqual([]);
});
test('Return same array when array length is set as the length of the array', () => {
  expect(chunk(['a','b','c','d','e'], 5)).toEqual([['a','b','c','d','e']]);
});
test('Array length is one', () => {
  expect(chunk(['a'], 2)).toEqual([['a']]);
});



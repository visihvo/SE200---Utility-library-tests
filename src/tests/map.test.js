import map from '../map.js';

test('Increments each element of a list by one', () => {
  expect(map([0,1,2], helperFunc = (num) => {return num+1})).toEqual([1,2,3]);
});
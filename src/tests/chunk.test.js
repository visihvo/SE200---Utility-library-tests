import chunk from '../chunk.js';

test('Turns an array containing 4 elements into an array containing \
    2 arrays both of which hold 2 elements', () => {
  expect(chunk([1,2,3,4], 2)).toEqual([[1,2],[3,4]]);
});
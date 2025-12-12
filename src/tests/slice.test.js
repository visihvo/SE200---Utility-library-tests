import slice from '../slice.js';

test('Splits an array from certain index and returns the \"end part\"\
    of the split', () => {
  expect(slice([1,2,3,4,5], 2)).toEqual([3,4,5]);
});

test('Splits array with both start and end parameters', () => {
  expect(slice([1,2,3,4], 1, 3)).toEqual([2,3]);
});

test('Returns empty array when start is greater than end', () => {
  expect(slice([1,2,3,4], 3, 1)).toEqual([]);
});

test('Returns empty array when start equals end', () => {
  expect(slice([1,2,3,4], 2, 2)).toEqual([]);
});

test('Returns full copy when no parameters provided', () => {
  expect(slice([1,2,3])).toEqual([1,2,3]);
});

test('Returns full copy when negative start is beyond length', () => {
  expect(slice([1,2,3], -10)).toEqual([1,2,3]);
});

test('Returns empty array when array is null', () => {
  expect(slice(null, 0)).toEqual([]);
});

test('Returns empty array when start is beyond length', () => {
  expect(slice([1,2,3], 10)).toEqual([]);
});

test('Does not change original array', () => {
  const arr = [1,2,3,4];
  slice(arr, 1, 3);
  expect(arr).toEqual([1,2,3,4]);
});

test('Asserted end parameter is negative and the indexing goes beyond length of the arr.\
   Should return empty', () => {
    expect(slice([1, 2, 3], 1, -5)).toEqual([]);
});

test('Slices array keeping the 1st element and dropping the last with negative end index', () => {
    expect(slice([1, 2, 3], 0, -1)).toEqual([1,2]);
});

test('Slices array with negative start and negative end', () => {
    expect(slice([1,2,3,4,5], -3, -1)).toEqual([3,4]);
});
import slice from '../slice.js';

test('Splits an array from certain index and returns the \"end part\"\
    of the split', () => {
  expect(slice([1,2,3,4,5], 2)).toEqual([3,4,5]);
});
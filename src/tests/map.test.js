import map from '../map.js';

describe('Positive test cases', () => {
  test('Increments each element of a list by one', () => {
    expect(map([0,1,2], helperFunc = (num) => {
      return num+1
    })).toEqual([1,2,3]);
  });

  test('Succesfully takes a string as a parameter and returns an array\
    with each char as its element modified by a helper function', () => {
    expect(map("abc", helperFunc = (char) => {
      return char + "."
    })).toEqual(["a.", "b.", "c."]);
  });
});

describe('Negative test cases', () => {
  test('Returns empty list when called with empty list', () => {
    expect(map([], helperFunc = () => {return 1})).toEqual([]);
  });
});
import filter from '../filter.js';

test('Filters out objects without a certain value being true', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
    ];

    expect(filter(users, ({ active }) => active)).toStrictEqual([{ 'user': 'barney', 'active': true }]);
});

test('filters one number', () => {
  expect(filter([1,2,3,4], n => n === 2)).toEqual([2]);
});

test('filters even numbers', () => {
  expect(filter([1,2,3,4], n => n % 2 === 0)).toEqual([2,4]);
});

test('returns empty array when no elements match', () => {
  expect(filter([1,3,5], n => n % 2 === 0)).toEqual([]);
});
test('does not change original array', () => {
  const test_array = [1,2,3];
  filter(test_array, n => n > 1);
  expect(test_array).toEqual([1,2,3]);
});
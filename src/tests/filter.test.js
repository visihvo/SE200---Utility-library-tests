import filter from '../filter.js';

test('Filters out objects without a certain value being true', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
    ];

    expect(filter(users, ({ active }) => active)).toStrictEqual([{ 'user': 'barney', 'active': true }]);
});
import words from '../words.js';

describe('Positive cases of words', () => {
    test('Transforms a string with words seperated by spaces to array \
    containing the words as its element', () => {
      expect(words("dog cat cow")).toEqual(["dog", "cat", "cow"]);
  });

  test('Ignores punctuation by default', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });

  test('Return wanted elements with specified pattern', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles'])
  });

  test('Handles string from test plan: "bear meat, food, healthy"', () => {
    expect(words("bear meat, food, healthy"))
      .toEqual(["bear", "meat", "food", "healthy"]);
  });

  test('Returns empty array for empty string', () => {
    expect(words("")).toEqual([]);
  });

  test('Returns empty array when no ASCII words exist', () => {
    expect(words("!!! ??? ...")).toEqual([]);
  });

  test('Works with unique chars like é and ö', () => {
    expect(words("cäfé mikkö")).toEqual(["cäfé", "mikkö"]);
  });

  test('Preserves spaces inside phrases while splitting only by punctuation', () => {
    const input = "bear meat, food, healthy";

    const result = words(input, /[^,]+/g).map(s => s.trim());

    expect(result).toEqual(["bear meat", "food", "healthy"]);
  });
});

import words from '../words.js';

test('Transforms a string with words seperated by spaces to array \
  containing the words as its element', () => {
  expect(words("dog cat cow")).toEqual(["dog", "cat", "cow"]);
});

// words() also has a possibility to select a patter to filter out the "words"
// by using the 2nd parameter.
import map from '../map.js';

describe('Positive test cases', () => {
  test('Increments each element of a list by one', () => {
    expect(map([0,1,2], x => x + 1)).toEqual([1,2,3]);
  });

  test('Increments single element array correctly', () => {
    expect(map([1], x => x + 1)).toEqual([2]);
  });

  test('Succesfully takes a string as a parameter and returns an array\
    with each char as its element modified by a helper function', () => {
    expect(map("abc", helperFunc = (char) => {
      return char + "."
    })).toEqual(["a.", "b.", "c."]);
  });

  test('Discounts multiple products by 30%', () => {
    const products = [
      { item: "bear meat", price: 10 },
      { item: "salmon", price: 20 },
      { item: "honey", price: 100 }
    ];

    const discounted = map(products, product => ({
      ...product,
      price: + (product.price * 0.7).toFixed(2)
    }));

    expect(discounted).toEqual([
      { item: "bear meat", price: 7 },
      { item: "salmon", price: 14 },
      { item: "honey", price: 70 }
    ]);
  });

  test('Discounts one element list by 30%', () => {
    const products = [
      { item: "bear meat", price: 10 },
    ];

    const discounted = map(products, product => ({
      ...product,
      price: + (product.price * 0.7).toFixed(2)
    }));

    expect(discounted).toEqual([
      { item: "bear meat", price: 7 }
    ]);
  });

  test('Should return empty array for null or undefined input', () => {
    expect(map(null, x => x)).toEqual([]);
    expect(map(undefined, x => x)).toEqual([]);
  });

  test('Iteratee can return undefined', () => {
    const arr = [1, 2, 3];
    const ignore = () => undefined;
    expect(map(arr, ignore)).toEqual([undefined, undefined, undefined]);
  });
});
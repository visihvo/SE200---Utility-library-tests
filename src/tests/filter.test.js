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

test('Filters out fruits, products over the price of 3 and which have stock of 100 or over', () => {
  const products = [ // test products created with ai
    { id: 1, name: "Apple", category: "Fruit", price: 1.2, stock: 100 },
    { id: 2, name: "Banana", category: "Fruit", price: 0.8, stock: 150 },
    { id: 3, name: "Carrot", category: "Vegetable", price: 0.5, stock: 200 },
    { id: 4, name: "Broccoli", category: "Vegetable", price: 1.0, stock: 80 },
    { id: 5, name: "Orange Juice", category: "Drink", price: 2.5, stock: 50 },
    { id: 6, name: "Coffee", category: "Drink", price: 3.0, stock: 30 },
    { id: 7, name: "Milk", category: "Drink", price: 1.5, stock: 60 },
    { id: 8, name: "Strawberry", category: "Fruit", price: 2.0, stock: 70 },
    { id: 9, name: "Spinach", category: "Vegetable", price: 1.3, stock: 90 },
    { id: 10, name: "Watermelon", category: "Fruit", price: 4.0, stock: 20 },
    { id: 11, name: "Green Tea", category: "Drink", price: 2.2, stock: 40 },
    { id: 12, name: "Tomato", category: "Vegetable", price: 0.9, stock: 120 },
    { id: 13, name: "Cheese", category: "Dairy", price: 5.0, stock: 25 },
    { id: 14, name: "Yogurt", category: "Dairy", price: 1.8, stock: 35 },
    { id: 15, name: "Chocolate Bar", category: "Snack", price: 1.5, stock: 60 },
    { id: 16, name: "Potato Chips", category: "Snack", price: 2.0, stock: 80 },
  ];

  const drinks = filter(products, p => p.category === "Drink");
  const cheap = filter(products, p => p.price < 2);
  const highStock = filter(products, p => p.stock >= 100);

  expect(drinks).toEqual([products[4], products[5], products[6], products[10]]);
  expect(cheap).toEqual([
    products[0], products[1], products[2], products[3],
    products[6], products[8], products[11], products[13], products[14]
  ]);
  expect(highStock).toEqual([products[0], products[1], products[2], products[11]]);
});

test('Tries to filter out empty list', () => {
  expect(filter([])).toEqual([]);
});

test('Tries to filter out null list', () => {
  expect(filter(null)).toEqual([]);
});
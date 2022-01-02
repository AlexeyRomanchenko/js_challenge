const {createFibonacciSequence, checkFibonacciArray} = require('./code');

test('generate the fibonacci sequence', () => {
  expect(createFibonacciSequence(1)).toStrictEqual([1]);
  expect(createFibonacciSequence(3)).toStrictEqual([1, 1, 2]);
  expect(createFibonacciSequence(5)).toStrictEqual([1, 1, 2, 3, 5]);
  expect(createFibonacciSequence(10)).toStrictEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});

test('check if array is part of the fibonacci sequance', () => {
  expect(checkFibonacciArray([1, 2, 3, 4, 5])).toStrictEqual(false);
  expect(checkFibonacciArray([1, 1, 2, 3, 5])).toStrictEqual(true);
});

// arr1 = [1,2,3,4,5]  false
// arr2 = [1,1,2]  true
// [1,1] = true
// [13, 21, 34, 55, 89, 144] = true

'use strict';
const add = require('../dist/index').add

test('test 1 plus 2 result', () => {
  expect(add(1 , 2)).toBe(3);
})


test('test 2 plus 2 should equal 4', () => {
  expect(add(2 , 2)).toBe(4);
})
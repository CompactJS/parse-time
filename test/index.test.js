const assert = require('assert');
const { parse } = require('..');

console.log('Testing:');

const test = (example) => {
  const log = (example, expected) =>
    console.log(`\u001B[32m✓\u001B[39m ${example} = ${expected}`);
  return {
    isNaN() {
      assert(isNaN(example));
      log(example, 'NaN');
    },
    equals(expected) {
      assert.equal(parse(example), expected);
      log(example, expected);
    },
  };
};

test('00:00').equals(0);
test('12:30').equals(12.5);
test('24:00').equals(24);
test('02:14').equals(2 + 14 / 60);
test('60:366').equals(66.1);
test('13:30:30').equals(13 + 0.5 + 0.5 / 60);
test('1:1').equals(1 + 1 / 60);
test('hello:world').isNaN();
test('helloworld').isNaN();
test(':30').isNaN();
test('60:60:60:60').equals(61 + 60 / 60 / 60 + 60 / 60 / 60 / 60);

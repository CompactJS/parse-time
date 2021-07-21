const assert = require('assert');
const { stringify } = require('..');

const test = (example, format) => {
  const log = (example, expected) =>
    console.log(`\u001B[32m✓\u001B[39m ${example} = ${expected}`);
  return {
    isNaN() {
      assert(isNaN(stringify(example)));
      log(example, 'NaN');
    },
    equals(expected) {
      assert.strictEqual(stringify(example, format), expected);
      log(example, expected);
    },
  };
};

module.exports = function () {
  console.log('Testing stringify function');
  test(0, 'hh:mm').equals('00:00');
  test(0, 'hh:mm:ss').equals('00:00:00');
  test(1.5, 'hh:mm:ss').equals('01:30:00');
  test(13.33, 'hh:mm:ss').equals('13:19:48');
  test(13.33, 'mm:ss').equals('19:48');
  // weird format, but it's a valid format
  test(13.33, 'ss:hh:mm').equals('48:13:19');

  // invalid input
  test('23:43:39', 'hh:mm:ss').equals('NaN:NaN:NaN');

  // more than 24 hours allowed
  test(34.5).equals('34:30:00');
};

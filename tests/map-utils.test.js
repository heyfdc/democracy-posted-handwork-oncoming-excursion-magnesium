const assert = require('assert');
const { formatDays } = require('../src/map-utils.js');

let passed = 0, failed = 0;
function test(name, fn) {
  try { fn(); console.log(`  ✓ ${name}`); passed++; }
  catch (e) { console.error(`  ✗ ${name}: ${e.message}`); failed++; }
}

console.log('\nformatDays');

test('empty array returns empty string', () => {
  assert.strictEqual(formatDays([]), '');
});

test('null returns empty string', () => {
  assert.strictEqual(formatDays(null), '');
});

test('single day', () => {
  assert.strictEqual(formatDays([15]), 'Aug 15');
});

test('two consecutive days form a range', () => {
  assert.strictEqual(formatDays([15, 16]), 'Aug 15–16');
});

test('four consecutive days form a range', () => {
  assert.strictEqual(formatDays([17, 18, 19, 20]), 'Aug 17–20');
});

test('two separate ranges', () => {
  assert.strictEqual(formatDays([15, 16, 21, 22, 23, 24, 25, 26]), 'Aug 15–16, Aug 21–26');
});

test('unsorted input is sorted before processing', () => {
  assert.strictEqual(formatDays([26, 15, 21, 16]), 'Aug 15–16, Aug 21, Aug 26');
});

test('non-consecutive singles', () => {
  assert.strictEqual(formatDays([15, 21, 26]), 'Aug 15, Aug 21, Aug 26');
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('repo smoke: package.json is valid and has a test script', () => {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  assert.equal(typeof pkg.scripts.test, 'string');
});

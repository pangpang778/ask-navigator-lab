import { test } from 'node:test';
import assert from 'node:assert/strict';

test('repo smoke: package.json is valid and has a test script', () => {
  const pkg = JSON.parse(await import('node:fs').then((m) => m.readFileSync('package.json', 'utf8')));
  assert.equal(typeof pkg.scripts.test, 'string');
});

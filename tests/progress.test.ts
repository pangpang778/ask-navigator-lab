import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isSectionComplete, LessonProgress } from '../src/progress.ts';

const entry = (lessonId: string, watched: boolean): LessonProgress => ({ lessonId, studentId: 's1', watched });

test('empty section is not complete', () => {
  assert.equal(isSectionComplete([]), false);
});

test('rewatch entries count once', () => {
  assert.equal(isSectionComplete([entry('l1', true), entry('l1', true)]), true);
});

test('one unwatched distinct lesson blocks completion', () => {
  assert.equal(isSectionComplete([entry('l1', true), entry('l2', false)]), false);
});

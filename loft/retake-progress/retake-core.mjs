// retake-core.mjs — pure module: no DOM, no I/O, no framework.
// Lifts into the real codebase unchanged once the shape is confirmed.
// Model: attempts are versioned; path progress reads the LATEST attempt;
// the path-completed badge freezes at first earn and never regresses.

export const COURSE = { LOCKED: 'locked', ACTIVE: 'active', COMPLETE: 'complete' };

export function createPathState(courseIds) {
  return {
    courses: Object.fromEntries(courseIds.map((id) => [id, {
      attempts: [{ lessonsDone: 0, complete: false }],
    }])),
    pathCompletedEarned: false,
  };
}

export function latestAttempt(course) {
  return course.attempts[course.attempts.length - 1];
}

export function reduce(state, event) {
  if (event.type === 'complete-course') {
    const c = state.courses[event.courseId];
    const a = latestAttempt(c);
    a.lessonsDone = event.totalLessons;
    a.complete = true;
    const allDone = Object.values(state.courses).every((x) => latestAttempt(x).complete);
    if (allDone) state.pathCompletedEarned = true;
    return state;
  }
  if (event.type === 'retake-course') {
    const c = state.courses[event.courseId];
    if (!latestAttempt(c).complete) return state; // retake only applies to completed courses
    c.attempts.push({ lessonsDone: 0, complete: false, retake: true });
    return state;
  }
  if (event.type === 'complete-lesson') {
    const c = state.courses[event.courseId];
    const a = latestAttempt(c);
    a.lessonsDone += 1;
    if (event.totalLessons && a.lessonsDone >= event.totalLessons) a.complete = true;
    return state;
  }
  return state;
}

// Derived view: path progress counts LATEST attempt completion per course.
export function pathProgress(state) {
  const cs = Object.entries(state.courses);
  const done = cs.filter(([, c]) => c.attempts.some((a) => a.complete)).length;
  return {
    doneCourses: done,
    totalCourses: cs.length,
    percent: Math.round((done / cs.length) * 100),
    retaking: cs.filter(([, c]) => latestAttempt(c).retake && !latestAttempt(c).complete).map(([id]) => id),
    pathCompletedEarned: state.pathCompletedEarned,
  };
}

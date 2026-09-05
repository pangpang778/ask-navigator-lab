export interface LessonProgress {
  lessonId: string;
  studentId: string;
  watched: boolean;
  watchedAt?: string;
}

// A rewatch appends a second entry for the same lesson: completion must
// count distinct lesson ids, not raw entries.
export function isSectionComplete(lessons: LessonProgress[]): boolean {
  const allIds = new Set(lessons.map((l) => l.lessonId));
  if (allIds.size === 0) return false;
  const watchedIds = new Set(lessons.filter((l) => l.watched).map((l) => l.lessonId));
  return [...allIds].every((id) => watchedIds.has(id));
}

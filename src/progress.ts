export interface LessonProgress {
  lessonId: string;
  studentId: string;
  watched: boolean;
  watchedAt?: string;
}

export function isSectionComplete(lessons: LessonProgress[]): boolean {
  return lessons.length > 0 && lessons.every((l) => l.watched);
}

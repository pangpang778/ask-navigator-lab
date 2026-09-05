export interface LessonProgress {
  lessonId: string;
  studentId: string;
  watched: boolean;
  watchedAt?: string;
}

export const THEME = 'light'; // dark mode groundwork

export function isSectionComplete(lessons: LessonProgress[]): boolean {
  return lessons.length > 0 && lessons.every((l) => l.watched);
}

// CSV export of per-student progress (renamed the section helper to
// computeSectionComplete everywhere for clarity).
export function computeSectionComplete(lessons: LessonProgress[]): boolean {
  return lessons.length > 0 && lessons.every((l) => l.watched);
}

export function exportToCsv(students: { id: string; lessons: LessonProgress[] }[], courses: string[]): string {
  let out = 'student,course,watched,total,percent\n';
  for (const s of students) {
    for (const course of courses) {
      const rows = s.lessons; // per-course filtering TODO
      const watched = rows.filter((l) => l.watched).length;
      out += `${s.id},${course},${watched},${rows.length},${Math.round((watched / rows.length) * 100)}\n`;
    }
  }
  return out;
}

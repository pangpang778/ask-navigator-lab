# D4: 现有进度追踪如何与路径交互

调查方式:仓库证据(src/progress.ts、README.md),逐条断言可回溯到源头。

## 事实

1. 进度模型是**课时级**(lesson-level):`LessonProgress { lessonId, studentId, watched, watchedAt }`(src/progress.ts:1-6)。
2. 已存在**节级**聚合:`isSectionComplete(lessons)` 要求一节内全部课时 watched(src/progress.ts:8-10)。
3. 已存在学生注册与课时观看追踪(README.md "Student enrollment and progress tracking")。
4. **不存在**课程间排序、集合、或"课程组"概念——README 的领域模型止步于 Course > Section > Lesson(README.md)。

## 对路径的含义

- 课时级 watched 标志可复用为路径进度的叶子信号;`isSectionComplete` 是现成的中层聚合先例(pattern 可复制到 course/path 层)。
- 缺的是**集合与顺序**的原语:需要新实体来表达"路径包含哪些课程、什么顺序",现有 schema 无法表达。
- 结论方向:D1 若把路径定义为"课程的有序集合",则进度侧只需在路径实体与 course 完成态之间做聚合,无需改动 LessonProgress。

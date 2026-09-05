# ask-navigator 技能走查记录(fog → map → decisions → launch handoff)

本仓库是 ask-navigator SKILL.md 的实景测试场:按技能文本**逐字执行**,captain 由真人扮演(会话语言:中文,zh-Hans)。

## 场景

- 既有项目:课程视频平台(Course > Section > Lesson,SQLite/Express/React),无任何 shipyard 表面(yard 未铺)
- 雾 brief:"我想给课程平台加'学习路径'功能,但具体做成什么样我也没想清楚"
- tracker:GitHub Issues(tracker-backed 模式);无本地并发会话

## 会话 1 — Chart the map(绘图)

| 技能步骤 | 实际执行 | 结果 |
|---|---|---|
| 审计 report-only | drydock --check 九个表面全缺失 [high/actionable] | 发现逐字进 Notes;不阻断 ✓ |
| offer drydock 一次 | captain 拒绝("先聊清需求") | tracker-backed + 延迟沉淀模式 ✓ |
| documentLanguage | yard 未铺 → W2 时问一次 | zh-Hans,记录进 Notes ✓ |
| W1 目的地 | deep-interview 一轮,目的地候选排序,captain 签字 | "路径=有序课程集合+顺序解锁+毕业"✓ |
| 广度优先绘 frontier | 4 张可精确成票的决策 + 1 块雾(UI 形态,依赖 D1) | 雾/票判据生效 ✓ |
| W2 签署图纸 | 票+边+雾草图,captain 确认 | #1 地图 + #2–#5 四票 ✓ |
| fire research | #5 (AFK) 后台调查 | 见会话 2 |
| 停止 + 续航指针 | "下个会话 /ask-navigator 继续" | ✓ |

## 会话 2 — Work through the map(行图,一次一票)

- **#5 research(AFK)**:产出 [docs/research/d4-progress-interaction.md](docs/research/d4-progress-interaction.md)(引用到 src/progress.ts 行级),决议落评论,关闭。
- **#2 grilling(HITL)**:先认领(assign)→ deep-interview 一轮(带推荐答案)→ captain 签字:路径 = 课程的有序集合。决议 + 领域影响落评论,关闭。
- **雾毕业**:D1 落定后"UI 形态"可精确成票 → 从 Not yet specified 移出,建 #6(prototype, blocked by #2)。地图只存索引一行。

## 会话 3 — 行图收口

- **#3 grilling**:硬门禁(推荐答案被采纳);ADR 级决策进 Deferred sediment。
- **#4 grilling**:证书被判**超出目的地** → 关闭 + Out of scope 留痕,不进 Decisions so far(范围裁决不是路线步骤)✓
- **#6 prototype(HITL)**:[prototype/path-page 分支](../tree/prototype/path-page)三变体实物,captain 选中 V2+V3 合成;原型留分支作 primary source,不进 main ✓

## 会话 4 — Exit(交接)

- Not yet specified 空、无未关闭票 → Decisions so far 折叠为 [.omc/wayfinder/learning-paths/brief.md](.omc/wayfinder/learning-paths/brief.md)
- 推荐:"跑 /oh-my-claudecode:launch,brief 路径如下"。yard gate 将接管全部检查(含 deferred findings)✓

## 结论

全流程可执行、无死锁;6 张票/1 地图/1 原型分支/1 调查文档,4 个会话节奏与技能约定一致。暴露的技能文本缺口见 [FINDINGS.md](FINDINGS.md)。

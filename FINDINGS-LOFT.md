# loft 走查暴露的文本缺口

| # | 缺口 | 走查证据 | 修正 |
|---|---|---|---|
| 1 | "On confirmation, the module lifts into the repo" 有歧义——读起来像放样当场搬进仓库,与"永不靠岸/经 launch 重进"矛盾 | 走查时需自行裁决时序 | SKILL.md 明确:模块**写成可搬**,搬运发生在 launch 的交付期,放样当场 main 零改动 |
| 2 | 第一形态被否是常态而非事故,技能未明说"同会话内在分支上修订" | 第一形态被船长否决后模块当场改一行 | SKILL.md 纪律节补:预期第一形态会被争论,同会话在分支上修订,船长确认**最终形态**才是决策 |
| 3 | "One command to run" 与 ES module 的 file:// CORS 限制冲突 | 独立 .mjs 被壳 import,直接双击打不开,需 serve 命令 | SKILL.md 注明:壳用仓库现成的最简 serve 命令,或把模块内联进 HTML 避开 CORS |

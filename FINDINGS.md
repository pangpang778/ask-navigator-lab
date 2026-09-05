# 走查暴露的技能文本缺口(调优依据)

| # | 缺口 | 走查证据 | 修正 |
|---|---|---|---|
| 1 | 新 tracker 上 `navigator:map` 标签不存在,gh 建票被拒 | "could not add label: 'navigator:map' not found"(两次:navigator:map / navigator:prototype) | SKILL.md 加一句:标签不存在时先创建;票类型以正文为准,不强依赖类型标签 |
| 2 | research 票的调查文档落点未指定 | D4 执行时需自行决定 → docs/research/ | SKILL.md 明确:`docs/research/<ticket-slug>.md`,仓库已有笔记惯例则从之 |
| 3 | 退出时的任务书没有载体,只存在于对话中 | Exit 步骤 "brief below" 无处安放 | SKILL.md 明确:brief 写入 `.omc/wayfinder/<map-slug>/brief.md`,交接传路径不传内容 |
| 4 | 关闭语义未区分"已解决"与"超出范围" | #4 关闭时需自行选择 not planned | SKILL.md 一句话:解决=completed;超出目的地=not planned |
| 5 | 认领在无法 assign 时(权限/本地模式)无 fallback | 演练中 assign 成功,但路径未覆盖失败 | SKILL.md 加一句:无法 assign 则以评论留痕认领 |

## 验证通过、无需改动的机制

- 雾测试两问的路由判据(W2 后无雾 → 直接推荐 launch)
- W1/W2 船长签字点(粒度与目的地错误是唯一贵错误)
- 一次一票节奏(上下文预算)与会话收尾指针
- 雾毕业(#6 由 #2 诞生)与 Out of scope 处置(#4)
- 延迟沉淀(yard 未铺时决不丢账,Notes 逐条记录)
- 原型 throwaway 纪律(prototype/ 分支 = primary source)
- 地图即索引(决议只活在票里,地图一行 gist + 链接)

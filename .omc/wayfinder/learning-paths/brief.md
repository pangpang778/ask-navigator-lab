# Mission Brief — 学习路径(Learning Paths)

来源:ask-navigator 地图 Learning Path map(#1),Decisions so far 折叠。

## Objective

在课程平台中加入"学习路径":路径是有序的课程集合,学员按硬门禁顺序解锁课程,路径页呈现路径级与课程级双层进度;"路径完成"在 v1 是可查询的状态字段。

## Scope

- 新实体:Learning Path(有序课程集合)+ 顺序/依赖语义
- 解锁逻辑:完成当前课程(复用 isSectionComplete 的 course 层聚合)才解锁下一门
- 路径页 UI:课程卡片骨架(V2)+ 页首双层进度条(V3 合入),原型见 prototype/path-page 分支
- 进度复用:课时级 watched 不改动;新增 course/path 层聚合

## Non-goals

- 证书(签发/展示/防伪)——独立 effort(地图 #4)
- 补修/跳级机制
- 个性化推荐

## 领域词汇(待落 CONTEXT.md,见地图 Deferred sediment)

- Learning Path(学习路径)= 课程的有序集合,不是课时序列

## Yard debt(船长选择先聊需求后铺龙骨)

drydock --check 发现全部表面缺失(见地图 Notes);/oh-my-claudecode:launch 的 yard gate 将拦截,建议先跑 /oh-my-claudecode:drydock 或显式低置信豁免。

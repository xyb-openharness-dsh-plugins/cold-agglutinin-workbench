# AI 面板激活逻辑 · 夜班复核记录（2026-11-12 00:05）

> 应 2026-11-11 夜班任务点名，对小暖宝 0.2.1 的 DSH 原生 AI 对话面板激活逻辑按 9 项要求逐条复核。
> 复核人：夜班代理（无人值守）。本记录不改任何业务代码——0.2.1 的实现经复核**全部满足**，无需再升版。

## 逐条结论（静态实测，证据为 file:line）

| # | 要求 | 结论 | 证据 |
| --- | --- | --- | --- |
| 1 | 不用 `Boolean(conversation)` 判断会话，先判归属 | 通过 | src/client.js:252-255（ownedSession()，注释明说 customFrame 恒传隐藏容器）；checker 反模式断言 1 通过 |
| 2 | 无会话走 `service.newSession(workspaceId)`，优先 `service.defaultWorkspace?.()?.workspaceId`；不调 `ensureSession({})` | 通过 | src/client.js:368-370；checker 断言 2/3/4 通过 |
| 3 | 创建成功后显示原生 conversation 面板并绑定当前工作台 | 通过（静态） | src/client.js:375-379（setPaneOpen(true) + 草稿绑定）；绑定由宿主 newSession 完成（io.dsh.desktop client.js:1384-1403 → showSession + bindOwnedSession，见 0.2.1 签认表 #3） |
| 4 | 已有会话点击只开合面板，不重复创建 | 通过 | src/client.js:352-360 + 388-392（existing → setPaneOpen 翻转，无 newSession） |
| 5 | 订阅会话变化触发重渲染 | 通过 | src/client.js:282-285（service.subscribe → setSessionRevision） |
| 6 | 取消目录选择：不留空会话 + 可重试提示 | 通过 | src/client.js:371-374（!id → '已取消资料目录选择…可再次点击「AI 对话」重试'） |
| 7 | 创建失败显示错误原因 | 通过 | src/client.js:380-381（catch → '没能调起会话：${message}…'） |
| 8 | 草稿只填入不自动发送 | 通过 | src/client.js:188-221（appendDraft 只 setDraft；agent-draft 桥无 send:true；checker 断言 6 通过） |
| 9 | lib/client.js、版本、CHANGELOG、静态校验与打包同步 | 通过 | lib/client.js 由 src 构建（构建链在 npm run build:client）；VERSION/package.json/lib/version.js 三处 = 0.2.1（test #33）；CHANGELOG 0.2.1 段含用户可见结果；release/…0.2.1.tgz 已打包 |

## 工具化验证（本轮实测）

- `npm run check`：exit 0（34 子测试全过；含移植进链的 check-agent-pane-contract 7 条，`--self-test` 反例可红）。
- `node templates/check-agent-pane-contract.mjs .`（starter rc.37 版独立跑）：pass true，7/7。
- 打包产物：release/xyb-community-cold-agglutinin-workbench-0.2.1.tgz（3,050,435 字节）。

## 安装与实机验证状态（如实）

- Desktop profile：已安装 v0.2.1（装机 mtime 2026-11-10T18:08Z），bundles 72 项含本包，宿主清单含本工作台；dshHomePath 数据目录已生成（sqlite 三件）。
- **实机点击走查（V3）仍未执行**：本轮 `verify-desktop-load.mjs` 实测结论「DSH Desktop 当前没在运行（上次退出 2026-11-11T04:42Z）」。无人值守不代开宿主 GUI，不冒充已验收。
- 晨间待人工：打开 DSH Desktop → 重跑 `node scripts/verify-desktop-load.mjs` → 新建会话后点击「AI 对话」走查四点（面板出现 / 取消目录重试提示 / 失败提示 / 已有会话开合）。

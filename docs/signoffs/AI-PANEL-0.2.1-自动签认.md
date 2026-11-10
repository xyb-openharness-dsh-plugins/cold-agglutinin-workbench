# 专项自动签认 · AI 原生会话面板 + 疾病概要双入口 · cold-agglutinin-workbench 0.2.1

- 闸口：V1 增量（客户端链路/静态契约）+ V2 增量（Desktop 加载）+ 专项 P1b（首页第二入口）
- 日期时间：2026-11-10 23:25 CST
- commit：7ca16e1（代码与文档）；构建产物 `lib/version.js` 记录 build commit 7ca16e1
- 版本：0.2.1（VERSION = package.json = lib/version.js = lib/client.js 注入）
- 包：`release/xyb-community-cold-agglutinin-workbench-0.2.1.tgz` · sha256 `1a0ed0520c69296ca7c966ef5a105da3cee0e1bce544b1ff095db5907770523d`
- 范围：`src/client.js` / `lib/client.js`、`prototypes/v0.2/{index.html,app.js,primer.js}`、`public/*`、`scripts/check-agent-pane-contract.mjs`、`scripts/probe-cold-agglutinin-m2.mjs`、docs 20/34/36/40、prompts 同步、package/CHANGELOG

> 本文件是自动签认，不是用户确认。结论只代表本轮实测/静态断言，不代表晨审已追认。

## 逐条结果

| # | 检查项 | 结论 | 证据 |
| --- | --- | --- | --- |
| 1 | 不用 `Boolean(conversation)` 判「已有会话」 | 通过（静态） | `scripts/check-agent-pane-contract.mjs` 7/7；src/client.js:239-243 |
| 2 | 无会话时用 `defaultWorkspace()?.workspaceId` + `newSession(workspaceId)`，不调 `ensureSession({})` | 通过（静态 + 宿主源码核对） | checker #2/#3/#4；io.dsh.desktop `client.js:1384-1403`（`newSession` 缺省工作区→`newWorkspaceSession`→`pickDirectory`） |
| 3 | 会话创建成功后显示原生 conversation 并绑定当前工作台 | 待人工（缺真机点击证据） | 代码 `src/client.js:359-363`；宿主 `newSession` 在返回前 `showSession` + `bindOwnedSession`；当前 Desktop 无窗口/无 CDP，无法自动点击 |
| 4 | 已有会话时只开/收，不重复创建 | 待人工（缺真机会话 id 不变录屏） | 代码 `src/client.js:340-347`（`ownedSession()` 命中即 return） |
| 5 | 订阅会话变化并触发重渲染 | 通过（静态） | `src/client.js:266-274`；checker #5 |
| 6 | 用户取消目录选择：不留空会话，提示可重试 | 通过（宿主源码 + 代码）；UI 待人工 | 宿主取消返回 `undefined` 且不创建；代码 `src/client.js:354-357` 写「没有创建会话，可再点重试」 |
| 7 | 创建失败显示原因 | 通过（代码）；UI 待人工 | `src/client.js:364-367` catch → note 含原因 + 重试提示 |
| 8 | 草稿只填入、不自动发送 | 通过（静态 + 原型探针） | checker #6；M2 Q17 发送键 disabled 且无 postMessage（35/35） |
| 9 | lib/client.js 重新生成、版本与 CHANGELOG 同步 | 通过 | `build:client` 551 行/0.2.1；VERSION/package/lib/version 同源；check 34/34 |
| 10 | 静态门禁 | 通过 | check-agent-pane 7/7（`--self-test` 反例 7 条全抓）；`npm run check` exit 0；audit 44/44 |
| 11 | 打包 | 通过 | 45 files；tgz sha256 `1a0ed052…`；`check-install.mjs` exit 0 |
| 12 | 装入 Desktop 实际 profile | 通过（包与登记）；UI 待人工 | profile bundles 67 项含本包；`verify-desktop-load.mjs` exit 0；本次启动无激活失败；装机文件 `lib/client.js`/`lib/version.js`/`public/primer.js` 哈希与仓内一致 |
| 13 | 原型顶栏 `?` 可开四段 | 通过 | `probe-disease-primer --url http://127.0.0.1:8899/prototypes/v0.2/index.html` 10/10 |
| 14 | 首页「疾病概要」第二入口可开四段、Esc 后焦点回归 | 通过（本轮修复） | M2 P1b：`entries=2`、`secondOpened=true`、`secondFocusBack=true`；primer 10/10、page-view 13/13、M2 35/35 |
| 15 | public/dev-server 双形态同样过 ？ 与 AI 入口 | 通过 | `--url http://127.0.0.1:7801/index.html`：primer 10/10、page-view 13/13、M2 35/35 |
| 16 | 跨病种语义残留 | 通过 | README/public/prototypes/src/dsh + 本病种 SPEC/BRIEF/CHANGELOG 搜 `FSHD/面肩肱/心包/pericard/effusion/CRP` = 0 命中 |

## 未达标项

1. **V3 UI 级走查未做**：Desktop 当前 0 窗口、无远程调试端口，无法自动点击「AI 对话」/取消目录选择/失败提示/已有会话开合。需要用户新建会话后逐条点击并留截图或录屏。
2. **装机方式非标准 pnpm**：`pnpm add` 在 profile 解析阶段被另一个无关依赖 `@community/neuroendocrine-workbench` 的缺失 tgz 阻断（`ENOENT .../community-neuroendocrine-workbench-0.1.10.tgz`），本轮改用「tgz 定点解包 + package.json/lockfile 定点更新」。宿主加载已验证；下次标准 `pnpm install` 仍可能被该无关缺失阻断。
3. 静态 checker 明确只挡源码反模式，不覆盖运行时面板出现/取消空会话/失败提示。

## 返工轮次

- 1 轮：M2 P1b 首跑 `secondFocusBack=false` → 修 primer.js（`data-primer-entry` 重定位 + 多轮补焦）→ P1b 通过（原型与 public 双形态）。

## 结论

**自动签认通过（待晨审追认）**：静态契约、check/test/audit、双形态探针、打包与 Desktop 宿主加载均通过；UI 点击项按「待人工」保留，不写成真机已验收。
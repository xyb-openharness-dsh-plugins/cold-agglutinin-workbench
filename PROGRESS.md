# PROGRESS · cold-agglutinin-workbench（小暖宝 WarmPal）

> 更新：2026-11-12 00:05 · 0.2.2 检查器加固轮（用户九条点名复核，无客户端行为变化）· 原夜班 2026-11-09 认领 Issue #68（claimed）

## 0.2.2 复核轮（2026-11-12 00:00 · commit 61021ad 后）
- 用户九条要求逐条核验（AI 会话激活逻辑）：src/client.js 全部满足——ownedSession()（非 Boolean(conversation)）、defaultWorkspace→newSession（无 ensureSession({})）、创建后 setPaneOpen(true)（绑定由宿主 createOwnedSession 完成，app.asar 源码核对）、已有会话 toggle 不重复创建、subscribe 重渲染、取消返回 undefined 留提示可重试、失败 note 含原因、草稿只填不发。
- 宿主源码核对（app.asar）：`newSession(workspaceId)` 缺省走 `defaultWorkspace()`，无工作区走 `newWorkspaceSession()→pickDirectory()`，取消 `return`（undefined）不留会话；`createOwnedSession` 返回 `{sessionId, bound}` 并 `showSession`。
- 检查器：check-agent-pane-contract 7→10 条（新增 8 已有会话只开/收不重复创建、9 取消+失败反馈、10 创建成功开面板，均带 --self-test 反例）；已同步 starter templates 与 acquired-hemophilia-workbench。
- 门禁：check exit 0、test 34/34、audit 44/44；0.2.2 tgz sha256 `e09bbacd5bbcaca4960ff5dc829502d54ea0dad6c56017786674e40d24eea34e`（45 files）。后补：标准 pnpm 重装 0.2.2 至 Desktop harness profile 成功（绝对路径 tgz，未被无关包阻断），verify-desktop-load 通过（宿主清单含本工作台）；UI 点击仍待人工。

## 当前里程碑：M0–M9 已走完；0.2.1 AI 面板/疾病概要修复轮完成；V3 UI 点击走查待人工

## 0.2.1 修复轮（2026-11-10 · 本地 commit 7ca16e1）
- AI 对话激活：判归属 `currentSession()+ownsSession()`；无会话走 `defaultWorkspace()?.workspaceId + newSession(workspaceId)`（不再 `ensureSession({})`）；取消/失败留在工作台提示可重试；`creatingRef` 防连点双会话；`subscribe` 刷新面板；草稿只填不发。宿主源码核对：`newSession` 无工作区时走 `pickDirectory`，取消返回 `undefined` 且不留会话。
- 疾病概要：顶栏 `?` + 首页文字入口双入口；primer.js 按 `data-primer-entry` 重定位 + 多轮补焦，修复 `history.back()` 重渲染后焦点掉回 body；M2 探针新增 P1b。
- 门禁：新增 `scripts/check-agent-pane-contract.mjs`（7 条，含 `--self-test`）进 check 链；`npm run check` exit 0（34/34）、audit 44/44。
- 探针（显式 URL）：原型 primer 10/10、page-view 13/13、M2 35/35；dev-server public 同样 10/10、13/13、35/35。
- 包：0.2.1 tgz sha256 `1a0ed0520c69296ca7c966ef5a105da3cee0e1bce544b1ff095db5907770523d`；Desktop profile 已装且 bundle 67 项含本包；宿主本次启动无激活失败；`lib/client.js`/`public/primer.js`/`lib/version.js` 与 tgz 哈希一致。
- 装机方式如实记录：`pnpm add` 因 profile 内另一无关包 `neuroendocrine-workbench` 的 tgz 已不存在而失败；改用 tgz 定点解包 + package.json/lockfile 定点更新（详见专项签认）。V2 宿主加载通过；V3 UI 点击（真机点「AI 对话」/取消选目录/失败提示）仍待人工。
- 回流：starter 1.10.0-rc.30（L82/L83、检查器假阳性修正、primer 双入口焦点、docs 20/34/36/40 与 prompts 同步）；starter check 220 files pass、test 67/67。

## 已完成（全部闸口为「自动签认（待晨审追认）」，见 docs/signoffs/）
- M0 骨架（822e004）：领取 Issue #68 + 建仓 + init + 接线 + 文档九件 + 基线 check
  - 事故修复：jq 误判致重复建 issue #67（已关闭注明）；/claim 误发 #67 已删评论；模板 404 → 按既有格式手写 + 补标签后 claimed
- M1 调研（57f1d58）：医学 10 主题子代理实跑（卫健委 2025 版指南 PDF 原件核验 p82–85；FDA 原件）→ EVIDENCE-LEDGER 12 条；重名率实测 50% ≤70%；G1
- M2 原型（57f1d58 + bf9da95）：四件套 + primer 三件套 + 两套演示档案 + 探针 34/34、10/10、13/13（显式 --url）；独立评审 P0=0、5×P1+3×P2 全修复；README 5 截图；G2
- M3 数据模型（2b5f3a3）：schema 0001（18 表，判读列 0）+ freeze-contract sha256 + 测试；G3
- M4 临床库（0e6168a）：unified-trial-mcp 实跑 43 条（ictrp 40 + chinadrugtrials 3；chictr_online FAILED 如实）；四件套一致；试验线维持裁剪（快照量级佐证）
- M5 开发版（9da4adf）：dsh 七件 + src→lib + MinerU 六部件（未接通形态如实）+ apiBase 契约 + public 定点移植 + check 链全绿 + test 34/34 + audit 44/44 + 双形态实测 + HVT；V1
- M6 装机（115959a）：0.2.0 pack + check-install 四要素 + pnpm 装 Desktop profile + bundles 67 + state.json rev 1577 + 重启 + verify-desktop-load exit 0 + 真机库直查（19 表全建、演示数据装载）；V2 通过、V3 服务层已验
- M7/M8（fb246df）：tag v0.2.0 + release notes + BACKLOG 回填 PR body 草稿（docs/release-draft/，未发布未推送——无人值守边界）
- M9 回流（starter 17bde88，rc.26）：LESSONS L74–L76（焦点回归三件套/migrate-public 版本基准段/裁剪线也实跑 M4）+ check-probe-coverage SAMPLE_PROBES 置空；check-starter 217 pass + starter test 67/67
- 验收巡检：USER-ACCEPTANCE-AUTOFIX A–F 全类检查（DP ？按钮原型与 public 双形态 10/10+13/13）

## 各闸口结论
| 闸口 | 结论 |
| --- | --- |
| G1/G2/G3 | 通过（自动签认待晨审追认） |
| V1 | 通过（自动签认） |
| V2 | 通过（自动签认；verify-desktop-load exit 0） |
| V3 | 服务层已验 · UI 级走查待人工（Desktop 新建会话后逐页点击） |

## 下一步（晨审）
1. 追认全部自动签认与默认值（DEV-REQUIREMENTS §五）
2. Desktop 新建会话走查 UI + 真机截图刷新 README（Q30）
3. M7 发布授权（tag v0.2.0 + release）与 M8 BACKLOG 回填 PR（草稿在 docs/release-draft/）
4. 可推翻项：临床试验线裁剪决定（快照 43 条已留存，可随时按 35 号补齐）

## 阻塞
无

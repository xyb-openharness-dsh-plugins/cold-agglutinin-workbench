# PROGRESS · cold-agglutinin-workbench（小暖宝 WarmPal）

> 更新：2026-11-09 02:10 · 夜间无人值守（23:04 开工）· 认领 Issue #68（claimed）

## 当前里程碑：M0–M9 全走完；M7/M8 冻结草稿；V3 UI 走查待人工

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

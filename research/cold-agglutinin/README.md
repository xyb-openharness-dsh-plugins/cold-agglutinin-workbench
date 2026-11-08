# research/cold-agglutinin · M4 四件套（2026-11-08 实跑）

- 通道终态（如实，FAILED ≠ 查过零结果）：
  - ictrp：SUCCESS（40 条参与合并）
  - chinadrugtrials：3 条（检索「冷凝集素病」命中）
  - chictr_online：**FAILED（未查过）**
  - ctv / xyb_chinadrugtrials_archive：NO_RESULTS；chictr_pancreatic_archive：NEEDS_SETUP（离线语料仅胰腺癌覆盖）
- 四件套一致性：manifest.recordCount 43 = dbCount 43 = jsonl 43 行 = sqlite trials 43（实跑核数）
- 采集关键词 4 条（英文标准名/中文标准名/宽检索/扩展检索），去重靠登记号
- 快照会过期；登记状态一律「未核实」；入排标准以官方登记页为准
- 与试验线关系：本台临床试验线已如实裁剪（DEV-REQUIREMENTS §三）；本快照为裁剪复核采集——43 条的量级支持「候选池长期个位数~低几十」的裁剪理由，快照留存供未来版本启用 35 号链路使用

# 变更记录

只增不删；每条写清"改了什么 + 为什么 + 用户可见结果"。版本号与 VERSION、package.json 三处必须一致。

## 0.2.0 — 2026-11-09（M5 开发版 · 夜间无人值守）

- 原型 v0.2：CAD 语义全量（看板状态卡「发作中/缓解期第 N 天」、发作—诱因登记、输血与治疗按次登记（特殊要求照抄原话）、溶血/滴度/血象/体征四组 3D 指标卡、一图秀、疾病概要四段、两套合成档案 A/B）；临床试验线如实裁剪（设置·临床数据库 tab 有声明）。
- 开发版：dsh 七件（index/server/store/readmodels/workbench/mineru/demo）+ src→lib 客户端链路 + apiBase 交界契约 + MinerU 六部件（未接通形态，如实标注「勾选与保存不联网」）。
- 数据：schema 0001 冻结（18 表，判读列 0）；M4 快照 43 条（ictrp 40 + chinadrugtrials 3；chictr_online FAILED 如实）。
- 门禁：check 链 staticPass=true、test 34/34、audit 44/44、探针 34/34+10/10+13/13（显式 --url 指向本仓原型）、独立 dev-server 双形态实测。
- 用户可见结果：装配进 DSH Desktop 后按会话打开工作台即可查看与录入（演示数据形态，直到导入真实资料）。


## 0.1.0 — 2026-11-08

- 由社区脚手架 dsh-wb-cli@1.10.0-rc.25 (7f8f56a) 初始化，仅有注册骨架与健康接口，无业务功能。

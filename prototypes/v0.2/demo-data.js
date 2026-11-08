/* 演示数据（唯一源）· 两组合成档案 · 冷凝集素病（CAD）
 * A：刚确诊、记录少、多处未知；B：多年随访、发作多次、指标与输血都多。
 * 全部为合成示例，不冒充真实病历；页面不写死数字，一切从这里读。
 * 本文件只放数据，不放逻辑；TODAY 由 app.js 固定为 2026-11-08。
 */
window.DEMO_DATA = {
  TODAY: '2026-11-08',
  /* 指标元数据（唯一源）：app.js 与服务端 metric_defs 都从这里读；阈值一律不在此出现 */
  metricDefs: [
    { key: 'Hb', db: 'hb', title: '血红蛋白（Hb）', category: 'hemolysis', unit: 'g/L', color: '#2f6f8f', ord: 0 },
    { key: 'RET', db: 'ret', title: '网织红细胞百分比', category: 'hemolysis', unit: '%', color: '#c96f2f', ord: 1 },
    { key: 'LDH', db: 'ldh', title: '乳酸脱氢酶（LDH）', category: 'hemolysis', unit: 'U/L', color: '#a3405e', ord: 2 },
    { key: 'HAPT', db: 'hapt', title: '结合珠蛋白', category: 'hemolysis', unit: 'mg/L', color: '#6b5b95', ord: 3 },
    { key: 'IBIL', db: 'ibil', title: '间接胆红素', category: 'hemolysis', unit: 'µmol/L', color: '#b98a1f', ord: 4 },
    { key: 'CAT', db: 'cat', title: '冷凝集素滴度（稀释度）', category: 'coldaggl', unit: '1:x', color: '#3a7ca5', ord: 5 },
    { key: 'WBC', db: 'wbc', title: '白细胞（WBC）', category: 'hemogram', unit: '×10⁹/L', color: '#2e7d5b', ord: 6 },
    { key: 'PLT', db: 'plt', title: '血小板（PLT）', category: 'hemogram', unit: '×10⁹/L', color: '#5a7d2a', ord: 7 },
    { key: '体重', db: 'weight', title: '体重', category: 'vitals', unit: 'kg', color: '#8a5a44', ord: 8 }
  ],
  metricGroups: [
    { key: 'hemolysis', title: '溶血指标', items: ['Hb', 'RET', 'LDH', 'HAPT', 'IBIL'] },
    { key: 'coldaggl', title: '冷凝集素滴度（复测）', items: ['CAT'] },
    { key: 'hemogram', title: '血象', items: ['WBC', 'PLT'] },
    { key: 'vitals', title: '体征', items: ['体重'] }
  ],
  /* 临床数据库 tab 与裁剪声明同口径：本台裁剪试验线，快照 0 条 */
  snapshotMeta: { count: 0, date: null },
  profiles: [
    {
      id: 'demo-a',
      name: '示例档案 A',
      tag: '刚确诊 · 记录少 · 多处未知',
      isDemo: true,
      profile: {
        确诊经过: '2026-10 天冷后手指、耳朵发紫，化验提示溶血，医生说考虑冷凝集素病（原文照录）',
        进一步检查: '冷凝集素滴度已送检（结果未取）；DAT 结果未记，标注「未知」',
        继发病因筛查: '医生说需要排查淋巴增殖性疾病（具体安排待复诊确认）',
        就诊医院: '示例市第一医院血液内科',
        医生行动计划原话: '注意保暖，避免冷水；若尿色变深或明显乏力，随时联系我。（李医生 2026-10-18 门诊原话照录）'
      },
      flaps: [
        { id: 'a-f1', start: '2026-10-12', end: '2026-10-30', trigger: '连续降温，早起洗冷水手', note: '手指、耳廓发紫伴乏力，保暖后好转（自己的事实描述）', private: false },
        { id: 'a-f2', start: '2026-11-04', end: null, trigger: '未知', note: '晨起手指发紫，较上次轻；医生说先观察', private: false }
      ],
      labs: [
        { id: 'a-l1', metric: 'Hb', date: '2026-10-13', value: 92, unit: 'g/L', method: '血常规 五分类', org: '示例市第一医院', private: false },
        { id: 'a-l2', metric: 'LDH', date: '2026-10-13', value: 386, unit: 'U/L', method: '乳酸→丙酮酸速率法', org: '示例市第一医院', private: false },
        { id: 'a-l3', metric: 'Hb', date: '2026-11-06', value: 101, unit: 'g/L', method: '血常规 五分类', org: '示例市第一医院', private: false },
        { id: 'a-l4', metric: 'IBIL', date: '2026-10-13', value: 24, unit: 'µmol/L', method: '重氮法', org: '示例市第一医院', private: false },
        { id: 'a-l5', metric: '体重', date: '2026-11-06', value: 63.5, unit: 'kg', method: '自录', org: '自录', private: false },
        { id: 'a-l6', metric: 'WBC', date: '2026-10-13', value: 6.2, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市第一医院', private: false }
      ],
      treatments: [
        { id: 'a-t1', date: '2026-10-18', kind: '复诊', name: '血液科首诊，安排滴度送检与继发病因筛查（原文照录）', note: '', private: false }
      ],
      meds: [
        { id: 'a-m1', name: '叶酸（医生安排）', schedule: '每日（具体见处方）', since: '2026-10-18', note: '合成示例：不写剂量' }
      ],
      questions: [
        { id: 'a-q1', addedOn: '2026-11-07', q: '滴度结果出来后怎么看？需要复测吗？', answered: false, private: false }
      ],
      hospitals: [
        { id: 'a-h1', name: '示例市第一医院', dept: '血液内科', contact: '电话见挂号单（未录入）', ver: 1 }
      ],
      reports: [
        { id: 'a-r1', title: '血常规+溶血化验单（2026-10-13）', date: '2026-10-13', kind: '化验', source: '原件已登记', keydesc: '医生批注「考虑冷凝集素病」（照录）', private: false },
        { id: 'a-r2', title: '冷凝集素滴度送检回执', date: '2026-10-18', kind: '化验', source: '未取得原件', keydesc: '', private: false }
      ],
      docs: [
        { id: 'a-d1', name: '2026-10-18 门诊病历', date: '2026-10-18', type: '病历', state: '已登记' },
        { id: 'a-d2', name: '（日期未知示例）外院血常规单', date: null, type: '化验', state: '待核对' }
      ],
      mind: {
        feel: [
          { d: '2026-11-05', text: '一降温就紧张，出门前都要想「今天敢不敢洗手」。', author: '本人', private: false },
          { d: '2026-11-06', text: '（私密记录示例）晚上手指发紫的时候有点害怕。', author: '本人', private: true }
        ],
        family: [
          { d: '2026-11-05', text: '爱人把家里热水壶挪到了洗手台旁边。', author: '家属', private: false }
        ]
      }
    },
    {
      id: 'demo-b',
      name: '示例档案 B',
      tag: '多年随访 · 发作多次 · 记录多',
      isDemo: true,
      profile: {
        确诊经过: '2023-12 冬季首次因溶血住院，冷凝集素滴度明显升高，医生诊断冷凝集素病（原文照录）',
        进一步检查: 'DAT C3 阳性（医生报告原文）；滴度每年冬季复测（次数见指标记录）',
        继发病因筛查: '2024-06 起按医生安排定期排查淋巴增殖性疾病（影像与化验，见报告）',
        就诊医院: '示例市中心医院血液内科；2025 起跨院随诊',
        医生行动计划原话: '冬季注意全身保暖，避免冷饮食；若尿色加深、心慌或乏力加重，当天联系我或到血液科急诊。（陈医生 2025-11-30 门诊原话照录）'
      },
      flaps: [
        { id: 'b-f1', start: '2023-12-08', end: '2024-01-14', trigger: '寒潮', note: '首次住院（时间按出院小结整理）', private: false },
        { id: 'b-f2', start: '2024-11-25', end: '2025-01-06', trigger: '冬季降温', note: '冬季发作，较长', private: false },
        { id: 'b-f3', start: '2025-03-02', end: '2025-03-15', trigger: '开冰箱拿冷食后', note: '短发作，保暖后缓解', private: false },
        { id: 'b-f4', start: '2025-12-10', end: '2026-01-20', trigger: '未知', note: '冬季发作，输血一次后好转（见输血登记）', private: false },
        { id: 'b-f5', start: '2026-02-28', end: '2026-03-09', trigger: '吹冷风', note: '耳廓发紫，较短', private: false },
        { id: 'b-f6', start: '2026-11-01', end: null, trigger: '降温', note: '最近一次，进行中', private: false },
        { id: 'b-f7', start: '2026-09-14', end: '2026-09-16', trigger: '（私密示例）游泳后', note: '短暂发紫未就医，仅自己记', private: true }
      ],
      labs: [
        { id: 'b-l01', metric: 'Hb', date: '2023-12-08', value: 68, unit: 'g/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l02', metric: 'LDH', date: '2023-12-08', value: 512, unit: 'U/L', method: '速率法', org: '示例市中心医院', private: false },
        { id: 'b-l03', metric: 'CAT', date: '2023-12-09', value: 1024, unit: '1:x', method: '试管倍比稀释', org: '示例市中心医院', private: false },
        { id: 'b-l04', metric: 'HAPT', date: '2023-12-08', value: 31, unit: 'mg/L', method: '免疫比浊', org: '示例市中心医院', private: false },
        { id: 'b-l05', metric: 'IBIL', date: '2023-12-08', value: 38, unit: 'µmol/L', method: '重氮法', org: '示例市中心医院', private: false },
        { id: 'b-l06', metric: 'Hb', date: '2024-01-12', value: 96, unit: 'g/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l07', metric: 'RET', date: '2024-01-12', value: 4.8, unit: '%', method: '流式', org: '示例市中心医院', private: false },
        { id: 'b-l08', metric: 'CAT', date: '2024-11-26', value: 512, unit: '1:x', method: '试管倍比稀释', org: '示例市中心医院', private: false },
        { id: 'b-l09', metric: 'Hb', date: '2024-11-26', value: 84, unit: 'g/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l10', metric: 'LDH', date: '2024-11-26', value: 402, unit: 'U/L', method: '速率法', org: '示例市中心医院', private: false },
        { id: 'b-l11', metric: 'Hb', date: '2025-01-18', value: 103, unit: 'g/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l12', metric: 'CAT', date: '2025-03-03', value: 256, unit: '1:x', method: '试管倍比稀释', org: '示例市第二医院', private: false },
        { id: 'b-l13', metric: 'Hb', date: '2025-03-03', value: 99, unit: 'g/L', method: '血常规 五分类', org: '示例市第二医院', private: false },
        { id: 'b-l14', metric: 'WBC', date: '2025-03-03', value: 7.1, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市第二医院', private: false },
        { id: 'b-l15', metric: 'PLT', date: '2025-03-03', value: 216, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市第二医院', private: false },
        { id: 'b-l16', metric: 'CAT', date: '2025-12-11', value: 512, unit: '1:x', method: '试管倍比稀释', org: '示例市中心医院', private: false },
        { id: 'b-l17', metric: 'Hb', date: '2025-12-11', value: 76, unit: 'g/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l18', metric: 'LDH', date: '2025-12-11', value: 468, unit: 'U/L', method: '速率法', org: '示例市中心医院', private: false },
        { id: 'b-l19', metric: 'Hb', date: '2026-01-22', value: 92, unit: 'g/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l20', metric: 'Hb', date: '2026-11-02', value: 88, unit: 'g/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l21', metric: 'RET', date: '2026-11-02', value: 5.2, unit: '%', method: '流式', org: '示例市中心医院', private: false },
        { id: 'b-l22', metric: 'LDH', date: '2026-11-02', value: 377, unit: 'U/L', method: '速率法', org: '示例市中心医院', private: false },
        { id: 'b-l23', metric: '体重', date: '2026-11-02', value: 58.0, unit: 'kg', method: '自录', org: '自录', private: false },
        { id: 'b-l24', metric: 'Hb', date: '2026-09-15', value: 95, unit: 'g/L', method: '自述外院', org: '外院（未核对）', private: true }
      ],
      treatments: [
        { id: 'b-t1', date: '2023-12-15', kind: '输血', name: '红细胞悬液 2 单位（输血科医嘱原文照录）', note: '医生交代：血样与血袋需保温送检、加温输血（原话照录，具体要求问输血科）', private: false },
        { id: 'b-t2', date: '2025-12-28', kind: '输血', name: '红细胞悬液 2 单位', note: '同前次特殊要求（医生门诊重申）', private: false },
        { id: 'b-t3', date: '2024-06-11', kind: '复诊', name: '继发病因筛查：影像+化验（原文照录）', note: '', private: false },
        { id: 'b-t4', date: '2025-06-09', kind: '复诊', name: '继发病因年度复查（原文照录）', note: '', private: false }
      ],
      meds: [
        { id: 'b-m1', name: '叶酸（医生安排）', schedule: '每日（具体见处方）', since: '2023-12-20', note: '合成示例：不写剂量' }
      ],
      questions: [
        { id: 'b-q1', addedOn: '2026-11-03', q: '今年滴度复测什么时候安排？', answered: false, private: false },
        { id: 'b-q2', addedOn: '2026-10-30', q: '（私密示例）手紫的时候能不能用热水泡？', answered: false, private: true }
      ],
      hospitals: [
        { id: 'b-h1', name: '示例市中心医院', dept: '血液内科', contact: '电话见出院小结', ver: 2 },
        { id: 'b-h2', name: '示例市第二医院', dept: '血液科门诊', contact: '出处引用：2025-03-03 化验单抬头', ver: 1 }
      ],
      reports: [
        { id: 'b-r1', title: '出院小结（2024-01-14）', date: '2024-01-14', kind: '病历', source: '原件已登记', keydesc: '「出院诊断：冷凝集素病；DAT C3 阳性」（医生报告原文）', private: false },
        { id: 'b-r2', title: '滴度化验单（2025-12-11）', date: '2025-12-11', kind: '化验', source: '原件已登记', keydesc: '', private: false },
        { id: 'b-r3', title: '年度复查影像报告（2025-06-09）', date: '2025-06-09', kind: '影像', source: '未取得原件', keydesc: '', private: false },
        { id: 'b-r4', title: '（私密示例）外院化验单（2026-09-15）', date: '2026-09-15', kind: '化验', source: '未核对', keydesc: '', private: true }
      ],
      docs: [
        { id: 'b-d1', name: '2024-01-14 出院小结', date: '2024-01-14', type: '病历', state: '已登记' },
        { id: 'b-d2', name: '2025-06-09 复查报告', date: '2025-06-09', type: '影像', state: '已登记' },
        { id: 'b-d3', name: '（日期未知示例）旧化验单', date: null, type: '化验', state: '待核对' }
      ],
      mind: {
        feel: [
          { d: '2026-11-02', text: '每年冬天都要重新适应一遍，今年提前把手套放在门口了。', author: '本人', private: false },
          { d: '2026-11-05', text: '（私密记录示例）最近一次发作比去年轻，但还是很怕发展。', author: '本人', private: true }
        ],
        family: [
          { d: '2026-11-03', text: '女儿帮我把「不能碰冷的东西」贴在了冰箱上。', author: '家属', private: false }
        ]
      }
    }
  ]
}

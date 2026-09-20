export const profile = {
  name: '庄依文',
  englishName: 'Zhuang Yiwen',
  title: '意向岗位 空间设计师 / 景观设计师',
  role: '空间设计师 · 景观设计 · 方案策划',
  location: '厦门',
  available: '可接项目',
  intro:
    '我热爱空间设计与自然景观，关注人与场地、文化与情感之间的关系。擅长将场地研究、体验逻辑和视觉表达转化为具有识别度与使用价值的公共空间与景观系统。',
  introEN:
    'I am passionate about spatial and landscape design, focusing on the relationship between people, place, culture, and emotion. My work translates site research, experiential logic, and visual expression into public spaces and landscape systems that are memorable, practical, and context-aware.',
  email: '2429636288@qq.com',
  phone: '15892020035',
  wechat: 'ZzEven11_',
  education: '厦门大学嘉庚学院 · 环境设计',
  educationEN: 'Xiamen University of Technology, Xiamen · Environmental Design',
}

export const resumeVersions = [
  {
    lang: '中文',
    title: '个人简历',
    summary: '我是一名从人、场地与文化出发的空间设计师，擅长把研究、叙事与空间策略转化为具有层次感的公共体验设计。我的作品聚焦于城市更新、文旅空间、社区参与与景观场所设计。',
    bullets: [
      '擅长从现场观察、文化脉络和使用者行为中提炼设计问题',
      '参与公共空间、社区场所与文化项目的概念和落地工作',
      '负责概念推进、空间表达、导视与视觉传播的全过程协作',
    ],
  },
  {
    lang: 'English',
    title: 'Curriculum Vitae',
    summary: 'I am a spatial designer focused on the intersection of people, place, and cultural memory. My work translates research, storytelling, and spatial strategy into public experiences that feel intuitive, meaningful, and emotionally resonant.',
    bullets: [
      'Research-led concept development for public, cultural, and community-based spaces',
      'Spatial storytelling and experience design for place-based transformation',
      'Visual communication, wayfinding, and environmental programming across project phases',
    ],
  },
]

export const stats = [
  { value: '2002.03.31', label: '出生日期' },
  { value: '厦门大学嘉庚学院', label: '毕业院校' },
  { value: '空间 / 景观 / 手绘', label: '专业方向' },
]

export const highlights = [
  { label: '专业技能', value: '空间设计 / 景观设计 / 平面设计 / 手绘 / 文案写作 / 摄影剪辑' },
  { label: '软件', value: 'Adobe Photoshop / Illustrator / InDesign / AutoCAD / SketchUp / Rhino / V-Ray / Lumion' },
  { label: '状态', value: '可长期合作 · 可接项目' },
]

export const projects = [
  {
    id: 'anhai',
    title: '基于时空叠变和情感触发的泉州安海古街道更新设计',
    category: 'PLACE',
    year: '2024',
    description:
      '围绕古街空间重构与情感记忆回溯，通过人流组织、场景重构和节点设计，将街巷的历史脉络与日常生活经验重新编织成具有识别度的公共体验。',
    tags: ['文化街区', '老街更新', '空间叙事'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    accent: 'moss',
    detail: {
      overview: '以安海古街的時間層疊與地方情感為線索，重新整理街巷、節點與日常活動之間的關係，讓歷史空間回到可被使用的生活場景。',
      scope: '場地調研 / 古街更新 / 節點設計',
      method: '從街道記憶、步行路徑與人群停留行為中提煉空間敘事。',
      note: '畢業設計｜泉州安海古街道更新研究',
    },
  },
  {
    id: 'deep-street',
    title: '基于赤坎镇深堤村旧城区更新设计',
    category: 'COMMUNITY',
    year: '2023',
    description:
      '从地域记忆和生活场景出发，借助空间层次、步行体验和公共功能整合，提升老城区的可读性、连续性和参与性。',
    tags: ['社区更新', '历史街区', '公共空间'],
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
    accent: 'coral',
    detail: {
      overview: '以赤坎鎮深堤村的地域記憶與生活場景為起點，建立連續的步行體驗和更具參與感的公共空間。',
      scope: '社區研究 / 空間整合 / 公共設施',
      method: '整理舊城尺度、生活路徑與社區交往節點，建立更新優先序。',
      note: '舊城更新設計｜以生活脈絡回應地方變化',
    },
  },
  {
    id: 'park',
    title: '基于人群心理研究下的景观公园设计',
    category: 'PLACE',
    year: '2022',
    description:
      '考察游客停留、活动节奏和情绪体验，建立以空间感受和步行逻辑为核心的景观设计策略，让场地在功能与情感上形成自然衔接。',
    tags: ['景观公园', '行为研究', '体验设计'],
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85',
    accent: 'gold',
    detail: {
      overview: '從人群心理與活動節奏出發，將停留、穿行、觀看與交流轉化為一套具有情緒層次的景觀空間。',
      scope: '人群研究 / 景觀策略 / 空間體驗',
      method: '觀察不同使用者的活動節點，將行為資料轉化為空間序列。',
      note: '景觀公園設計｜以心理感受建立步行秩序',
    },
  },
  {
    id: 'reading-room',
    title: '基于水景与生活体验的城市休憩空间设计',
    category: 'SPACE',
    year: '2022',
    description:
      '设计以放慢节奏、增强社交连接与自然感知为核心，结合水景、步道和聚集空间，营造日常使用中的舒适公共环境。',
    tags: ['公共空间', '休憩设计', '体验规划'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    accent: 'blue',
    detail: {
      overview: '以水景、步道與聚集空間組成慢行的休憩場景，回應城市日常中對自然感、社交與片刻停留的需求。',
      scope: '公共空間 / 景觀設計 / 使用體驗',
      method: '以光影、水聲與步行速度建立一段可被感知的城市日常。',
      note: '城市休憩空間｜水景與生活體驗設計',
    },
  },
]

export const experience = [
  { period: '2022 — 2024', company: '毕业设计与项目实践', role: '空间设计师 / 景观设计师' },
  { period: '2021 — 2022', company: '校园竞赛与社团项目', role: '概念设计 / 方案表达' },
  { period: '2019 — 2021', company: '手绘与视觉输出', role: '平面表达 / 方案展示' },
]

export const thinkingSteps = [
  { number: '01', title: '观察', detail: '现场调研 / 文化解读 / 人群行为 / 情感气候' },
  { number: '02', title: '分析', detail: '场地逻辑 / 使用需求 / 价值指向 / 记忆梳理' },
  { number: '03', title: '设计', detail: '空间策略 / 视觉语言 / 公共体验' },
]

export const capabilities = [
  '空间设计与场地策略',
  '公共空间与文化体验设计',
  '研究导向的概念发展',
  '导视与视觉识别系统',
]

export const services = [
  '空间概念与方案策略',
  '文化场所与景观空间设计',
  '叙事导向的视觉传播',
  '体验与导视系统设计',
]

export const notes = [
  { date: '2022年暑期', title: '“三下乡”社会实践校级一等奖', type: '荣誉' },
  { date: '2022年暑期', title: '“三下乡”社会实践校级先进个人', type: '荣誉' },
  { date: '2022年8月', title: '福建省高校大学生环境设计大赛省级银奖', type: '赛事' },
  { date: '2022年10月', title: '厦门市设计奖铜奖', type: '赛事' },
  { date: '2022年11月', title: 'HKDADC香港数字艺术设计大赛（秋季赛）二等奖', type: '赛事' },
  { date: '2022年12月', title: 'HKDADC香港数字艺术设计大赛三等奖', type: '赛事' },
  { date: '2023年5月', title: '米兰设计周中国高校设计学科师生优秀作品展赛银奖', type: '赛事' },
  { date: '2023年6月', title: '米兰设计周中国高校设计学科师生优秀作品展国际赛银奖', type: '赛事' },
]

export const faqItems = [
  {
    question: '我擅长什么类型的设计？',
    answer:
      '我擅长公共空间、文化场所、街区更新和景观体验设计，并关注设计如何通过空间、材料和叙事来增强地方认同与使用体验。',
  },
  {
    question: '我的设计流程是什么？',
    answer:
      '我会先进行现场观察和场地研究，再梳理使用者行为和文化脉络，之后进入概念推演、空间表达和视觉呈现，最终形成可以落地的方案。',
  },
  {
    question: '我如何与团队协作？',
    answer:
      '我习惯通过沟通、反复讨论和概念迭代来推进项目，保证方案在表达清晰、逻辑成立、使用价值明确的同时保持情感张力。',
  },
  {
    question: '我接受什么合作方式？',
    answer:
      '我可以接受项目合作、方案咨询、方案表达、视觉设计与概念深化等不同形式的合作，适合机构、设计团队及跨区域协作。',
  },
]
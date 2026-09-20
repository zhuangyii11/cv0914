export const profile = {
  name: '莊依文',
  englishName: 'Zhuang Yiwen',
  title: '意向職位 空間設計師 / 景觀設計師',
  role: '空間設計師 · 景觀設計 · 方案策劃',
  location: '廈門',
  available: '可接項目',
  intro:
    '我熱愛空間設計與自然景觀，關注人與場地、文化與情感之間的關係。擅長將場地研究、體驗邏輯和視覺表達轉化為具有識別度與使用價值的公共空間與景觀系統。',
  introEN:
    'I am passionate about spatial and landscape design, focusing on the relationship between people, place, culture, and emotion. My work translates site research, experiential logic, and visual expression into public spaces and landscape systems that are memorable, practical, and context-aware.',
  email: '2429636288@qq.com',
  phone: '15892020035',
  wechat: 'ZzEven11_',
  education: '香港嶺南大學 · 環境設計',
  educationEN: 'Xiamen University of Technology, Xiamen · Environmental Design',
}

export const resumeVersions = [
  {
    lang: '中文',
    title: '個人履歷',
    summary: '我是一名從人、場地與文化出發的空間設計師，擅長把研究、敘事與空間策略轉化為具有層次感的公共體驗設計。我的作品聚焦於城市更新、文旅空間、社區參與與景觀場所設計。',
    bullets: [
      '擅長從現場觀察、文化脈絡和使用者行為中提煉設計問題',
      '參與公共空間、社區場所與文化項目的概念和落地工作',
      '負責概念推進、空間表達、導視與視覺傳播的全過程協作',
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
  { value: '廈門大學嘉庚學院', label: '畢業院校' },
  { value: '空間 / 景觀 / 手繪', label: '專業方向' },
]

export const highlights = [
  { label: '專業技能', value: '空間設計 / 景觀設計 / 平面設計 / 手繪 / 文案寫作 / 攝影剪輯' },
  { label: '软件', value: 'Adobe Photoshop / Illustrator / InDesign / AutoCAD / SketchUp / Rhino / V-Ray / Lumion' },
  { label: '狀態', value: '可長期合作 · 可接項目' },
]

export const projects = [
  {
    id: 'anhai',
    title: '基於時空疊變和情感觸發的泉州安海古街道更新設計',
    category: 'PLACE',
    year: '2024',
    description:
      '圍繞古街空間重構與情感記憶回溯，通過人流組織、場景重構和節點設計，將街巷的歷史脈絡與日常生活經驗重新編織成具有識別度的公共體驗。',
    tags: ['文化街區', '老街更新', '空間敘事'],
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
    title: '基於赤坎鎮深堤村舊城區更新設計',
    category: 'COMMUNITY',
    year: '2023',
    description:
      '從地域記憶和生活場景出發，借助空間層次、步行體驗和公共功能整合，提升老城區的可讀性、連續性和參與性。',
    tags: ['社區更新', '歷史街區', '公共空間'],
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
    title: '基於人群心理研究下的景觀公園設計',
    category: 'PLACE',
    year: '2022',
    description:
      '考察遊客停留、活動節奏和情緒體驗，建立以空間感受和步行邏輯為核心的景觀設計策略，讓場地在功能與情感上形成自然銜接。',
    tags: ['景觀公園', '行為研究', '體驗設計'],
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
    title: '基於水景與生活體驗的城市休憩空間設計',
    category: 'SPACE',
    year: '2022',
    description:
      '設計以放慢節奏、增強社交連接與自然感知為核心，結合水景、步道和聚集空間，營造日常使用中的舒適公共環境。',
    tags: ['公共空間', '休憩設計', '體驗規劃'],
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
  { period: '2022 — 2024', company: '畢業設計與項目實踐', role: '空間設計師 / 景觀設計師' },
  { period: '2021 — 2022', company: '校園競賽與社團項目', role: '概念設計 / 方案表達' },
  { period: '2019 — 2021', company: '手繪與視覺輸出', role: '平面表達 / 方案展示' },
]

export const thinkingSteps = [
  { number: '01', title: '觀察', detail: '現場調研 / 文化解讀 / 人群行為 / 情感氣候' },
  { number: '02', title: '分析', detail: '場地邏輯 / 使用需求 / 價值指向 / 記憶梳理' },
  { number: '03', title: '設計', detail: '空間策略 / 視覺語言 / 公共體驗' },
]

export const capabilities = [
  '空間設計與場地策略',
  '公共空間與文化體驗設計',
  '研究導向的概念發展',
  '導視與視覺識別系統',
]

export const services = [
  '空間概念與方案策略',
  '文化場所與景觀空間設計',
  '敘事導向的視覺傳播',
  '體驗與導視系統設計',
]

export const notes = [
  { date: '2022年暑期', title: '「三下鄉」社會實踐校級一等獎', type: '榮譽' },
  { date: '2022年暑期', title: '「三下鄉」社會實踐校級先進個人', type: '榮譽' },
  { date: '2022年8月', title: '福建省高校大學生環境設計大賽省級銀獎', type: '賽事' },
  { date: '2022年10月', title: '廈門市設計獎銅獎', type: '賽事' },
  { date: '2022年11月', title: 'HKDADC香港數字藝術設計大賽（秋季賽）二等獎', type: '賽事' },
  { date: '2022年12月', title: 'HKDADC香港數字藝術設計大賽三等獎', type: '賽事' },
  { date: '2023年5月', title: '米蘭設計週中國高校設計學科師生優秀作品展賽銀獎', type: '賽事' },
  { date: '2023年6月', title: '米蘭設計週中國高校設計學科師生優秀作品展國際賽銀獎', type: '賽事' },
]

export const faqItems = [
  {
    question: '我擅長什麼類型的設計？',
    answer:
      '我擅長公共空間、文化場所、街區更新和景觀體驗設計，並關注設計如何通過空間、材料和敘事來增強地方認同與使用體驗。',
  },
  {
    question: '我的設計流程是什麼？',
    answer:
      '我會先進行現場觀察和場地研究，再梳理使用者行為和文化脈絡，之後進入概念推演、空間表達和視覺呈現，最終形成可以落地的方案。',
  },
  {
    question: '我如何與團隊協作？',
    answer:
      '我習慣通過溝通、反覆討論和概念迭代來推進項目，保證方案在表達清晰、邏輯成立、使用價值明確的同時保持情感張力。',
  },
  {
    question: '我接受什麼合作方式？',
    answer:
      '我可以接受項目合作、方案諮詢、方案表達、視覺設計與概念深化等不同形式的合作，適合機構、設計團隊及跨區域協作。',
  },
]
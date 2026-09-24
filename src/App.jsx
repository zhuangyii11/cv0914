import { useEffect, useState } from 'react'
import '@google/model-viewer'
import { capabilities, highlights, notes, profile, projects, thinkingSteps } from './data'
import heroGarden from './assets/庄依文个人简历及作品集_20.png'
import './App.css'

const filters = ['視覺體驗', '場域更新', '社區設計', '空間體驗']
const categoryLabels = { PLACE: '場域更新', COMMUNITY: '社區設計', SPACE: '空間體驗' }

function ArrowIcon() { return <span className="arrow-icon" aria-hidden="true">↗</span> }

function App() {
  const [activeFilter, setActiveFilter] = useState('全部')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const visibleProjects = activeFilter === '視覺體驗' ? projects : projects.filter((project) => categoryLabels[project.category] === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [activeFilter])

  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === 'Escape') { setSelectedProject(null); setMobileOpen(false) } }
    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = mobileOpen || selectedProject ? 'hidden' : ''
    return () => { document.removeEventListener('keydown', closeOnEscape); document.body.style.overflow = '' }
  }, [mobileOpen, selectedProject])

  return (
    <div className="page-shell">
      <header className={`site-header ${mobileOpen ? 'menu-open' : ''}`}>
        <div className="site-header__inner">
          <a className="wordmark" href="#top" aria-label="回到首頁">ZHUANG<span>.</span></a>
          <nav className="nav-links" aria-label="主要導覽"><a href="#work">作品</a><a href="#three-d">3D 展示</a><a href="#about">關於</a><a href="#awards">獎項</a></nav>
          <a className="header-contact" href={`mailto:${profile.email}`}>聯絡我 <ArrowIcon /></a>
          <button className="menu-btn" type="button" aria-expanded={mobileOpen} aria-label="開啟選單" onClick={() => setMobileOpen((current) => !current)}><span /><span /></button>
        </div>
      </header>

      <div className={`mobile-nav ${mobileOpen ? 'show' : ''}`} aria-hidden={!mobileOpen}>
        <div className="mobile-nav__overlay" onClick={() => setMobileOpen(false)} />
        <div className="mobile-nav__panel"><button className="mobile-nav__close" type="button" onClick={() => setMobileOpen(false)}>關閉 ×</button><div className="mobile-nav__links">{['top', 'work', 'three-d', 'about', 'awards'].map((id, index) => <a href={`#${id}`} key={id} onClick={() => setMobileOpen(false)}>{['首頁', '作品', '3D 展示', '關於', '獎項'][index]}</a>)}<a href={`mailto:${profile.email}`} onClick={() => setMobileOpen(false)}>聯絡我 ↗</a></div></div>
      </div>

      <main className="site-shell">
        <section className="hero reveal" id="top"><div className="hero-aside"><span>個人簡歷 & 作品集</span><span>2022 — 2026</span></div><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> 個人作品集</p><h1>{profile.name}<span>{profile.englishName}</span></h1><p className="hero-role">{profile.title}</p><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><a className="pill-btn" href="#work">瀏覽作品 <ArrowIcon /></a><a className="text-link" href={`mailto:${profile.email}`}>開始對話 <ArrowIcon /></a></div></div><div className="hero-visual"><div className="portrait-frame"><img src={heroGarden} alt="庭園景觀設計效果圖" /><div className="portrait-overlay"><strong>ZHUANG</strong><span>SPACE / LANDSCAPE<br />DESIGNER</span></div></div><div className="hero-note">把地方的記憶<br />變成可以被感受的空間</div></div><div className="hero-scroll">向下探索 <span>↓</span></div></section>

        <section className="intro-grid reveal" id="about"><div className="section-label"><span>01</span><span>PROFILE</span></div><div><p className="display-copy">從人的感受出發，讓空間回應地方、日常與時間。</p><p className="body-copy">我是一名環境設計背景的空間與景觀設計師，關注城市更新、文化場域與公共生活。透過研究、敘事與清晰的視覺表達，將一個地方的故事轉化成可被使用、記憶與重新想像的體驗。</p></div><div className="profile-meta"><div><span>所在地</span><strong>{profile.location}</strong></div><div><span>學歷</span><strong>{profile.education}</strong></div><div><span>專長</span><strong>空間設計 / 景觀設計</strong></div></div></section>

        <section className="three-d-section reveal" id="three-d">
          <div className="section-top"><div className="section-label"><span>02</span><span>3D EXPERIENCE</span></div><p className="section-caption">拖曳旋轉、滾動縮放，自動展示空間模型。</p></div>
          <div className="three-d-frame">
            <model-viewer
              src="/ting.glb"
              alt="空間設計 3D 模型"
              camera-controls
              auto-rotate
              rotation-per-second="20deg"
              camera-orbit="auto auto auto"
              field-of-view="auto"
              shadow-intensity="0.8"
              exposure="1"
              interaction-prompt="auto"
              loading="eager"
            />
          </div>
        </section>

        <section className="work-section reveal" id="work"><div className="section-top"><div className="section-label"><span>03</span><span>SELECTED WORK</span></div><p className="section-caption">以場地為起點，整理複雜的生活經驗。</p></div><div className="filter-bar" role="tablist" aria-label="作品分類">{filters.map((filter) => <button className={activeFilter === filter ? 'filter-button active' : 'filter-button'} key={filter} onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}>{filter}</button>)}</div><div className="project-grid" aria-live="polite">{visibleProjects.map((project, index) => <article className={`project-card project-card--${index % 2 ? 'light' : 'dark'}`} key={project.id}><button className="project-image-wrap project-open" type="button" onClick={() => setSelectedProject(project)} aria-label={`開啟${project.title}`}><img src={project.image} alt={project.title} className="project-image" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.parentElement.classList.add('image-fallback') }} /><span className="project-number">0{index + 1}</span><span className="project-open-label">OPEN ↗</span></button><div className="project-meta"><span>{categoryLabels[project.category]}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><button type="button" className="project-link" onClick={() => setSelectedProject(project)}>查看項目 <ArrowIcon /></button></article>)}</div></section>

        <section className="method-section reveal"><div className="section-label"><span>04</span><span>METHOD</span></div><div className="method-intro"><h2>先理解，再設計。</h2><p>設計不是把形式加到場地上，而是讓已有的生活脈絡變得更清楚。</p></div><div className="method-list">{thinkingSteps.map((step, index) => <button className={`method-step ${activeStep === index ? 'active' : ''}`} key={step.number} onClick={() => setActiveStep(index)}><span>{step.number}</span><strong>{step.title}</strong><p>{step.detail}</p><ArrowIcon /></button>)}</div></section>

        <section className="skills-section reveal"><div className="section-label"><span>05</span><span>CAPABILITIES</span></div><div className="skills-layout"><h2>把研究轉化為<br /><em>具體的空間語言。</em></h2><div className="skills-list">{capabilities.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div></div><div className="software-line"><span>熟練軟體</span><strong>{highlights[1].value}</strong></div></section>

        <section className="awards-section reveal" id="awards"><div className="section-top"><div className="section-label"><span>06</span><span>RECOGNITION</span></div><p className="section-caption">每一次參與，都是對設計思考的校準。</p></div><div className="awards-list">{notes.map((note, index) => <div className="award-item" key={note.title}><span>0{index + 1}</span><time>{note.date}</time><strong>{note.title}</strong><em>{note.type}</em></div>)}</div></section>

        <section className="cta-section reveal" id="contact"><div className="cta-mark">ZHUANG</div><div><p className="eyebrow">ZHUANG</p><h2>期待與你，<br /><em>一起把想法落地。</em></h2><a className="pill-btn pill-btn--dark" href={`mailto:${profile.email}`}>期待交流 <ArrowIcon /></a></div></section>

        {selectedProject && <div className="project-modal" role="dialog" aria-modal="true" aria-label={selectedProject.title} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null) }}><div className="project-modal__panel"><div className="project-modal__top"><span>PROJECT / {selectedProject.year}</span><button type="button" onClick={() => setSelectedProject(null)} aria-label="關閉項目詳情">關閉 ×</button></div><div className="project-modal__grid"><div className="project-modal__image"><img src={selectedProject.image} alt={selectedProject.title} /></div><div className="project-modal__content"><p className="eyebrow">{categoryLabels[selectedProject.category]}</p><h2>{selectedProject.title}</h2><p className="project-modal__description">{selectedProject.detail?.overview || selectedProject.description}</p><div className="project-modal__facts"><div><span>設計範圍</span><strong>{selectedProject.detail?.scope || '場地研究 / 空間策略 / 視覺表達'}</strong></div><div><span>核心方法</span><strong>{selectedProject.detail?.method || '由觀察出發，整理地方記憶與使用行為。'}</strong></div><div><span>關鍵詞</span><strong>{selectedProject.tags.join(' / ')}</strong></div></div><div className="project-modal__note">{selectedProject.detail?.note || '完整圖面與過程資料將持續整理更新。'}</div></div></div></div></div>}

        <footer className="site-footer"><div><span className="footer-name">{profile.name}</span><p>{profile.role}</p></div><div className="footer-contact"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={`tel:${profile.phone}`}>{profile.phone}</a><span>{profile.wechat}</span></div><small>© 2026 Zhuang Yiwen</small></footer>
      </main>
    </div>
  )
}

export default App

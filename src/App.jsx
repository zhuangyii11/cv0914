import { useEffect, useState } from 'react'
import { capabilities, highlights, profile, projects, stats, thinkingSteps } from './data'
import './App.css'

const filters = ['PLACE', 'COMMUNITY', 'SPACE']

function ArrowIcon() {
  return <span className="arrow-icon" aria-hidden="true">↗</span>
}

function App() {
  const [activeFilter, setActiveFilter] = useState('PLACE')
  const visibleProjects = projects.filter((project) => project.category === activeFilter)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [activeFilter])

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="回到首页">Zhuang Yiwen</a>
        <nav className="nav-links" aria-label="主要导航"><a href="#about">空间 / 文化 / 情感 / 叙事 / 视觉</a><a href="#notes">随笔</a></nav>
        <a className="contact-link" href={`mailto:${profile.email}`}>联系我 <ArrowIcon /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> {profile.available}</p><h1>把有趣的想法，<br /><em>落地</em>成有温度的体验</h1><a className="text-link" href="#work">看看我的作品 <ArrowIcon /></a></div>
        <div className="hero-orbit hero-profile"><strong>设计事务所</strong><span>2024-2025</span><span>2025-2026</span><span>2026-现在</span></div>
      </section>

      <section className="stats-row reveal" aria-label="职业概览">{stats.map((stat) => <div className="stat" key={stat.label}><span>{stat.label}</span></div>)}</section>
      <section className="highlights reveal" aria-label="设计重点">{highlights.map((item) => <div className="highlight-item" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</section>

      <section className="work-section section-wrap reveal" id="work"><div className="section-heading"><div><h2>WHAT I CREATE</h2></div></div><div className="filter-bar" role="tablist" aria-label="按主题筛选作品">{filters.map((filter) => <button className={activeFilter === filter ? 'filter-button active' : 'filter-button'} key={filter} onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}>{filter}</button>)}</div><div className="project-grid" aria-live="polite">{visibleProjects.map((project) => <article className={`project-card reveal ${project.accent}`} key={project.id}><div className="project-image-wrap"><img src={project.image} alt={`${project.title} 项目预览`} className="project-image" /><span className="project-year">{project.year}</span></div><div className="project-meta"><span>{project.category}</span><span>{project.tags.join('  /  ')}</span></div><h3>{project.title}</h3><p>{project.description}</p><a href={`#${project.id}`} className="project-link" aria-label={`查看 ${project.title}`}>查看项目 <ArrowIcon /></a></article>)}</div></section>

      <section className="about-section section-wrap reveal" id="about"><div className="about-intro"><h2>HOW I THINK</h2></div><div className="about-details"><p>空白场景 → 一条线出现 → 线变成空间平面 → 平面逐渐形成效果图。我尝试把文化、情感和场地信息转化为能够被感知的空间语言。</p><div className="thinking-list">{thinkingSteps.map((step) => <div className="thinking-item" key={step.number}><strong>{step.number}</strong><span><b>{step.title}</b>{step.detail}</span></div>)}</div><a className="quote-link" href={`mailto:${profile.email}`}>For me, design is not only about creating a space. It is about creating a relationship between people and place. <ArrowIcon /></a><div className="capabilities-list"><h2><span className="toolkit-title">MY TOOLKIT</span><span className="toolkit-list">01 / THINK<br />Research<br />Site Analysis<br />Concept Development<br />02 / DRAW<br />Sketch<br />Diagram<br />Technical Drawing<br />03 / MODEL<br />SketchUp<br />Rhino<br />AutoCAD<br />04 / VISUALIZE<br />Photoshop<br />Illustrator<br />Lumion</span></h2>{capabilities.map((item, index) => <a className="capability-item" href={`#${filters[index].toLowerCase()}`} key={item}>{item}</a>)}</div></div></section>

      <section className="notes-section closing-section section-wrap reveal" id="notes"><div className="closing-copy"><p className="closing-kicker">LET'S MAKE ROOM FOR THE NEXT IDEA.</p><h2>LET'S CREATE<br /><em>THE NEXT SPACE.</em></h2><a className="closing-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowIcon /></a></div></section>

      <footer className="footer"><div><span className="footer-name">{profile.englishName}</span><p>{profile.name} · {profile.role}</p></div><div className="footer-right"><span>{profile.education}</span><a href={`mailto:${profile.email}`}>{profile.email}</a><span>{profile.phone}</span><small>© 2026 {profile.englishName}</small></div></footer>
    </main>
  )
}

export default App
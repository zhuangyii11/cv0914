import { useState } from 'react'
import { experience, notes, profile, projects, stats } from './data'
import './App.css'

const filters = ['全部', '产品设计', '品牌体验', '服务创新', '视觉实验']

function ArrowIcon() {
  return <span className="arrow-icon" aria-hidden="true">↗</span>
}

function App() {
  const [activeFilter, setActiveFilter] = useState('全部')
  const visibleProjects = activeFilter === '全部' ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="回到首页">LY<span>.</span></a>
        <nav className="nav-links" aria-label="主要导航"><a href="#work">作品</a><a href="#about">关于</a><a href="#notes">随笔</a></nav>
        <a className="contact-link" href={`mailto:${profile.email}`}>联系我 <ArrowIcon /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> {profile.available}</p><h1>把想法，<em>做成</em><br />让人愿意靠近的体验。</h1><p className="hero-intro">{profile.intro}</p><a className="text-link" href="#work">看看我的作品 <ArrowIcon /></a></div>
        <div className="hero-orbit" aria-hidden="true"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-sun">06<br /><span>YEARS<br />OF MAKING</span></div><span className="orbit-label label-top">CURIOUS</span><span className="orbit-label label-bottom">ALWAYS LEARNING</span></div>
      </section>

      <section className="stats-row" aria-label="职业概览">{stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}<p className="stat-note">“设计不是装饰，<br />是让事情发生的方式。”</p></section>

      <section className="work-section section-wrap" id="work"><div className="section-heading"><div><p className="eyebrow">Selected work / 01</p><h2>最近在做的事</h2></div><p className="section-description">从一个问题出发，经过研究、共创与反复推敲，抵达一个更好的答案。</p></div><div className="filter-bar" role="tablist" aria-label="按领域筛选作品">{filters.map((filter) => <button className={activeFilter === filter ? 'filter-button active' : 'filter-button'} key={filter} onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}>{filter}</button>)}</div><div className="project-grid">{visibleProjects.map((project) => <article className={`project-card ${project.accent}`} key={project.id}><div className="project-image-wrap"><img src={project.image} alt={`${project.title} 项目预览`} className="project-image" /><span className="project-year">{project.year}</span></div><div className="project-meta"><span>{project.category}</span><span>{project.tags.join('  /  ')}</span></div><h3>{project.title}</h3><p>{project.description}</p><a href={`#${project.id}`} className="project-link" aria-label={`查看 ${project.title}`}>查看项目 <ArrowIcon /></a></article>)}</div></section>

      <section className="about-section section-wrap" id="about"><div className="about-intro"><p className="eyebrow">A little about me / 02</p><h2>我相信，<br /><em>好设计</em>应该有温度。</h2></div><div className="about-details"><p>我喜欢站在不同角色之间，听懂他们没有说出口的需求。工作的空隙里，我会去散步、拍照，或者在厨房里研究一道新菜。生活本身就是最好的研究。</p><div className="experience-list">{experience.map((item) => <div className="experience-item" key={item.company}><span>{item.period}</span><strong>{item.company}</strong><span>{item.role}</span></div>)}</div><a className="text-link" href={`mailto:${profile.email}`}>聊聊你的下一个项目 <ArrowIcon /></a></div></section>

      <section className="notes-section section-wrap" id="notes"><div className="section-heading compact"><div><p className="eyebrow">Notes to self / 03</p><h2>一些不太正式的想法</h2></div><a className="text-link" href="#notes">查看全部 <ArrowIcon /></a></div><div className="notes-list">{notes.map((note) => <a className="note-item" href={`#${note.date}`} key={note.date}><span>{note.date}</span><strong>{note.title}</strong><span>{note.type} <ArrowIcon /></span></a>)}</div></section>

      <footer className="footer"><div><span className="wordmark">LY<span>.</span></span><p>认真做事，好好生活。</p></div><div className="footer-right"><span>上海 / 远程协作</span><a href={`mailto:${profile.email}`}>{profile.email}</a><small>© 2024 Lin Yuan</small></div></footer>
    </main>
  )
}

export default App
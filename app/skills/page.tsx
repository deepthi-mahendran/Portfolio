'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const DATA = {
  skillCategories: [
    { name: 'Frontend', skills: [{ name: 'HTML5 & CSS3', level: 90 }, { name: 'JavaScript (ES6+)', level: 88 }, { name: 'Next.js', level: 88 }, { name: 'React.js', level: 85 }, { name: 'TypeScript', level: 82 }, { name: 'Tailwind CSS', level: 80 }, { name: 'Responsive Design', level: 85 }] },
    { name: 'Backend & Databases', skills: [{ name: 'FastAPI', level: 78 }, { name: 'Node.js', level: 75 }, { name: 'Express.js', level: 72 }, { name: 'PostgreSQL / MySQL', level: 80 }, { name: 'SQLite', level: 78 }, { name: 'Supabase', level: 70 }] },
    { name: 'Tools & Practices', skills: [{ name: 'Git / GitHub', level: 88 }, { name: 'Docker', level: 75 }, { name: 'VS Code', level: 90 }, { name: 'Vite & Vitest', level: 82 }, { name: 'Postman', level: 75 }, { name: 'Vercel', level: 80 }] },
    { name: 'Languages', skills: [{ name: 'JavaScript', level: 88 }, { name: 'TypeScript', level: 82 }, { name: 'Python', level: 75 }, { name: 'SQL', level: 78 }, { name: 'Java', level: 65 }, { name: 'PHP', level: 50 }] }
  ],
  allSkillTags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'FastAPI', 'PostgreSQL', 'Docker', 'Vite', 'Vitest', 'Node.js', 'Express.js', 'MySQL', 'Java', 'SQLite', 'Supabase', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'Vercel', 'Postman', 'Python', 'Sequelize', 'Zustand', 'Framer Motion'],
  skillProjectMap: {
    'Next.js': ['sara', 'elegant-notes'],
    'FastAPI': ['sara'],
    'PostgreSQL': ['sara', 'ssoc-2026'],
    'Docker': ['sara'],
    'Vite': ['sara'],
    'Vitest': ['sara'],
    'Java': ['cabXpert'],
    'MySQL': ['cabXpert'],
    'React': ['elegant-notes'],
    'TypeScript': ['elegant-notes'],
    'Node.js': ['ssoc-2026'],
    'Express.js': ['ssoc-2026'],
    'SQLite': ['slia-intern'],
    'Supabase': ['elegant-notes'],
    'HTML5': ['sara', 'my-educational'],
    'CSS3': ['sara', 'my-educational'],
    'JavaScript': ['sara', 'my-educational'],
    'Python': ['sara'],
    'Sequelize': ['ssoc-2026']
  },
  projects: [
    { id: 'sara', title: 'Sara — Modern E-Commerce Platform', description: 'Full-stack e-commerce platform with FastAPI + PostgreSQL backend, Docker deployment, and vanilla JS frontend.', category: 'fullstack', tags: ['FastAPI', 'PostgreSQL', 'JavaScript', 'Docker', 'Vite', 'Vitest'], image: '/images/Sara.png', link: 'https://sara-001.vercel.app/', github: 'https://github.com/deepthi-mahendran/Sara', detail: 'Full-stack e-commerce platform featuring 32 real products, 4-column responsive grid, JWT auth, AI visual similarity search (FAISS + Transformers), real-time shared cart via WebSockets, multi-step checkout, PWA support, and 117 test files (988 unit tests) with Vitest.' },
    { id: 'cabXpert', title: 'CabXpert — Vehicle Reservation System', description: 'Online vehicle reservation system automating bookings, driver & car management, and billing.', category: 'fullstack', tags: ['Java EE', 'Jersey (JAX-RS)', 'MySQL', 'JDBC', 'Maven', 'Bootstrap'], image: '/images/CarXpert.png', link: '#', github: 'https://github.com/Deepthi-Mahendran', detail: 'Automated vehicle reservation system built for Mega City Cab using Java RESTful Web Services (Jersey) and Test-Driven Development (TDD). Ensures high reliability, scalability, driver & car scheduling, and automated billing management.' },
    { id: 'elegant-notes', title: 'Elegant Notes — PWA', description: 'Offline-first note-taking PWA with real-time cloud sync and premium editor.', category: 'web', tags: ['React', 'TypeScript', 'Supabase', 'Tiptap', 'Zustand'], image: '/images/Elegant-Notes.webp', link: 'https://elegant-notes-demo.vercel.app/', github: 'https://github.com/deepthi-mahendran/elegant-notes', detail: 'High-performance offline-first PWA with Service Workers, Supabase for real-time cloud sync, secure authentication, and a premium Tiptap editor with complex formatting.' },
    { id: 'my-educational', title: 'My Educational Website', description: 'Clean single-page portfolio built with pure HTML, CSS, and JavaScript.', category: 'web', tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'], image: '/images/iaii.png', link: 'https://my-web-project-iaii.vercel.app/', github: 'https://github.com/deepthi-mahendran/my-web-project-iaii', detail: 'A clean, single-page static portfolio website built with pure HTML to showcase projects and academic work. Deployed on Vercel with a streamlined workflow.' },
    { id: 'ssoc-2026', title: 'PTET Web', description: '43 merged PRs — backend APIs, full-stack features, and UI enhancements.', category: 'opensource', tags: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'Social Summer of Code 2026', 'Collaborator'], image: '/images/ptetweb.png', link: 'https://github.com/AnthropicBots/ptet-web', github: 'https://github.com/AnthropicBots/ptet-web/pulls?q=is%3Apr+author%3Adeepthi-mahendran', detail: 'Open-source contributor with 40+ merged pull requests. Built backend APIs (Daily Tip, Study Materials CRUD, Recommendations, Bookmark), implemented full-stack features, and fixed dark/light theme support across the application.' },
    { id: 'slia-intern', title: 'SLIA Database Management', description: 'Built and maintained SQLite database for 700+ member practice registration.', category: 'fullstack', tags: ['SQLite', 'Data Management', 'Google Forms'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format', link: '#', github: '#', detail: 'Developed and maintained an SQLite database for member practice registration of 700+ members at Sri Lanka Institute of Architects. Processed member updates via Google Forms and coordinated communications.' }
  ]
}

export default function SkillsPage() {
  const [activeTag, setActiveTag] = useState('')
  const [modalData, setModalData] = useState<typeof DATA.projects[0] | null>(null)

  useEffect(() => {
    const fillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target as HTMLElement
          const target = fill.dataset.target
          fill.style.width = target + '%'
          fillObserver.unobserve(fill)
        }
      })
    }, { threshold: 0.3 })
    document.querySelectorAll('.skill-bar-fill').forEach(f => fillObserver.observe(f))
    
    return () => fillObserver.disconnect()
  }, [])

  const relatedProjectIds = activeTag ? (DATA.skillProjectMap as Record<string, string[]>)[activeTag] || [] : []
  const relatedProjects = DATA.projects.filter(p => relatedProjectIds.includes(p.id))

  return (
    <>
      <section className="section-padding" style={{ paddingTop: '120px' }}>
        <div className="container">
          <h2 className="section-title">Tech Stack &amp; <span className="accent-text">Expertise</span></h2>
          <p className="section-subtitle">Tools, languages, and frameworks I work with daily.</p>

          <div id="skillsContainer">
            {DATA.skillCategories.map(cat => (
              <div className="skill-category" key={cat.name}>
                <h3>{cat.name}</h3>
                {cat.skills.map(s => (
                  <div className="skill-bar-wrap" data-level={s.level} key={s.name}>
                    <div className="label">
                        <span>{s.name}</span>
                        <span>{s.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                        <div className="skill-bar-fill" style={{ width: '0%' }} data-target={s.level}></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <h3 className="section-title" style={{ fontSize: '1.6rem', marginTop: '48px' }}>Skill <span className="accent-text">Cloud</span></h3>
          <p className="section-subtitle" style={{ marginBottom: '16px' }}>Click a skill to see related projects.</p>
          <div className="skill-tag-cloud" id="skillCloud">
            {DATA.allSkillTags.map(tag => (
              <span 
                key={tag} 
                className={`skill-tag ${activeTag === tag ? 'active' : ''}`} 
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </span>
            ))}
          </div>

          <div id="relatedProjectsContainer">
            {activeTag && (
              relatedProjects.length === 0 ? (
                <p style={{ color: 'var(--text-secondary)' }}>No projects found for <strong>{activeTag}</strong>. Try another tag.</p>
              ) : (
                <>
                  <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Projects using <span className="accent-text">{activeTag}</span></h4>
                  <div className="related-projects">
                    {relatedProjects.map(p => (
                      <div className="rp-item" key={p.id} onClick={() => setModalData(p)}>
                        <h4>{p.title}</h4>
                        <p>{p.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      <div className={`modal-overlay ${modalData ? 'open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setModalData(null) }}>
        <div className="modal-content">
          <button className="modal-close" onClick={() => setModalData(null)} aria-label="Close modal">✕</button>
          
          {modalData && (
            <div id="modalBody">
              <div className="thumb" style={{ position: 'relative', margin: '-40px -40px 24px -40px', height: '280px', width: 'calc(100% + 80px)', borderRadius: 0 }}><Image src={modalData.image} alt={modalData.title} fill sizes="100vw" style={{ objectFit: 'cover' }} /></div>
              <h2>{modalData.title}</h2>
              <div className="meta">{modalData.category} · {modalData.tags.join(' · ')}</div>
              <p className="desc">{modalData.detail || modalData.description}</p>
              <div className="tech-list">{modalData.tags.map(t => <span key={t}>{t}</span>)}</div>
              <div className="links">
                  {modalData.link && modalData.link !== '#' && <a href={modalData.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">🔗 Live Site</a>}
                  {modalData.github && modalData.github !== '#' && <a href={modalData.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">🐙 GitHub</a>}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

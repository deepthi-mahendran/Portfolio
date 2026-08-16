'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const DATA = {
  projects: [
    {
      id: 'sara',
      title: 'Sara — Modern E-Commerce Platform',
      description: 'Full-stack e-commerce platform with FastAPI + PostgreSQL backend, Docker deployment, and vanilla JS frontend.',
      category: 'fullstack',
      tags: ['FastAPI', 'PostgreSQL', 'JavaScript', 'Docker', 'Vite', 'Vitest'],
      image: '/images/Sara.png',
      link: 'https://sara-001.vercel.app/',
      github: 'https://github.com/deepthi-mahendran/Sara',
      detail: 'Full-stack e-commerce platform featuring 32 real products, 4-column responsive grid, JWT auth, AI visual similarity search (FAISS + Transformers), real-time shared cart via WebSockets, multi-step checkout, PWA support, and 117 test files (988 unit tests) with Vitest.'
    },
    {
      id: 'cabXpert',
      title: 'CabXpert — Vehicle Reservation System',
      description: 'Online vehicle reservation system automating bookings, driver & car management, and billing.',
      category: 'fullstack',
      tags: ['Java EE', 'Jersey (JAX-RS)', 'MySQL', 'JDBC', 'Maven', 'Bootstrap'],
      image: '/images/CarXpert.png',
      link: '#',
      github: 'https://github.com/Deepthi-Mahendran',
      detail: 'Automated vehicle reservation system built for Mega City Cab using Java RESTful Web Services (Jersey) and Test-Driven Development (TDD). Ensures high reliability, scalability, driver & car scheduling, and automated billing management.'
    },
    {
      id: 'elegant-notes',
      title: 'Elegant Notes — PWA',
      description: 'Offline-first note-taking PWA with real-time cloud sync and premium editor.',
      category: 'web',
      tags: ['React', 'TypeScript', 'Supabase', 'Tiptap', 'Zustand'],
      image: '/images/Elegant-Notes.webp',
      link: 'https://elegant-notes-demo.vercel.app/',
      github: 'https://github.com/deepthi-mahendran/elegant-notes',
      detail: 'High-performance offline-first PWA with Service Workers, Supabase for real-time cloud sync, secure authentication, and a premium Tiptap editor with complex formatting.'
    },
    {
      id: 'my-educational',
      title: 'My Educational Website',
      description: 'Clean single-page portfolio built with pure HTML, CSS, and JavaScript.',
      category: 'web',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      image: '/images/iaii.png',
      link: 'https://my-web-project-iaii.vercel.app/',
      github: 'https://github.com/deepthi-mahendran/my-web-project-iaii',
      detail: 'A clean, single-page static portfolio website built with pure HTML to showcase projects and academic work. Deployed on Vercel with a streamlined workflow.'
    },
    {
      id: 'ssoc-2026',
      title: 'PTET Web',
      description: '43 merged PRs — backend APIs, full-stack features, and UI enhancements.',
      category: 'opensource',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'Social Summer of Code 2026', 'Collaborator'],
      image: '/images/ptetweb.png',
      link: 'https://github.com/AnthropicBots/ptet-web',
      github: 'https://github.com/AnthropicBots/ptet-web/pulls?q=is%3Apr+author%3Adeepthi-mahendran',
      detail: 'Open-source contributor with 40+ merged pull requests. Built backend APIs (Daily Tip, Study Materials CRUD, Recommendations, Bookmark), implemented full-stack features, and fixed dark/light theme support across the application.'
    },
    {
      id: 'slia-intern',
      title: 'SLIA Database Management',
      description: 'Built and maintained SQLite database for 700+ member practice registration.',
      category: 'fullstack',
      tags: ['SQLite', 'Data Management', 'Google Forms'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
      link: '#',
      github: '#',
      detail: 'Developed and maintained an SQLite database for member practice registration of 700+ members at Sri Lanka Institute of Architects. Processed member updates via Google Forms and coordinated communications.'
    }
  ]
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [modalData, setModalData] = useState<typeof DATA.projects[0] | null>(null)
  
  const filteredProjects = filter === 'all' 
    ? DATA.projects 
    : DATA.projects.filter(p => p.category === filter)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    
    document.querySelectorAll('.project-grid-item').forEach(el => {
      observer.observe(el)
    })
    
    return () => observer.disconnect()
  }, [filter]) // Re-run animation when filter changes

  return (
    <>
      <section className="section-padding" style={{ paddingTop: '120px' }}>
        <div className="container">
          <h2 className="section-title">Things I've <span className="accent-text">Shipped</span></h2>
          <p className="section-subtitle">From web apps to open source — each project tells a story.</p>

          <div className="filter-bar" id="filterBar">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`filter-btn ${filter === 'web' ? 'active' : ''}`} onClick={() => setFilter('web')}>Web Apps</button>
            <button className={`filter-btn ${filter === 'opensource' ? 'active' : ''}`} onClick={() => setFilter('opensource')}>Open Source</button>
            <button className={`filter-btn ${filter === 'startup' ? 'active' : ''}`} onClick={() => setFilter('startup')}>Startups</button>
            <button className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`} onClick={() => setFilter('fullstack')}>Full-Stack</button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((p, i) => (
              <div 
                key={`${p.id}-${filter}`} 
                className="project-grid-item" 
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => setModalData(p)}
              >
                <div className="thumb" style={{ position: 'relative' }}><Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} /></div>
                <div className="info">
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                </div>
              </div>
            ))}
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

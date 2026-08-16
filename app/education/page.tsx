'use client'

import React from 'react'
import { motion } from 'framer-motion'

const EDUCATION_DATA = [
  {
    date: 'Jan 2026 - Present',
    degree: 'BSc in Information Technology',
    institution: 'University of Moratuwa',
    description: 'Currently pursuing my degree in Information Technology with a focus on modern software engineering paradigms and practical applications.'
  },
  {
    date: 'Sep 2025 - Present',
    degree: 'BSc in Computer Science',
    institution: 'University of the People',
    description: 'Expanding knowledge in core theoretical computer science fundamentals and algorithms.'
  },
  {
    date: '2024',
    degree: 'G.C.E. Advanced Level',
    institution: 'St. Anne\'s Girls\' School',
    description: 'Completed comprehensive higher secondary education marking the transition into higher education in computing.'
  },
  {
    date: '2021',
    degree: 'G.C.E. Ordinary Level',
    institution: 'Alexandra College',
    description: 'Completed comprehensive secondary education marking the transition into higher secondary education in commerce stream.'
  }
]

/*
const CERTIFICATES = [
  { id: 1, name: 'AWS Certified Cloud Practitioner', image: '/images/cert-1.jpg', link: '#' },
  { id: 2, name: 'React Developer Certification', image: '/images/cert-2.jpg', link: '#' },
  { id: 3, name: 'Frontend Web UI Frameworks', image: '/images/cert-3.jpg', link: '#' },
  { id: 4, name: 'Server-side Development', image: '/images/cert-4.jpg', link: '#' },
  { id: 5, name: 'Database Management', image: '/images/cert-5.jpg', link: '#' },
  { id: 6, name: 'Cybersecurity Fundamentals', image: '/images/cert-6.jpg', link: '#' },
]
*/

export default function EducationPage() {
  return (
    <section className="section-padding" style={{ paddingTop: '140px', minHeight: '100vh', paddingBottom: '100px' }}>
      <div className="container">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Academic <span className="gradient-text">Journey</span></h1>
          <p className="section-subtitle">A timeline of my formal education and degrees.</p>
        </motion.div>

        {/* Timeline Section */}
        <div style={{ marginTop: '48px', position: 'relative', paddingLeft: '24px', borderLeft: '2px dashed var(--border-color)' }}>
          {EDUCATION_DATA.map((item, index) => (
            <motion.div 
               key={index}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: '-50px' }}
               transition={{ delay: index * 0.15, duration: 0.5 }}
               className="glass-panel"
               style={{ marginBottom: '40px', padding: '32px', position: 'relative', marginLeft: '24px' }}
            >
               <div style={{ position: 'absolute', left: '-58px', top: '32px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 16px var(--accent-glow-strong)' }}></div>
               <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.5px' }}>{item.date}</span>
               <h3 style={{ margin: '8px 0', fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>{item.degree}</h3>
               <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{item.institution}</p>
               <p style={{ marginTop: '16px', color: 'var(--text-muted)' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/*
        Certificates Section
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           style={{ marginTop: '100px', marginBottom: '40px' }}
        >
          <h2 className="section-title">Licenses & <span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle">Click on any certificate to view detailed information and official credentials.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {CERTIFICATES.map((cert, index) => (
            <motion.a 
               href={cert.link}
               target="_blank"
               rel="noopener noreferrer"
               key={cert.id}
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true, margin: '-50px' }}
               whileHover={{ y: -8, borderColor: 'var(--accent)' }}
               transition={{ delay: index * 0.1, duration: 0.4 }}
               className="glass-panel"
               style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none', color: 'inherit', height: '100%', cursor: 'pointer' }}
            >
               <div style={{ width: '100%', height: '180px', background: 'var(--bg-surface-light)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
                 <Image src={cert.image} alt={cert.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                 <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(0,0,0,0.6)', padding: '8px', borderRadius: '50%', color: '#fff', backdropFilter: 'blur(8px)', transition: 'all 0.3s' }}>
                    <ExternalLink size={16} />
                 </div>
               </div>
               <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--accent)' }}>
                   <Award size={18} />
                   <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Verified Certificate</span>
                 </div>
                 <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>{cert.name}</h4>
                 <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                   <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                     View Credential <ExternalLink size={14} />
                   </span>
                 </div>
               </div>
            </motion.a>
          ))}
        </div>
        */}

      </div>
    </section>
  )
}

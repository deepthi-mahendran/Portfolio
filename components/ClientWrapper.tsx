'use client'

import { useEffect, useState } from 'react'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    // Hide preloader
    const timer = setTimeout(() => setLoading(false), 600)
    
    // Back to top
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <div id="preloader" className={!loading ? 'hidden' : ''}>
        <div className="preloader-dot"></div>
      </div>

      {/* Removed custom cursor as per user request */}

      {children}

      <div id="toastContainer" className="toast-container"></div>
      
      <button 
        className={`back-top ${showBackTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Timeline from '@/components/timeline'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import ScrollProgress from '@/components/scroll-progress'

import Script from 'next/script'

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mann Bhatt",
    "url": "https://mannbhatt.com",
    "image": "https://mannbhatt.com/mann.jpg",
    "sameAs": [
      "https://github.com/mannbhatt",
      "https://www.linkedin.com/in/mann-bhatt-04930a241",
      "https://twitter.com/Mann_Bhatt88"
    ],
    "jobTitle": "Creative Technologist & Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Government Engineering College, Gandhinagar"
    }
  }

  useEffect(() => {
    // Wait for fonts and initial paint, then reveal with animations
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setIsLoaded(true)
      })
    } else {
      // Fallback: short delay to allow first paint
      setTimeout(() => setIsLoaded(true), 100)
    }
  }, [])

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Loading screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-black text-black uppercase tracking-tight mb-3">
                Mann<span className="text-cyan-400">.</span>
              </div>
              <div className="w-32 h-1 bg-black/10 mx-auto overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-full bg-cyan-400"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content — rendered immediately in DOM for SEO, just visually hidden until loaded */}
      <main
        className="w-full overflow-x-hidden bg-background"
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease-out' }}
      >
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

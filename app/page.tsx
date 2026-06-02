'use client'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Timeline from '@/components/timeline'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import ScrollProgress from '@/components/scroll-progress'

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden bg-background">
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
  )
}

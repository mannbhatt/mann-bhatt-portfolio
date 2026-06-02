'use client'

import { motion, Variants } from 'framer-motion'
import { Github, Linkedin, Twitter, Download, ArrowRight } from 'lucide-react'
import { generateResumePDF } from '@/lib/resume-generator'

const Hero = () => {
  const handleResumeDownload = () => {
    generateResumePDF()
  }
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const floatingVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  const techStack = [
    // Core Skills
    { icon: '🚀', name: 'Full Stack' },
    { icon: '🤖', name: 'Machine Learning' },
    { icon: '📱', name: 'Mobile Apps' },
    { icon: '🌌', name: 'Astronomy' },
    { icon: '💼', name: 'Client Projects' },
    { icon: '🎨', name: 'UI/UX Design' },
  ]

  const socialLinks = [
    { icon: Github, url: 'https://github.com/mannbhatt', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/mann-bhatt-04930a241', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/Mann_Bhatt88', label: 'Twitter' },
  ]

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24 bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div className="space-y-8">
            {/* Main heading */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="border-b-4 border-cyan-400 pb-2 w-fit"
              >
                <span className="text-xs font-black uppercase tracking-widest text-black">
                  $ software_engineer
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight uppercase tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Mann Bhatt<br />
                <span className="text-pink-500">Creative Technologist</span>
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl font-medium leading-relaxed border-l-4 border-cyan-400 pl-4 sm:pl-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Building performant full-stack web applications, cross-platform mobile apps, and applied machine learning models. Specializing in Next.js, React Native, and Python-based data pipelines.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6"
            >
              <motion.a
                href="#projects"
                whileHover={{ x: -4, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="bordered-card px-6 sm:px-8 py-3 sm:py-4 bg-pink-500 text-white border-3 sm:border-4 border-black font-black uppercase text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 group"
              >
                View Work
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.button
                onClick={handleResumeDownload}
                whileHover={{ x: -4, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="bordered-card px-6 sm:px-8 py-3 sm:py-4 bg-white border-3 sm:border-4 border-black text-black font-black uppercase text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 group hover:shadow-lg transition-all cursor-pointer"
              >
                <Download className="w-4 sm:w-5 h-4 sm:h-5" />
                Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-lg bordered-card border-3 border-black bg-black flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Tech Stack Float */}

          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-3xl blur-2xl opacity-30" />
              <img
                src="/mann.jpg"
                alt="Mann Bhatt - Creative Technologist"
                className="relative w-full max-w-sm rounded-3xl border-4 border-black object-cover shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Tech Stack Float */}

        </motion.div>
        <motion.div
          variants={itemVariants}
          className="pt-8 sm:pt-10 md:pt-12 space-y-6 sm:space-y-8 mb-2"
        >
          <p className="text-black text-xs uppercase tracking-widest font-black border-b-4 border-black pb-2 w-fit">
            $ Tech Stack
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {techStack.map(({ icon, name }) => (
              <motion.div
                key={name}
                variants={floatingVariants}
                animate="animate"
                className="px-3 py-2 sm:px-4 sm:py-2.5 bordered-card bg-white border-2 border-black flex items-center gap-2 hover:shadow-lg transition-all"
              >
                <span className="text-base sm:text-lg">{icon}</span>
                <span className="text-black text-xs sm:text-xs font-black uppercase tracking-wide whitespace-nowrap">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero

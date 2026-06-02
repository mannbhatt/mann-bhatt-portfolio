'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  const socialLinks = [
    { icon: Github, href: 'https://github.com/mannbhatt', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mann-bhatt-04930a241', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/Mann_Bhatt88', label: 'Twitter' },
    { icon: Mail, href: 'mailto:manb35624@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative w-full bg-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-black text-black mb-4 uppercase tracking-tight border-b-4 border-black pb-2 w-fit">
              &lt;MANN /&gt;
            </h3>
            <p className="text-black text-sm leading-relaxed font-medium">
              Building beautiful, functional digital experiences with modern web technologies.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-black font-black text-xs uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 bordered-card bg-black border-2 border-black flex items-center justify-center text-white hover:bg-cyan-400 hover:text-black transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t-4 border-black my-8" />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <motion.p variants={itemVariants} className="text-black text-sm font-semibold">
            © {currentYear} All Rights Reserved. Built with passion.
          </motion.p>

          <motion.button
            variants={itemVariants}
            onClick={scrollToTop}
            whileHover={{ x: -4, y: -4 }}
            className="bordered-card mt-4 md:mt-0 px-4 py-2 bg-black text-white border-3 border-black flex items-center gap-2 font-black text-xs uppercase"
          >
            Scroll to Top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

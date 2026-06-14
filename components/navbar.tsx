'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#timeline' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]'
          : 'bg-white/70 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-black text-black uppercase tracking-tight"
            >
              Mann<span className="text-cyan-400">.</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-black hover:text-pink-500 transition-colors relative group text-xs font-black uppercase tracking-wider px-3 py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-black text-white border-3 border-black font-black text-xs uppercase tracking-wide hover:bg-pink-500 transition-colors"
            >
              Get In Touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 bg-black border-2 border-black"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-4 space-y-1 border-t-4 border-black bg-white">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 4 }}
                className="block px-4 py-3 text-black hover:bg-cyan-400 font-black text-xs uppercase tracking-wider transition-colors border-b-2 border-black/10"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.02 }}
              className="block w-full px-4 py-3 bg-pink-500 text-white font-black text-center text-xs uppercase tracking-wider mt-2 border-3 border-black"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar

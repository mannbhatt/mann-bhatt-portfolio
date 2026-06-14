'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'
export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true, rootMargin: '100px 0px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'manb35624@gmail.com', href: 'mailto:manb35624@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9723031174', href: 'tel:+919723031174' },
    { icon: MapPin, label: 'Location', value: 'Gandhinagar, India', href: '#' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mannbhatt', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mann-bhatt-04930a241', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/Mann_Bhatt88', label: 'Twitter' },
  ]

  return (
    <section id="contact" ref={ref} className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="border-b-4 border-black pb-2 w-fit mb-4">
            <p className="text-black uppercase text-xs font-black tracking-widest">$ contact</p>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black text-black mb-4 uppercase tracking-tight">
            Let&apos;s <span className="text-cyan-400">Connect</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-1 space-y-4"
          >
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  variants={itemVariants}
                  whileHover={{ x: -4, y: -4 }}
                  className="bordered-card p-6 bg-white border-4 border-black text-black flex items-start gap-4 block"
                >
                  <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-widest mb-1">{method.label}</p>
                    <p className="text-sm font-semibold">{method.value}</p>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-black font-black text-xs uppercase tracking-widest mb-3">Follow</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: -2, y: -2 }}
                      className="bordered-card w-12 h-12 bg-black text-white border-3 border-black flex items-center justify-center"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 bordered-card p-8 bg-white border-4 border-black space-y-4"
          >
            <motion.div variants={itemVariants}>
              <label className="block text-black font-black text-xs uppercase tracking-widest mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 border-3 border-black bg-white text-black placeholder-gray-400 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-black font-black text-xs uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 border-3 border-black bg-white text-black placeholder-gray-400 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-black font-black text-xs uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                placeholder="Your message here..."
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 border-3 border-black bg-white text-black placeholder-gray-400 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ x: -4, y: -4 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bordered-card w-full px-8 py-4 bg-pink-500 text-white border-4 border-black font-black text-sm uppercase tracking-wide hover:shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Resume CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 pt-12 border-t-4 border-black text-center"
        >
          <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-black text-black mb-6 uppercase tracking-tight">
            Download My Resume
          </motion.h3>
          <motion.a
            variants={itemVariants}
            href="/Mann_Bhatt_Resume_PerfectSpaced.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: -4, y: -4 }}
            className="bordered-card px-12 py-4 bg-yellow-300 text-black border-4 border-black font-black text-sm uppercase hover:shadow-lg transition-all cursor-pointer inline-block"
          >
            📄 Download PDF
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

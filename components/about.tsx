'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles } from 'lucide-react'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const stats = [
    { number: '25+', label: 'Projects Built' },
    { number: '7+', label: 'Client Projects Delivered' },
    { number: '4+', label: 'Years of Learning' },
    { number: '1', label: 'Startup Co-Founded' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="border-b-4 border-black pb-2 w-fit mb-4"
          >
            <p className="text-black uppercase text-xs font-black tracking-widest">
              $ about_me
            </p>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-black mb-4 uppercase tracking-tight leading-tight"
          >
            {"Journey & "}<span className="text-pink-500">{"Passion"}</span>
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start mb-12 md:mb-16">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="bordered-card p-4 sm:p-6 bg-white border-3 sm:border-4 border-black text-black"
            >
              <h4 className="text-black font-black text-xs sm:text-sm uppercase tracking-widest mb-3 border-b-2 border-black pb-2">
                Journey
              </h4>
              <p className="text-sm sm:text-base font-medium leading-relaxed">
                Driven by curiosity and a passion for building meaningful technology, I explore the intersection of web development, artificial intelligence, and software engineering. I focus on creating modern digital products that combine performance, intelligent systems, and immersive user experiences — transforming complex ideas into clean, impactful solutions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bordered-card p-4 sm:p-6 bg-white border-3 sm:border-4 border-black text-black"
            >
              <h4 className="text-black font-black text-xs sm:text-sm uppercase tracking-widest mb-3 border-b-2 border-cyan-400 pb-2">
                Passion
              </h4>
              <p className="text-sm sm:text-base font-medium leading-relaxed">
                Passionate about crafting products that feel innovative, scalable, and future-ready. From designing interactive web experiences to experimenting with AI and machine learning, I enjoy building technology that not only works efficiently but also creates a lasting impression through creativity, engineering, and thoughtful design.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-5"
            >
              <p className="text-black font-black text-xs uppercase tracking-widest border-b-2 border-black pb-2 w-fit">
                Interests
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  '🌌 Astronomy',
                  '🤖 Artificial Intelligence',
                  '🚀 Full-Stack Development',
                  '📱 Mobile Development',
                  '⚛️ Frontend Engineering',
                  '💡 Product Building',

                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: -2, y: -2 }}
                    className="bordered-card px-3 py-2 bg-cyan-400 border-3 border-black text-black font-black text-xs uppercase"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Stats Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map(({ number, label }, index) => (
              <motion.div
                key={label}
                variants={itemVariants}
                whileHover={{ x: -4, y: -4 }}
                className="bordered-card p-4 sm:p-6 bg-white border-3 sm:border-4 border-black text-center"
              >
                <div className="text-2xl sm:text-4xl font-black text-cyan-400 mb-2">
                  {number}
                </div>
                <p className="text-black text-xs sm:text-sm font-bold">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20 pt-12 border-t-4 border-black"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-black text-black mb-8 uppercase tracking-tight border-b-4 border-black pb-3 w-fit"
          >
            Education
          </motion.h3>
          <div className="space-y-6">
            {[
              {
                school: 'Government Engineering College, Gandhinagar',
                degree: 'Bachelor of Engineering - Information Technology',
                period: '2024 – Present',
                details:
                  'Currently pursuing Information Technology while building full-stack web applications, mobile apps, and machine learning projects. Actively exploring software engineering, artificial intelligence, astronomy-related technologies, and real-world product development through client work and startup initiatives.',
              },
              {
                school: 'R.C. Technical Institute, Ahmedabad',
                degree: 'Diploma in Computer Engineering',
                period: '2021 – 2024 ',
                details:
                  'Graduated with a CGPA of 9.27 while building a strong foundation in computer engineering and starting my full-stack development journey through technical projects, certifications, industry training, hackathon participation, and an SSIP-selected innovation project.',
              },
            ]
              .map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: -4, y: -4 }}
                  className="bordered-card p-6 bg-white border-4 border-black text-black"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-black text-black uppercase">
                        {edu.degree}
                      </h4>
                      <p className="text-black text-sm mt-1 font-semibold">{edu.school}</p>
                    </div>
                    <span className="text-cyan-400 text-sm font-black whitespace-nowrap ml-4 uppercase">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-black text-sm font-semibold">{edu.details}</p>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

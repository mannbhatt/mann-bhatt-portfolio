'use client'

import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Smartphone, Brain, Wrench } from 'lucide-react'

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const coreFocusAreas = [
    { name: 'Full-Stack Development', color: 'bg-cyan-400' },
    { name: 'Machine Learning', color: 'bg-pink-500' },
    { name: 'Mobile Applications', color: 'bg-yellow-300' },
    { name: 'Client Projects', color: 'bg-purple-400' },
    { name: 'Astronomy & Space Tech', color: 'bg-orange-400' },
  ]

  const expertiseData = [
    {
      icon: Code2,
      title: 'Frontend Engineering',
      description: 'Building modern, responsive, and performant web applications with rich user experiences.',
      glowColor: '#00d9ff',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Designing scalable server architectures, robust APIs, and secure database systems.',
      glowColor: '#ff006e',
      skills: ['Node.js', 'MongoDB', 'Supabase', 'REST APIs', 'Authentication'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Crafting responsive, high-performance native and cross-platform mobile apps.',
      glowColor: '#3b82f6',
      skills: ['React Native', 'Expo', 'Android Apps', 'Google Authentication'],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Developing predictive models, data workflows, and intelligence-driven integrations.',
      glowColor: '#9333ea',
      skills: ['Python', 'Pandas', 'Scikit-Learn', 'Data Analysis', 'Model Training'],
    },
    {
      icon: Wrench,
      title: 'Tools & Workflow',
      description: 'Optimizing source control, developer tools, deployments, and visual layout systems.',
      glowColor: '#ffdd00',
      skills: ['Git', 'GitHub', 'Vercel', 'Figma', 'VS Code'],
    },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="border-b-4 border-black pb-2 w-fit mb-4"
          >
            <p className="text-black uppercase text-xs font-black tracking-widest">
              $ expertise
            </p>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tight"
          >
            Technical <span className="text-cyan-400">Expertise</span>
          </motion.h2>
        </motion.div>

        {/* Featured Expertise Banner */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-12 border-4 border-black p-6 sm:p-8 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        >
          <h3 className="text-base sm:text-lg font-black text-black uppercase tracking-wider mb-5 flex items-center gap-2">
            <span>🚀</span> Core Focus Areas
          </h3>
          <div className="flex flex-wrap gap-3">
            {coreFocusAreas.map((focus) => (
              <motion.div
                key={focus.name}
                whileHover={{
                  y: -3,
                  x: -3,
                  boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)'
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className={`px-4 py-2 border-3 border-black ${focus.color} text-black font-black uppercase text-xs sm:text-sm tracking-wide shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default`}
              >
                {focus.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {expertiseData.map((category) => {
            const Icon = category.icon

            return (
              <motion.div
                key={category.title}
                whileHover="hover"
                animate="rest"
                initial="rest"
                style={{
                  boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)'
                }}
                variants={{
                  hidden: itemVariants.hidden,
                  visible: itemVariants.visible,
                  hover: {
                    y: -6,
                    x: -6,
                    boxShadow: `10px 10px 0px 0px ${category.glowColor}`,
                  }
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bordered-card p-6 md:p-8 bg-white border-4 border-black text-black flex flex-col justify-between h-full"
              >
                {/* Header info */}
                <div>
                  {/* Icon */}
                  <motion.div
                    variants={{
                      hover: { rotate: -12, scale: 1.1 }
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                    className="mb-6 w-14 h-14 bg-black flex items-center justify-center border-3 border-black text-white"
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-black mb-3 uppercase tracking-tight">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black text-xs sm:text-sm font-semibold mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t-3 border-black">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.06,
                        backgroundColor: '#000000',
                        color: category.glowColor,
                        borderColor: '#000000'
                      }}
                      transition={{ type: 'spring', stiffness: 450, damping: 15 }}
                      className="text-[10px] sm:text-xs font-black bg-white text-black px-2.5 py-1.5 border-2 border-black uppercase cursor-default transition-colors duration-100"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Section Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 text-center max-w-3xl mx-auto bordered-card p-6 sm:p-8 bg-yellow-300 border-4 border-black text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all"
        >
          <p className="text-xs sm:text-sm md:text-base font-black uppercase tracking-wider leading-relaxed">
            ⚡ Continuously learning and building across web development, machine learning, mobile applications, and astronomy-inspired technologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

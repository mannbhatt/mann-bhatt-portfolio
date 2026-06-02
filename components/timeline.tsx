'use client'

import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Award, Code } from 'lucide-react'

const Timeline = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
  const timelineEvents = [
    {
      icon: Award,
      title: 'Started Diploma in Computer Engineering',
      period: '2021',
      description:
        'Began learning programming, mathematics, databases and core engineering subjects. Built early projects in C++ and developed a strong technical foundation.',
      category: 'Education',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Code,
      title: 'Building Strong Technical Foundations',
      period: '2022',
      description:
        'Developed Java Socket Chat Application, School Database Management System, and PHP Chat Website. Completed AWS certification and a 15-day industry internship.',
      category: 'Development',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Briefcase,
      title: 'Exploring Advanced Technologies',
      period: '2023–2024',
      description:
        'Built PortfolioBrief, which was successfully selected under SSIP, participated in the Buildspace program, and competed in two hackathons while expanding into machine learning and modern web development.',
      category: 'Achievement',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Client Projects & Engineering Growth',
      period: '2024–2025',
      description:
        'Joined Government Engineering College, Gandhinagar and started delivering client projects, building real-world websites and digital solutions while expanding full-stack development skills.',
      category: 'Work',
      color: 'from-orange-400 to-red-500',
    },
    {
      icon: Award,
      title: 'Startup Building & Product Development',
      period: '2025',
      description:
        'Co-founded Clueless Builders and contributed to products including OneQuestion and StoryTrail. Implemented Google Authentication across multiple web and mobile applications.',
      category: 'Achievement',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Briefcase,
      title: 'AI, Machine Learning & Astronomy',
      period: '2026',
      description:
        'Developed Exoplanet Detection using NASA Kepler data, gaining hands-on experience in machine learning, data analysis, feature engineering, and astronomy-inspired research.',
      category: 'Learning',
      color: 'from-indigo-400 to-purple-500',
    },
    {
      icon: Code,
      title: 'Continuous Learning & Innovation',
      period: '2024–Present',
      description:
        'Actively building full-stack applications, mobile products, and machine learning projects while exploring artificial intelligence, astronomy, and modern software engineering.',
      category: 'Current',
      color: 'from-cyan-400 via-blue-500 to-purple-500',
    },
  ]
  return (
    <section
      id="timeline"
      ref={ref}
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
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
              $ timeline
            </p>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-black mb-4 uppercase tracking-tight"
          >
            Experience & <span className="text-yellow-300">Journey</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative space-y-6"
        >
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-black md:transform md:-translate-x-1/2" />

          {/* Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon

              return (
                <motion.div
                  key={event.title}
                  variants={itemVariants}
                  className="relative flex gap-8 items-start md:items-center"
                >
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="absolute left-0 md:left-1/2 z-20 w-14 h-14 rounded-full flex items-center justify-center bg-black transform md:-translate-x-1/2 border-4 border-black flex-shrink-0"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0
                    ? 'md:pr-16 md:mr-auto'
                    : 'md:pl-16 md:ml-auto'
                    }`}>
                    <motion.div
                      whileHover={{ x: -4, y: -4 }}
                      className="bordered-card p-6 bg-white border-4 border-black text-black"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-black bg-black text-white px-2 py-1 uppercase">
                          {event.category}
                        </span>
                        <span className="text-cyan-400 text-sm font-black">{event.period}</span>
                      </div>
                      <h3 className="text-lg font-black text-black mb-2 uppercase">{event.title}</h3>
                      <p className="text-black text-sm font-semibold">{event.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bordered-card p-8 bg-white border-4 border-black text-black"
        >
          <p className="font-semibold">
            🚀 Currently exploring <span className="text-pink-500 font-black">AI integration,</span> <span className="text-cyan-400 font-black">cloud technologies,</span> and <span className="text-yellow-300 font-black">advanced backend systems</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.02,
    triggerOnce: true,
    rootMargin: '100px 0px',
  })

  const projects = [
    {
      id: 1,
      title: 'Exoplanet Detection',
      description:
        'Machine learning project using NASA Kepler telescope data to identify potential exoplanets through data preprocessing, feature engineering, model training, and scientific analysis.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-Learn', 'NASA'],
      github: 'https://github.com/mannbhatt/Exoplanet-detection',
      demo: 'https://exo-detector.streamlit.app/',
      image: '/projects/exoplanet-detection.png',
      featured: true,
      clientProject: false,
      color: 'bg-cyan-400',
    },
    {
      id: 2,
      title: 'PortfolioBrief',
      description:
        'Personalized stock news aggregation platform delivering curated financial updates and insights. Selected under SSIP and expanded into a mobile application.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: '',
      demo: 'https://portfolio-brief-web.vercel.app/',
      image: '/projects/portfoliobrief.png',
      featured: true,
      clientProject: false,
      color: 'bg-pink-500',
    },
    {
      id: 3,
      title: 'OneQuestion',
      description:
        'Cross-platform journaling mobile app built with Expo and Supabase featuring authentication, secure storage, and daily reflection experiences.',
      tags: ['Expo', 'React Native', 'Supabase', 'TypeScript'],
      github: '',
      demo: 'https://drive.google.com/file/d/1OrKw2yjyLXwm4wkmR_hw2yNzYM0xVjKV/view',
      image: '/projects/onequestion.png',
      featured: true,
      clientProject: false,
      color: 'bg-yellow-300',
    },
    {
      id: 4,
      title: 'StoryTrail',
      description:
        'Interactive storytelling platform where users create and explore branching narratives, hidden paths, and immersive story experiences.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: '',
      demo: 'https://storytrail.clueless.builders',
      image: '/projects/storytrail.png',
      featured: true,
      clientProject: false,
      color: 'bg-cyan-400',
    },
    {
      id: 5,
      title: 'Shivam Fabricon',
      description:
        'Client project developed for a fabrication company showcasing services, company information, and a professional online presence.',
      tags: ['Astro', 'TypeScript', 'Tailwind CSS'],
      github: '',
      demo: 'https://www.shivamfabricon.com',
      image: '/projects/shivamfabricon.png',
      featured: true,
      clientProject: true,
      color: 'bg-pink-500',
    },
    {
      id: 6,
      title: 'WeatherIO',
      description:
        'Modern weather forecasting application providing real-time weather information and responsive user experiences.',
      tags: ['Next.js', 'TypeScript', 'Weather API'],
      github: 'https://github.com/mannbhatt/weatherio-nextjs',
      demo: '',
      image: '/projects/weatherio.png',
      featured: true,
      clientProject: false,
      color: 'bg-yellow-300',
    },
    {
      id: 7,
      title: 'Bhakti Sangraha',
      description:
        'A platform for reading bhajans and chalisa lyrics with a clean and user-friendly interface.',
      tags: ['Next.js', 'TypeScript'],
      github: '',
      demo: 'https://bhakti-sangraha.vercel.app',
      image: '/projects/bhakti-sangraha.png',
      featured: false,
      clientProject: false,
      color: 'bg-cyan-400',
    },
    {
      id: 8,
      title: '404Stuff',
      description:
        'Collection of modern and responsive 404 error page templates built with Next.js and Tailwind CSS.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: '',
      demo: 'https://404stuff.vercel.app',
      image: '/projects/404stuff.png',
      featured: false,
      clientProject: false,
      color: 'bg-pink-500',
    },
    {
      id: 9,
      title: 'Java Socket Chat Application',
      description:
        'Real-time chat application built using Java socket programming with client-server architecture and GUI support.',
      tags: ['Java', 'Socket Programming', 'Networking'],
      github: 'https://github.com/mannbhatt/java-socket-chat-application',
      demo: '',
      image: '/projects/java-chat.png',
      featured: false,
      clientProject: false,
      color: 'bg-yellow-300',
    },
    {
      id: 10,
      title: 'PHP Chat Website',
      description:
        'Full-stack PHP application with authentication, profile image upload, session management, and chat functionality.',
      tags: ['PHP', 'MySQL', 'JavaScript'],
      github: 'https://github.com/mannbhatt/php-chat-website',
      demo: '',
      image: '/projects/php-chat.png',
      featured: false,
      clientProject: false,
      color: 'bg-cyan-400',
    },
    {
      id: 11,
      title: 'Expo Supabase Auth Template',
      description:
        'Starter template for Expo applications with Supabase and Google Authentication integration.',
      tags: ['Expo', 'Supabase', 'Google Auth'],
      github: 'https://github.com/mannbhatt/expo-supabase-google-auth-template',
      demo: '',
      image: '/projects/expo-auth-template.png',
      featured: false,
      clientProject: false,
      color: 'bg-pink-500',
    },
    {
      id: 12,
      title: 'Chat UI Template',
      description:
        'Reusable modern chat interface template with responsive design and customizable components.',
      tags: ['React', 'Tailwind CSS', 'UI Design'],
      github: 'https://github.com/mannbhatt/chat-ui-template',
      demo: '',
      image: '/projects/chat-ui-template.png',
      featured: false,
      clientProject: false,
      color: 'bg-yellow-300',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }


  return (
    <section id="projects" ref={ref} className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="border-b-4 border-black pb-2 w-fit mb-4">
            <p className="text-black uppercase text-xs font-black tracking-widest">$ projects</p>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black text-black mb-4 uppercase tracking-tight">
            Featured <span className="text-pink-500">Works</span>
          </motion.h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ x: -4, y: -4 }}
              className="border-4 border-black bg-white overflow-hidden flex flex-col shadow-lg"
            >
              {/* Color bar */}
              <div className={`h-3 ${project.color}`} />

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-black text-black mb-3 uppercase">{project.title}</h3>
                <p className="text-black text-sm font-semibold mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tech) => (
                    <span key={tech} className="text-xs font-black bg-black text-white px-2 py-1 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t-2 border-black">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: -1, y: -1 }}
                      className={`${!project.demo ? 'flex-1' : 'flex-1'} px-4 py-2 bg-black text-white font-black text-xs uppercase flex items-center justify-center gap-2 border-2 border-black hover:shadow-md transition-all`}
                    >
                      <Github className="w-4 h-4" />
                      CODE
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: -1, y: -1 }}
                      className={`${!project.github ? 'flex-1' : 'flex-1'} px-4 py-2 bg-cyan-400 text-black font-black text-xs uppercase flex items-center justify-center gap-2 border-2 border-black hover:shadow-md transition-all`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      LIVE
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="#"
            whileHover={{ x: -4, y: -4 }}
            className="px-12 py-4 bg-white border-4 border-black text-black font-black text-sm uppercase shadow-lg"
          >
            View All Projects
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Projects

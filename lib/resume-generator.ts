import jsPDF from 'jspdf'

export const generateResumePDF = () => {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const margin = 15
  const contentWidth = pageWidth - 2 * margin
  let yPosition = margin

  // Helper function to add text with wrapping
  const addText = (text: string, x: number, y: number, options: any = {}) => {
    pdf.setFont(options.font || 'Helvetica', options.style || 'normal')
    pdf.setFontSize(options.size || 12)
    pdf.setTextColor(options.color?.[0] || 0, options.color?.[1] || 0, options.color?.[2] || 0)
    
    if (options.maxWidth) {
      const splitText = pdf.splitTextToSize(text, options.maxWidth)
      pdf.text(splitText, x, y)
      return splitText.length * 5 // Approximate line height
    } else {
      pdf.text(text, x, y)
      return 0
    }
  }

  // Header - Name
  addText('MANN BHATT', margin, yPosition, {
    font: 'Helvetica',
    style: 'bold',
    size: 24,
    color: [0, 0, 0],
  })
  yPosition += 8

  addText('Creative Technologist', margin, yPosition, {
    font: 'Helvetica',
    style: 'bold',
    size: 14,
    color: [255, 105, 180], // Pink color
  })
  yPosition += 10

  addText('Blending modern web technologies, machine learning, and creative engineering into impactful digital products. Building beautiful, performant applications that combine cutting-edge tech with thoughtful design.', margin, yPosition, {
    font: 'Helvetica',
    style: 'normal',
    size: 9,
    maxWidth: contentWidth,
    color: [80, 80, 80],
  })
  yPosition += 15

  // Contact Info
  pdf.setDrawColor(0, 0, 0)
  pdf.setLineWidth(0.5)
  pdf.line(margin, yPosition, pageWidth - margin, yPosition)
  yPosition += 8

  addText('Email: manb35624@gmail.com | Phone: +91 9723031174 | GitHub: github.com/mannbhatt | LinkedIn: linkedin.com/in/mann-bhatt-04930a241', margin, yPosition, {
    size: 9,
    color: [50, 50, 50],
  })
  yPosition += 10

  // About Section
  addText('ABOUT ME', margin, yPosition, {
    font: 'Helvetica',
    style: 'bold',
    size: 13,
    color: [0, 0, 0],
  })
  yPosition += 8

  const aboutText = 'Driven by curiosity and a passion for building meaningful technology, I explore the intersection of web development, artificial intelligence, and software engineering. I focus on creating modern digital products that combine performance, intelligent systems, and immersive user experiences — transforming complex ideas into clean, impactful solutions.'
  
  const aboutLines = pdf.splitTextToSize(aboutText, contentWidth)
  pdf.setFontSize(10)
  pdf.setTextColor(50, 50, 50)
  pdf.text(aboutLines, margin, yPosition)
  yPosition += aboutLines.length * 4.5 + 5

  // Tech Stack Section
  addText('TECH STACK', margin, yPosition, {
    font: 'Helvetica',
    style: 'bold',
    size: 13,
    color: [0, 0, 0],
  })
  yPosition += 8

  const allTechs = [
    'React.js, Next.js, Tailwind CSS, Astro, Node.js, Supabase, Python, TensorFlow, Scikit-learn, GitHub, Figma, Vercel, TypeScript, REST APIs, PostgreSQL, Data Analysis, VS Code, Git'
  ]

  const techLines = pdf.splitTextToSize(allTechs[0], contentWidth)
  pdf.setFontSize(9)
  pdf.setTextColor(80, 80, 80)
  pdf.text(techLines, margin, yPosition)
  yPosition += techLines.length * 4.5 + 5

  // Skills Section
  addText('KEY SKILLS', margin, yPosition, {
    font: 'Helvetica',
    style: 'bold',
    size: 13,
    color: [0, 0, 0],
  })
  yPosition += 8

  const skills = [
    'Frontend: React • Next.js • TypeScript • Tailwind CSS • Framer Motion',
    'Backend: Node.js • Express • MongoDB • Supabase • REST APIs',
    'Mobile: React Native • Expo • Mobile UI Development',
    'Machine Learning: Python • Pandas • Scikit-Learn • Data Analysis',
    'Tools: Git • GitHub • Vercel • Figma • VS Code',
  ]

  pdf.setFontSize(9)
  pdf.setTextColor(80, 80, 80)
  
  skills.forEach((skill) => {
    if (yPosition > pageHeight - 20) {
      pdf.addPage()
      yPosition = margin
    }
    const skillLines = pdf.splitTextToSize(`• ${skill}`, contentWidth - 10)
    pdf.text(skillLines, margin + 5, yPosition)
    yPosition += skillLines.length * 4.5 + 2
  })

  yPosition += 5

  // Experience Section
  if (yPosition > pageHeight - 30) {
    pdf.addPage()
    yPosition = margin
  }

  addText('EXPERIENCE HIGHLIGHTS', margin, yPosition, {
    font: 'Helvetica',
    style: 'bold',
    size: 13,
    color: [0, 0, 0],
  })
  yPosition += 8

  const experiences = [
    {
      title: 'Co-Founder, Clueless Builders',
      company: '2025 - Present',
      description: 'Building innovative digital products including OneQuestion journaling app and StoryTrail interactive storytelling platform. Implementing modern authentication and full-stack solutions.',
    },
    {
      title: 'Client Project Developer',
      company: '2024 - Present',
      description: '7+ client projects delivered. Created responsive websites and digital solutions for various businesses. Expert in custom web development and tailored client solutions.',
    },
    {
      title: 'ML & Research Developer',
      company: '2026 - Present',
      description: 'Developed Exoplanet Detection system using NASA Kepler data. Advanced expertise in data analysis, feature engineering, model training, and scientific computing.',
    },
  ]

  pdf.setFontSize(10)
  pdf.setFont('Helvetica', 'bold')
  pdf.setTextColor(0, 0, 0)

  experiences.forEach((exp) => {
    if (yPosition > pageHeight - 25) {
      pdf.addPage()
      yPosition = margin
    }
    
    pdf.text(exp.title, margin, yPosition)
    pdf.setFont('Helvetica', 'normal')
    pdf.setFontSize(9)
    pdf.setTextColor(100, 100, 100)
    pdf.text(exp.company, margin, yPosition + 5)
    
    pdf.setTextColor(80, 80, 80)
    const descLines = pdf.splitTextToSize(exp.description, contentWidth - 10)
    pdf.text(descLines, margin + 5, yPosition + 10)
    
    yPosition += 15 + descLines.length * 3
    pdf.setFont('Helvetica', 'bold')
    pdf.setTextColor(0, 0, 0)
  })

  // Education Section
  if (yPosition > pageHeight - 30) {
    pdf.addPage()
    yPosition = margin
  }

  addText('EDUCATION', margin, yPosition, {
    font: 'Helvetica',
    style: 'bold',
    size: 13,
    color: [0, 0, 0],
  })
  yPosition += 8

  const educationItems = [
    {
      degree: 'Bachelor of Engineering - Information Technology',
      school: 'Government Engineering College, Gandhinagar',
      period: 'Sep 2021 – Jun 2024',
    },
    {
      degree: 'Diploma in Computer Engineering',
      school: 'R.C. Technical Institute, Ahmedabad',
      period: '640 Grade | 9.27 CGPA',
    },
  ]

  pdf.setFontSize(10)
  pdf.setFont('Helvetica', 'bold')
  pdf.setTextColor(0, 0, 0)

  educationItems.forEach((edu, index) => {
    if (yPosition > pageHeight - 15) {
      pdf.addPage()
      yPosition = margin
    }
    
    pdf.text(edu.degree, margin, yPosition)
    pdf.setFont('Helvetica', 'normal')
    pdf.setFontSize(9)
    pdf.setTextColor(100, 100, 100)
    pdf.text(`${edu.school} | ${edu.period}`, margin, yPosition + 5)
    yPosition += 12
    pdf.setFont('Helvetica', 'bold')
    pdf.setTextColor(0, 0, 0)
  })

  // Download the PDF
  pdf.save('resume-creative-technologist.pdf')
}

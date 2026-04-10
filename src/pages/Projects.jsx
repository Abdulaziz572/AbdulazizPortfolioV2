import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A personal portfolio built with React, Vite, and Framer Motion to showcase my work and skills.',
    tags: ['React', 'Vite', 'Framer Motion'],
    emoji: '🌐',
    github: '#',
    live: '#',
  },
  {
    title: 'Task Manager App',
    desc: 'A full-stack task management application with authentication and real-time updates.',
    tags: ['React', 'Node.js', 'MongoDB'],
    emoji: '✅',
    github: '#',
    live: '#',
  },
  {
    title: 'Weather Dashboard',
    desc: 'A weather application that fetches real-time data from APIs with a clean, responsive UI.',
    tags: ['JavaScript', 'API', 'CSS'],
    emoji: '🌤️',
    github: '#',
    live: '#',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My <span>Projects</span>
        </motion.h2>
      </div>
      <motion.div
        className="projects__grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="project-card"
            variants={cardVariants}
          >
            <div className="project-card__image">{project.emoji}</div>
            <div className="project-card__body">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.desc}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-card__links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects

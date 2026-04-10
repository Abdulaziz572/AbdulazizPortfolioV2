import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiGit } from 'react-icons/si'

const skills = [
  {
    icon: <FaReact />,
    title: 'React',
    desc: 'Building interactive UIs with modern React patterns.',
  },
  {
    icon: <SiJavascript />,
    title: 'JavaScript',
    desc: 'Strong fundamentals in ES6+ and TypeScript.',
  },
  {
    icon: <FaNodeJs />,
    title: 'Node.js',
    desc: 'Server-side development with Express and APIs.',
  },
  {
    icon: <SiTailwindcss />,
    title: 'CSS / Tailwind',
    desc: 'Responsive and modern styling solutions.',
  },
  {
    icon: <FaPython />,
    title: 'Python',
    desc: 'Scripting, automation, and data processing.',
  },
  {
    icon: <SiGit />,
    title: 'Git / GitHub',
    desc: 'Version control and collaborative workflows.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function About() {
  return (
    <section className="about">
      <div className="container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About <span>Me</span>
        </motion.h2>
        <div className="about__content">
          <motion.p
            className="about__text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I am a web developer who enjoys turning ideas into real, functional
            applications. I focus on writing clean, efficient code and creating
            user-friendly interfaces. I am always learning new technologies and
            improving my skills.
          </motion.p>
          <motion.div
            className="about__skills"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                className="skill-card"
                variants={cardVariants}
              >
                <div className="skill-card__icon">{skill.icon}</div>
                <h3 className="skill-card__title">{skill.title}</h3>
                <p className="skill-card__desc">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

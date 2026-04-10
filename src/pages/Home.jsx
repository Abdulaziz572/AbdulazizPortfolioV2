import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code } from 'lucide-react'

function Home() {
  return (
    <section className="hero">
      <div className="container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hero__greeting">Hello, I am</p>
          <h1 className="hero__name">
            <span>Abdulaziz</span>
          </h1>
          <p className="hero__title">
            A passionate developer building modern web experiences with clean
            code and creative design.
          </p>
          <div className="hero__buttons">
            <Link to="/projects" className="btn btn--primary">
              <Code size={18} />
              View Projects
            </Link>
            <Link to="/contact" className="btn btn--outline">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home

import { motion } from 'framer-motion'

const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function SectionWrapper({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={`py-20 px-4 ${className}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.section>
  )
}

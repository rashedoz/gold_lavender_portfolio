import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import SectionWrapper from './ui/SectionWrapper'
import SectionHeading from './ui/SectionHeading'
import BusinessCard from './BusinessCard'

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardAnim = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Businesses() {
  const { t } = useLanguage()
  const { sectionLabel, sectionTitle, units } = t.businesses

  return (
    <SectionWrapper id="businesses" className="bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SectionHeading label={sectionLabel} title={sectionTitle} />
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {units.map((unit) => (
            <motion.div key={unit.id} variants={cardAnim}>
              <BusinessCard unit={unit} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

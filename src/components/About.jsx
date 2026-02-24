import { motion } from 'framer-motion'
import { Globe, Shield, Zap, Heart } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SectionWrapper from './ui/SectionWrapper'
import SectionHeading from './ui/SectionHeading'

const iconMap = { Globe, Shield, Zap, Heart }

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const cardAnim = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const { t } = useLanguage()
  const { sectionLabel, sectionTitle, lead, body, values } = t.about

  return (
    <SectionWrapper id="about" className="bg-offwhite">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <div>
            <SectionHeading label={sectionLabel} title={sectionTitle} />
            <p className="text-charcoal-700 text-base leading-loose mb-5 font-medium">
              {lead}
            </p>
            {body.map((para, i) => (
              <p key={i} className="text-charcoal-600 text-sm leading-loose mb-4">
                {para}
              </p>
            ))}

            {/* Founded badge */}
            <div className="mt-8 inline-flex items-center gap-3 border border-gold-200 bg-gold-50 rounded px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center shrink-0">
                <span className="text-[10px] font-bold text-charcoal-900">EST</span>
              </div>
              <div>
                <div className="text-xs text-charcoal-400 leading-none mb-0.5">設立 / Founded</div>
                <div className="text-sm font-semibold text-charcoal-800">2009年5月29日</div>
              </div>
            </div>
          </div>

          {/* Right: values grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {values.map((v) => {
              const Icon = iconMap[v.icon]
              return (
                <motion.div
                  key={v.title}
                  variants={cardAnim}
                  className="bg-white rounded-lg p-5 border border-charcoal-100 hover:border-gold-300 hover:shadow-gold transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-gold-500" />
                  </div>
                  <h3 className="font-semibold text-charcoal-800 mb-2 text-sm">{v.title}</h3>
                  <p className="text-charcoal-500 text-xs leading-relaxed">{v.body}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

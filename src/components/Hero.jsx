import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import GoldLavenderLogo from './ui/GoldLavenderLogo'

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } },
})

export default function Hero() {
  const { t } = useLanguage()

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A1A1A 0%, #1A1500 45%, #1A0A2E 100%)',
      }}
    >
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-8"
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
        >
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <GoldLavenderLogo size={72} scrolled={false} />
          </div>
        </motion.div>

        {/* Company name */}
        <motion.p
          className="text-charcoal-300 text-sm tracking-[0.3em] uppercase mb-3"
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
        >
          株式会社 Gold Lavender
        </motion.p>

        {/* Main tagline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="visible"
        >
          {t.hero.tagline}
        </motion.h1>

        {/* Sub tagline */}
        <motion.p
          className="text-charcoal-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="visible"
        >
          {t.hero.taglineSub}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="visible"
        >
          <button
            onClick={() => document.getElementById('businesses')?.scrollIntoView({ behavior: 'smooth' })}
            className="
              px-8 py-3.5 bg-gold-500 text-charcoal-900 font-semibold text-sm tracking-wide
              rounded hover:bg-gold-400 transition-colors duration-200
            "
          >
            {t.hero.cta}
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="
              px-8 py-3.5 border border-gold-500/60 text-gold-400 font-medium text-sm tracking-wide
              rounded hover:border-gold-400 hover:bg-gold-500/10 transition-colors duration-200
            "
          >
            {t.hero.ctaSecondary}
          </button>
        </motion.div>

        {/* Business brand pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mt-14"
          variants={fadeUp(0.55)}
          initial="hidden"
          animate="visible"
        >
          {['Shinjuku Halal Food', 'GoldShirorom', 'Shinjuku WiFi & Mobile', 'CloudOn'].map(brand => (
            <span
              key={brand}
              className="text-[11px] text-charcoal-400 border border-charcoal-700 rounded-full px-3 py-1 tracking-wide"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-charcoal-400 hover:text-gold-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-offwhite/20 to-transparent pointer-events-none" />
    </section>
  )
}

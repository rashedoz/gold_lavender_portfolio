import { useLanguage } from '../../context/LanguageContext'

export default function LanguageToggle({ onDark = false }) {
  const { toggleLang, t } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className={`
        border px-3 py-1 text-xs font-semibold tracking-widest rounded
        transition-colors duration-200
        ${
          onDark
            ? 'border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-charcoal-900'
            : 'border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-charcoal-900'
        }
      `}
    >
      {t.nav.langToggle}
    </button>
  )
}

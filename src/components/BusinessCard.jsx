import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import halalLogo from '../assets/logos/shinjukuhalalfood.png'
import shiroromLogo from '../assets/logos/goldshirorom.png'
import cloudOnLogo from '../assets/logos/cloudon.png'

const logoImages = {
  halal:    halalLogo,
  shirorom: shiroromLogo,
  cloudon:  cloudOnLogo,
}

function LogoPlaceholder({ name, colors }) {
  const initials = name
    .split(' ')
    .map(w => w[0])
    .slice(0, 2)
    .join('')

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center rounded gap-1"
      style={{ background: colors.bg }}
    >
      <span
        className="text-2xl font-bold font-mono tracking-widest"
        style={{ color: colors.text }}
      >
        {initials}
      </span>
      <span
        className="text-[10px] tracking-widest uppercase font-medium px-2 text-center"
        style={{ color: colors.accent }}
      >
        {name.length > 12 ? name.split(' ').slice(0, 2).join(' ') : name}
      </span>
    </div>
  )
}

export default function BusinessCard({ unit }) {
  const { t } = useLanguage()

  const {
    name, nameJp, category, description,
    url, tag, logoType, logoFile, logoColors,
  } = unit

  return (
    <div className="
      group relative bg-white rounded-lg border border-charcoal-100
      hover:border-gold-400 hover:shadow-gold
      transition-all duration-300 flex flex-col overflow-hidden
    ">
      {/* Gold top accent */}
      <div className="h-[3px] bg-gradient-to-r from-gold-500 to-gold-300 shrink-0" />

      {/* Logo area */}
      <div className="h-28 bg-charcoal-50 flex items-center justify-center p-3 overflow-hidden">
        {logoType === 'image' ? (
          <img
            src={logoImages[logoFile]}
            alt={`${name} logo`}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <LogoPlaceholder name={name} colors={logoColors} />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tag pill */}
        <span className="inline-block self-start mb-3 text-[11px] px-2.5 py-0.5 rounded-full bg-lavender-100 text-lavender-700 font-medium tracking-wide">
          {tag}
        </span>

        {/* Names */}
        <div className="mb-1">
          <h3 className="text-base font-bold text-charcoal-900 leading-snug">{name}</h3>
          <p className="text-xs text-charcoal-400 mt-0.5">{nameJp} — {category}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-charcoal-600 leading-relaxed mt-3 flex-1 line-clamp-4">
          {description}
        </p>

        {/* CTA */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-5 flex items-center justify-center gap-1.5
            py-2.5 px-4 rounded
            bg-charcoal-900 text-white text-xs font-semibold tracking-wide
            hover:bg-gold-500 hover:text-charcoal-900
            transition-colors duration-200
          "
        >
          <ExternalLink size={13} />
          {t.businesses.visitSite}
        </a>
      </div>
    </div>
  )
}

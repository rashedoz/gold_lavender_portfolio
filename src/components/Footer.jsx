import { Facebook } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import GoldLavenderLogo from './ui/GoldLavenderLogo'

export default function Footer() {
  const { t } = useLanguage()
  const { tagline, copyright, privacyPolicy, links } = t.footer

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-charcoal-900 text-charcoal-400">
      {/* Gold accent top */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <GoldLavenderLogo size={36} />
            <div>
              <div className="text-white text-sm font-bold tracking-widest uppercase">Gold Lavender</div>
              <div className="text-[11px] text-lavender-400 italic mt-0.5">{tagline}</div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Business brands */}
        <div className="flex flex-wrap gap-3 mb-8 pb-8 border-b border-charcoal-700/50">
          {['Shinjuku Halal Food', 'GoldShirorom', 'Shinjuku WiFi & Mobile Shop', 'CloudOn'].map(brand => (
            <span
              key={brand}
              className="text-[11px] text-charcoal-500 border border-charcoal-700 rounded-full px-3 py-1"
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-charcoal-500">{copyright}</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/goldlavenderjp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-500 hover:text-gold-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <span className="text-xs text-charcoal-600 hover:text-charcoal-400 cursor-pointer transition-colors">
              {privacyPolicy}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

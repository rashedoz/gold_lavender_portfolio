import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from './ui/LanguageToggle'
import GoldLavenderLogo from './ui/GoldLavenderLogo'

const SECTIONS = ['about', 'businesses', 'profile', 'contact']

function smoothScrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLabels = {
    about:      t.nav.about,
    businesses: t.nav.business,
    profile:    t.nav.profile,
    contact:    t.nav.contact,
  }

  const handleNavClick = (e, id) => {
    e.preventDefault()
    smoothScrollTo(id)
    setMobileOpen(false)
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-charcoal-100'
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#top" onClick={handleLogoClick} className="flex items-center gap-2 shrink-0">
            <GoldLavenderLogo scrolled={scrolled} size={36} />
            <div className="hidden sm:block leading-tight">
              <div className={`text-xs font-bold tracking-widest uppercase transition-colors ${scrolled ? 'text-charcoal-900' : 'text-white'}`}>
                Gold Lavender
              </div>
              <div className={`text-[10px] tracking-widest transition-colors ${scrolled ? 'text-charcoal-400' : 'text-charcoal-300'}`}>
                株式会社
              </div>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {SECTIONS.map(id => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`
                  text-sm font-medium tracking-wide transition-colors duration-200
                  hover:text-gold-500
                  ${scrolled ? 'text-charcoal-700' : 'text-charcoal-200'}
                `}
              >
                {navLabels[id]}
              </a>
            ))}
            <LanguageToggle onDark={!scrolled} />
          </div>

          {/* Mobile: language toggle + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageToggle onDark={!scrolled} />
            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              className={`p-1 transition-colors ${scrolled ? 'text-charcoal-800' : 'text-white'}`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden transition-all duration-300
          ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}
        `}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-charcoal-900/60 transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`
            absolute top-0 right-0 h-full w-64 bg-white shadow-2xl
            transition-transform duration-300
            ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="pt-20 px-6 flex flex-col gap-1">
            {SECTIONS.map(id => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="block py-3 text-base font-medium text-charcoal-700 border-b border-charcoal-100 hover:text-gold-500 transition-colors"
              >
                {navLabels[id]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

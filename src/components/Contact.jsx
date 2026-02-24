import { MapPin, Phone, Clock, Mail, ExternalLink, Facebook } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SectionWrapper from './ui/SectionWrapper'
import SectionHeading from './ui/SectionHeading'

function ContactRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4 py-4 border-b border-charcoal-100 last:border-0">
      <div className="w-8 h-8 rounded-full bg-gold-50 flex items-center justify-center shrink-0 mt-0.5">
        <Icon size={15} className="text-gold-500" />
      </div>
      <div>
        <p className="text-xs text-charcoal-400 uppercase tracking-wider mb-1">{label}</p>
        <div className="text-sm text-charcoal-700 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <SectionWrapper id="contact" className="bg-offwhite">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SectionHeading label={c.sectionLabel} title={c.sectionTitle} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: contact details */}
          <div className="bg-white rounded-lg border border-charcoal-100 p-6 shadow-sm">
            <ContactRow icon={MapPin} label={c.addressLabel}>
              <span className="whitespace-pre-line">{c.address}</span>
              <p className="mt-1 text-xs text-charcoal-400 flex items-center gap-1">
                <span>🚃</span> {c.mapNote}
              </p>
            </ContactRow>

            <ContactRow icon={Phone} label={c.phoneLabel}>
              <a
                href={`tel:${c.phone.replace(/-/g, '')}`}
                className="text-charcoal-700 hover:text-gold-500 transition-colors font-medium"
              >
                {c.phone}
              </a>
            </ContactRow>

            <ContactRow icon={Mail} label={c.emailLabel}>
              <a
                href={`mailto:${c.email}`}
                className="text-charcoal-700 hover:text-gold-500 transition-colors font-medium break-all"
              >
                {c.email}
              </a>
            </ContactRow>

            <ContactRow icon={Clock} label={c.hoursLabel}>
              {c.hours}
            </ContactRow>

            {/* Social */}
            <div className="mt-5 pt-5 border-t border-charcoal-100">
              <p className="text-xs text-charcoal-400 uppercase tracking-wider mb-3">{c.socialLabel}</p>
              <a
                href={c.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  bg-[#1877F2] text-white text-sm font-medium
                  px-4 py-2.5 rounded hover:bg-[#1464d8]
                  transition-colors duration-200
                "
              >
                <Facebook size={16} />
                {c.facebookLabel}
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Right: map card */}
          <div className="flex flex-col gap-4">
            {/* Styled address card with map button */}
            <div className="bg-charcoal-900 rounded-lg overflow-hidden">
              {/* Map placeholder / visual */}
              <div className="relative h-52 bg-charcoal-800 flex items-center justify-center overflow-hidden">
                {/* Decorative grid */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#D4B800" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                {/* Pin */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 border-2 border-gold-500 flex items-center justify-center">
                    <MapPin size={22} className="text-gold-400" />
                  </div>
                  <p className="text-white text-xs font-medium tracking-wide">新宿区百人町2-9-2</p>
                  <p className="text-charcoal-400 text-[11px]">岡山ビジネスビル 302</p>
                </div>
              </div>

              <div className="p-4">
                <p className="text-charcoal-300 text-xs leading-relaxed mb-3 whitespace-pre-line">
                  {c.address}
                </p>
                <a
                  href={c.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full flex items-center justify-center gap-2
                    border border-gold-500/50 text-gold-400 text-sm font-medium
                    py-2.5 rounded
                    hover:bg-gold-500/10 hover:border-gold-400
                    transition-colors duration-200
                  "
                >
                  <ExternalLink size={14} />
                  {c.mapLabel}
                </a>
              </div>
            </div>

            {/* Company quick info */}
            <div className="bg-white rounded-lg border border-charcoal-100 p-4">
              <p className="text-xs text-charcoal-400 mb-2 uppercase tracking-wider">株式会社Gold Lavender</p>
              <p className="text-sm text-charcoal-600 mb-1">
                古物商許可証 <span className="font-mono text-charcoal-800">第304360908828号</span>
              </p>
              <p className="text-sm text-charcoal-600">
                <a href="mailto:contact@goldlavender.co.jp" className="text-gold-600 hover:text-gold-500 transition-colors">
                  contact@goldlavender.co.jp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

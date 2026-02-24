import { ExternalLink, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SectionWrapper from './ui/SectionWrapper'
import SectionHeading from './ui/SectionHeading'

export default function CompanyProfile() {
  const { t } = useLanguage()
  const { sectionLabel, sectionTitle, table } = t.profile

  return (
    <SectionWrapper id="profile" className="bg-charcoal-900">
      <div className="max-w-4xl mx-auto">
        {/* Left gold border accent */}
        <div className="border-l-4 border-gold-500 pl-6 mb-10">
          <SectionHeading label={sectionLabel} title={sectionTitle} light />
        </div>

        <dl className="divide-y divide-charcoal-700/60">
          {table.map((row, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row py-4 gap-1 sm:gap-4"
            >
              <dt className="sm:w-52 shrink-0 text-charcoal-400 text-xs uppercase tracking-wider font-medium pt-0.5">
                {row.label}
              </dt>
              <dd
                className={`text-charcoal-100 text-sm leading-relaxed whitespace-pre-line ${
                  row.mono ? 'font-mono text-gold-300' : ''
                }`}
              >
                {row.url ? (
                  <a
                    href={row.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors underline underline-offset-2"
                  >
                    {row.value}
                    <ExternalLink size={12} />
                  </a>
                ) : row.tel ? (
                  <a
                    href={`tel:${row.value.replace(/-/g, '')}`}
                    className="text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    {row.value}
                  </a>
                ) : row.email ? (
                  <a
                    href={`mailto:${row.value}`}
                    className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    <Mail size={13} />
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        {/* Gold accent rule */}
        <div className="mt-10 h-px bg-gradient-to-r from-gold-500/60 via-gold-500/20 to-transparent" />
      </div>
    </SectionWrapper>
  )
}

import { createContext, useContext, useState, useCallback } from 'react'
import ja from '../i18n/ja'
import en from '../i18n/en'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ja')

  const toggleLang = useCallback(() => {
    setLang(prev => (prev === 'ja' ? 'en' : 'ja'))
  }, [])

  const t = lang === 'ja' ? ja : en

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

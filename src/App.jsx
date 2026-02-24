import { Helmet } from 'react-helmet-async'
import { useLanguage } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Businesses from './components/Businesses'
import CompanyProfile from './components/CompanyProfile'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { t, lang } = useLanguage()

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
      </Helmet>

      <div id="top" className="font-sans text-charcoal-900 bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Businesses />
          <CompanyProfile />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

# CLAUDE.md — Gold Lavender Portfolio

> **Auto-read by Claude Code.** This file provides full project context for autonomous development sessions. Read it entirely before making any changes.

---

## 1. Project Identity

| Field | Value |
|---|---|
| Project | 株式会社Gold Lavender — Corporate Portfolio Website |
| Purpose | Mother-company portfolio presenting Gold Lavender Co., Ltd. and its 4 business brands |
| Type | Static SPA — no backend, no database |
| Pattern | Traditional Japanese corporate website (JP default, EN toggle) |
| Dev server | `npm run dev` → http://localhost:5173 |
| Build | `npm run build` → `dist/` |
| Preview build | `npm run preview` |
| Claude preview | Use `.claude/launch.json` — server name: **"Gold Lavender Portfolio (Vite)"** |

---

## 2. Corporate Reference Data *(Source of Truth — never guess these)*

```
会社名 (JP):    株式会社Gold Lavender
会社名 (EN):    Gold Lavender Co., Ltd.
法人番号:       8011101052979
古物商許可番号: 第304360908828号
設立:           2009年5月29日
代表取締役:     マズムルダル・エムディ・サフィウル・アロム
                (MD. S.A Mazumder / Md. Safiul Alom Mazumurdar)
所在地:         〒169-0073 東京都新宿区百人町2-9-2 岡山ビジネスビル302
TEL:            03-5937-4021
FAX:            03-5332-5020
Mobile:         090-6515-0171
Email:          contact@goldlavender.co.jp
Web:            goldlavender.co.jp
Facebook:       https://www.facebook.com/goldlavenderjp
Map (Google):   https://maps.app.goo.gl/XBK87a7ckWXLjdv57
Access:         JR新大久保駅 徒歩約5分 / JR大久保駅 徒歩約3分
```

---

## 3. Business Units (4 Brands)

| # | Brand | URL | Tag (JP) | Tag (EN) | Logo File | Logo Status |
|---|---|---|---|---|---|---|
| 1 | Shinjuku Halal Food | shinjukuhalalfood.com | 食品・小売 | Food & Retail | `halal.svg` | SVG placeholder — replace when ready |
| 2 | GoldShirorom | goldshirorom.com | 中古端末・買取 | Used Devices | `placeholder` | **No logo yet** — dark bg, gold initials |
| 3 | Shinjuku WiFi & Mobile Shop | facebook.com/goldlavenderjp | WiFi・モバイル | WiFi & Mobile | `wifi.svg` | SVG placeholder — replace when ready |
| 4 | CloudOn | cloudon.app | eSIM・通信 | eSIM & Data | `cloudon.svg` | SVG recreation of real logo |

> **To add/edit a business unit:** Only edit `src/i18n/ja.js` and `src/i18n/en.js`. The `units[]` array in the `businesses` key drives all business card rendering — no component changes needed.

---

## 4. Tech Stack

| Tool | Version | Role |
|---|---|---|
| React | 18.3.1 | UI framework |
| Vite | 5.3.0 | Dev server & bundler (ESM, no CRA) |
| Tailwind CSS | 3.4.0 | All styling (custom token system) |
| @tailwindcss/typography | 0.5.13 | Prose styling plugin |
| framer-motion | 11.3.0 | Scroll animations (`whileInView`) |
| lucide-react | 0.400.0 | SVG icon library |
| react-helmet-async | 2.0.5 | `<head>` / `<html lang>` management |
| Google Fonts | — | Inter (EN) + Noto Sans JP (JP) |

---

## 5. Design System

### Brand Colors (Tailwind Tokens)

| Token | Hex | Usage |
|---|---|---|
| `gold-500` | `#D4B800` | Primary accent, CTA buttons, underlines, section headings |
| `gold-400` | `#E8C800` | Hover state for gold buttons |
| `gold-300` | `#FFD740` | Light gold accents |
| `lavender-500` | `#B57ED4` | Secondary accent, tag pill backgrounds |
| `lavender-100` | `#F0E6F9` | Tag pill background (light) |
| `lavender-700` | `#7A45A0` | Tag pill text |
| `charcoal-900` | `#1A1A1A` | Hero/dark section bg, body text |
| `charcoal-400` | `#8C8C8C` | Muted text, labels |
| `offwhite` | `#F8F7F4` | Alternate section backgrounds |

### Section Background Pattern (dark/light alternation)

```
Hero          → dark (charcoal-900 gradient + gold/lavender tint)
About         → offwhite  (#about)
Businesses    → white     (#businesses)
CompanyProfile→ charcoal-900 dark  (#profile)
Contact       → offwhite  (#contact)
Footer        → charcoal-900 dark
```

### Typography

| Use | Font | Tailwind |
|---|---|---|
| Body (JP) | Noto Sans JP | `font-jp` or default `font-sans` |
| Body (EN) | Inter | `font-sans` |
| Hero tagline | Both (follows lang) | `text-4xl md:text-6xl font-bold` |
| Section label | Inter | `text-xs tracking-[0.25em] uppercase text-gold-500` |
| Section title | Noto Sans JP | `text-3xl md:text-4xl font-bold` |
| Card heading | Both | `text-base font-bold` |
| Table labels | Inter | `text-xs uppercase tracking-wider text-charcoal-400` |

### Custom Shadows
- `shadow-gold` — `0 4px 24px -4px rgba(212,184,0,0.18)` — used on card hover
- `shadow-gold-lg` — `0 8px 40px -8px rgba(212,184,0,0.25)`

### Animation Pattern (framer-motion)
```js
// Standard fade-up (used everywhere)
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

// SectionWrapper applies this automatically via whileInView
// viewport={{ once: true, margin: '-80px' }}
```

---

## 6. Annotated File Structure

```
Gold_Lavender_Portfolio/
│
├── CLAUDE.md                          ← THIS FILE — project context for Claude Code
├── index.html                         ← Vite entry, Google Fonts preload, lang="ja"
├── package.json                       ← Dependencies and scripts
├── vite.config.js                     ← Vite config (React plugin only)
├── tailwind.config.js                 ← Brand color tokens, font families, custom shadows
├── postcss.config.js                  ← Tailwind + Autoprefixer
│
├── .claude/
│   ├── launch.json                    ← Claude Preview dev server config (port 5173)
│   └── settings.local.json            ← Local tool permissions
│
├── public/                            ← Static assets (currently empty)
│
└── src/
    ├── main.jsx                       ← ReactDOM root, wraps App in HelmetProvider + LanguageProvider
    ├── App.jsx                        ← Root component: assembles all sections, Helmet meta tags
    ├── index.css                      ← Tailwind directives, html scroll-behavior: smooth
    │
    ├── context/
    │   └── LanguageContext.jsx        ← Language state (ja/en), toggleLang(), useLanguage() hook
    │
    ├── i18n/
    │   ├── ja.js                      ← ALL Japanese strings (default language) — single source of truth
    │   └── en.js                      ← ALL English strings — must stay structurally identical to ja.js
    │
    ├── components/
    │   ├── Navbar.jsx                 ← Sticky nav: transparent→white on scroll, mobile drawer, JP/EN toggle
    │   ├── Hero.jsx                   ← Full-viewport hero: dark gradient, GL logo, tagline, CTAs, brand pills
    │   ├── About.jsx                  ← Mission text (left) + 2×2 values cards grid (right)
    │   ├── Businesses.jsx             ← Staggered 4-column grid wrapping 4 BusinessCard components
    │   ├── BusinessCard.jsx           ← Individual brand card: logo, tag pill, name, desc, CTA button
    │   ├── CompanyProfile.jsx         ← Dark section: formal dl/dt/dd corporate info table
    │   ├── Contact.jsx                ← Address, phone, email, hours, Facebook CTA, map card
    │   ├── Footer.jsx                 ← Logo, nav links, brand pills, copyright, social
    │   │
    │   └── ui/
    │       ├── GoldLavenderLogo.jsx   ← Inline SVG: rounded-square GL badge (gold L / lavender R)
    │       ├── LanguageToggle.jsx     ← JP↔EN button, reads from LanguageContext
    │       ├── SectionHeading.jsx     ← Label + title + gold underline bar (props: label, title, light?)
    │       └── SectionWrapper.jsx     ← framer-motion whileInView fade+slide wrapper for every section
    │
    └── assets/
        └── logos/
            ├── halal.svg              ← Shinjuku Halal Food (SVG recreation — yellow bg, halal badge)
            ├── wifi.svg               ← Shinjuku WiFi & Mobile Shop (SVG — white bg, green phone/wifi)
            └── cloudon.svg            ← CloudOn (SVG recreation — white bg, purple cloud, WiFi arcs)
```

---

## 7. Architecture Patterns

### SPA + Smooth Scroll (No React Router)
All navigation is anchor-based. Never use `<Link>` from react-router.
```js
// Standard pattern used across all nav/CTA elements
document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
```
Section IDs: `top`, `about`, `businesses`, `profile`, `contact`

### Language System
```js
// In any component — no prop drilling ever
import { useLanguage } from '../context/LanguageContext'

export default function MyComponent() {
  const { t, lang, toggleLang } = useLanguage()
  return <p>{t.someSection.someKey}</p>
}
```
`t` is the full i18n object for the current language. `lang` is `'ja'` or `'en'`.

### Adding a New i18n String
1. Add to `src/i18n/ja.js` at the correct key path
2. Add the **identical key path** to `src/i18n/en.js` with the English translation
3. Both files **must stay structurally identical** — same keys, same nesting

### SectionWrapper Usage
Every section should be wrapped:
```jsx
<SectionWrapper id="my-section" className="bg-white">
  <div className="max-w-6xl mx-auto">
    {/* content */}
  </div>
</SectionWrapper>
```
The wrapper applies `py-20 px-4` and the framer-motion fade+slide animation.

### SectionHeading Usage
```jsx
<SectionHeading
  label="SECTION LABEL"    // small uppercase tracking text above
  title="Section Title"    // large h2
  light={true}             // true = white text (for dark sections)
/>
```

### BusinessCard Logo Routing
In `src/components/BusinessCard.jsx`:
- `logoType: 'image'` + `logoFile: 'halal'` → renders `<img src={logoImages['halal']} />`
- `logoType: 'placeholder'` + `logoColors: { bg, text, accent }` → renders styled text initials div
- `logoImages` map is defined at the top of BusinessCard.jsx — add new entries there

### CompanyProfile Table
`profile.table[]` in i18n supports these field types:
```js
{ label: 'Name',  value: 'text' }           // plain text
{ label: 'Phone', value: '03-xxx', tel: true }  // tel: link
{ label: 'Email', value: 'x@y.com', email: true } // mailto: link with Mail icon
{ label: 'Number',value: '123', mono: true }    // monospace gold font
{ label: 'SNS',   value: 'text', url: 'https://...' } // external link
```

---

## 8. Key Commands

```bash
# Development
npm run dev       # Vite dev server → http://localhost:5173 (HMR enabled)
npm run build     # Production build → dist/
npm run preview   # Serve dist/ locally for production testing

# Claude Preview (use MCP tool, not Bash)
# Server name: "Gold Lavender Portfolio (Vite)"
# Config: .claude/launch.json
```

---

## 9. Pending Work & Known Placeholders

### Logo Assets (Priority)
| Asset | Status | Action Required |
|---|---|---|
| Shinjuku Halal Food | SVG placeholder | Drop real file → `src/assets/logos/halal.[svg/png/jpg]`, update import in BusinessCard.jsx |
| Shinjuku WiFi & Mobile | SVG placeholder | Drop real file → `src/assets/logos/wifi.[svg/png/jpg]`, update import in BusinessCard.jsx |
| CloudOn | SVG recreation | Drop official file → `src/assets/logos/cloudon.[svg/png/jpg]`, update import |
| GoldShirorom | No logo | When provided: add to `src/assets/logos/`, update BusinessCard.jsx, change `logoType` to `'image'` in both i18n files |
| GL main logo (inline SVG) | SVG approximation in GoldLavenderLogo.jsx | Replace component with `<img src="...">` when official file is provided |

### Features Not Yet Built
- [ ] Contact form with submission (currently display-only)
- [ ] SEO: og:image / twitter:card meta tags
- [ ] Privacy Policy page
- [ ] Google Analytics / tracking
- [ ] GoldShirorom real logo integration
- [ ] Domain deployment configuration

---

## 10. Logo Asset Replacement Guide

When a real logo file is ready:

**For subsidiary logos (halal / wifi / cloudon / shirorom):**
```bash
# 1. Copy file to assets
cp /path/to/logo.png src/assets/logos/shirorom.png

# 2. Add import in src/components/BusinessCard.jsx (top of file)
import shiroromLogo from '../assets/logos/shirorom.png'

# 3. Add to logoImages map in BusinessCard.jsx
const logoImages = {
  halal:   halalLogo,
  wifi:    wifiLogo,
  cloudon: cloudOnLogo,
  shirorom: shiroromLogo,   // ← add this
}

# 4. Update BOTH i18n files — change the shirorom unit entry:
# Change: logoType: 'placeholder', logoColors: {...}
# To:     logoType: 'image', logoFile: 'shirorom'
```

**For the main Gold Lavender logo:**
```jsx
// In src/components/ui/GoldLavenderLogo.jsx
// Replace the entire SVG with:
export default function GoldLavenderLogo({ size = 40 }) {
  return <img src={glLogoSrc} alt="Gold Lavender" width={size} height={size} />
}
// And add: import glLogoSrc from '../../assets/logos/gold-lavender.png'
```

---

## 11. Component Quick Reference

| Component | File | Key Props / Behavior |
|---|---|---|
| `Navbar` | components/Navbar.jsx | No props. Reads `useLanguage()`. Sticky, transparent→white on scroll (>60px). Mobile: hamburger + slide drawer. |
| `Hero` | components/Hero.jsx | No props. Full viewport, dark gradient bg. Framer stagger animations. CTA scrolls to `#businesses` / `#contact`. |
| `About` | components/About.jsx | No props. 2-col layout: text left, 2×2 values grid right. Icon names from `t.about.values[].icon` mapped to lucide icons. |
| `Businesses` | components/Businesses.jsx | No props. Maps `t.businesses.units[]` to `<BusinessCard>`. Staggered whileInView animation. |
| `BusinessCard` | components/BusinessCard.jsx | `unit` prop (object from i18n). Handles `logoType` routing. `isFacebook: true` → shows Facebook icon on CTA. |
| `CompanyProfile` | components/CompanyProfile.jsx | No props. Dark section. Maps `t.profile.table[]` with field-type routing (tel/email/url/mono). |
| `Contact` | components/Contact.jsx | No props. 2-col: contact rows left, map card + info right. Uses `Mail`, `Phone`, `MapPin`, `Clock` icons. |
| `Footer` | components/Footer.jsx | No props. Dark section. Brand pills, nav links, copyright, Facebook icon. |
| `GoldLavenderLogo` | ui/GoldLavenderLogo.jsx | `size` (px, default 40). Inline SVG rounded square, gold left / lavender right. |
| `LanguageToggle` | ui/LanguageToggle.jsx | `onDark` (bool). Calls `toggleLang()`. Shows current opposite lang label. |
| `SectionHeading` | ui/SectionHeading.jsx | `label` (small uppercase), `title` (h2), `light` (bool, white text for dark sections). |
| `SectionWrapper` | ui/SectionWrapper.jsx | `id` (anchor ID), `className` (extra Tailwind). Applies `py-20 px-4` + framer whileInView. |

---

## 12. i18n File Structure Map

Both `ja.js` and `en.js` share this exact structure:

```
meta          → { title, description, lang }
nav           → { about, business, profile, contact, langToggle }
hero          → { tagline, taglineSub, cta, ctaSecondary }
about         → { sectionLabel, sectionTitle, lead, body[], values[] }
  values[]    → { icon, title, body }  — icon must match lucide-react export name
businesses    → { sectionLabel, sectionTitle, visitSite, visitPage, units[] }
  units[]     → { id, name, nameJp, category, description, url, tag,
                  logoType, logoFile?, logoColors?, isFacebook? }
profile       → { sectionLabel, sectionTitle, table[] }
  table[]     → { label, value, mono?, tel?, email?, url? }
contact       → { sectionLabel, sectionTitle, addressLabel, address, mapNote,
                  phoneLabel, phone, emailLabel, email, hoursLabel, hours,
                  socialLabel, facebookLabel, facebookUrl, mapLabel, mapUrl }
footer        → { tagline, copyright, privacyPolicy, links[] }
  links[]     → { label, href }  — href must match a section ID (#about, etc.)
```

---

## 13. Dependencies Reference

```json
"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "framer-motion": "^11.3.0",
  "react-helmet-async": "^2.0.5",
  "lucide-react": "^0.400.0"
},
"devDependencies": {
  "@vitejs/plugin-react": "^4.3.0",
  "vite": "^5.3.0",
  "tailwindcss": "^3.4.0",
  "@tailwindcss/typography": "^0.5.13",
  "autoprefixer": "^10.4.19",
  "postcss": "^8.4.39"
}
```

---

## 14. External URLs Reference

| Service | URL |
|---|---|
| Shinjuku Halal Food (web) | https://shinjukuhalalfood.com |
| GoldShirorom (kaitori) | https://goldshirorom.com |
| Shinjuku WiFi & Mobile (Facebook) | https://www.facebook.com/goldlavenderjp |
| CloudOn (eSIM) | https://cloudon.app |
| Gold Lavender Facebook | https://www.facebook.com/goldlavenderjp |
| Google Maps (office) | https://maps.app.goo.gl/XBK87a7ckWXLjdv57 |
| Google Fonts (Inter) | https://fonts.google.com/specimen/Inter |
| Google Fonts (Noto Sans JP) | https://fonts.google.com/noto/specimen/Noto+Sans+JP |

---

*Last updated: 2026-02-24 | Built with Vite + React + Tailwind CSS*

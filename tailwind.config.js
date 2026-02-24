/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFF176',
          300: '#FFD740',
          400: '#E8C800',
          500: '#D4B800',
          600: '#B89A00',
          700: '#8C7500',
          800: '#5C4D00',
          900: '#2E2700',
        },
        lavender: {
          50:  '#F9F4FF',
          100: '#F0E6F9',
          200: '#E0CCF3',
          300: '#CDB3EB',
          400: '#C99EE0',
          500: '#B57ED4',
          600: '#9A60BD',
          700: '#7A45A0',
          800: '#5A2E7A',
          900: '#3A1A52',
        },
        charcoal: {
          50:  '#F7F7F7',
          100: '#EBEBEB',
          200: '#D4D4D4',
          300: '#B8B8B8',
          400: '#8C8C8C',
          500: '#6B6B6B',
          600: '#4A4A4A',
          700: '#3D3D3D',
          800: '#2A2A2A',
          900: '#1A1A1A',
        },
        offwhite: '#F8F7F4',
      },
      fontFamily: {
        sans:    ['Inter', 'Noto Sans JP', 'sans-serif'],
        jp:      ['Noto Sans JP', 'sans-serif'],
        display: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 4px 24px -4px rgba(212, 184, 0, 0.18)',
        'gold-lg': '0 8px 40px -8px rgba(212, 184, 0, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #1A1500 40%, #1A0A2E 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

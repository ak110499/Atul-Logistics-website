/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deepSlate: '#1E293B',
        electricBlue: '#2563EB',
        offWhite: '#F8FAFC',
        ghostWhite: '#F1F5F9',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        'section-x': 'clamp(1.5rem, 6vw, 8rem)',
        'section-y': 'clamp(4rem, 10vh, 8rem)',
        'content-max': '72rem',
        'buffer': 'clamp(1rem, 2.5vw, 2.25rem)',
      },
      boxShadow: {
        glass: '0 10px 35px -15px rgba(15, 23, 42, 0.35)',
      },
      backdropBlur: {
        glass: '14px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      // ─── Colors (design-system.md) ───────────────────────────────────────
      colors: {
        brand: {
          white: '#FFFFFF',
          black: '#111111',
          green: '#2E7D32',
          'green-light': '#43A047',
          'green-dark': '#1B5E20',
        },
      },

      // ─── Typography (design-system.md) ───────────────────────────────────
      fontFamily: {
        // Inter → body text, UI labels, forms
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Poppins → headings, hero titles
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      // ─── Spacing scale extension ──────────────────────────────────────────
      spacing: {
        // Extra generous whitespace values consistent with the premium style
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },

      // ─── Container override ───────────────────────────────────────────────
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'world' : "url('../../public/hero/comp.png')",
        'banner' : "url('../../public/hero/office.jpg')",
      },
      colors: {
        "medium-blue-color": "var(--medium-blue)",
        "medium-green-color": "var(--medium-green)",
      },

      skew: {
        '20': '20deg',
      }
    },
  },
  plugins: [],
}

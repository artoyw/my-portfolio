import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'DMSerifReg': ['DMSerifReg', 'serif'],
        'DMSerifItal': ['DMSerifItal', 'serif'],
        'DongleReg': ['DongleReg', 'serif']
      },

      colors: {
        'custom-purple': '#89a3d9',
        'custom-pink': '#d989b7',
        'bg-pink': '#fad9e4',
      }

    },
  },
  plugins: [],
}

export default config
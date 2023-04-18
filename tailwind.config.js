/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'purple-500': '#7695EC',
        'grey-500': '#CCCCCC',
        'grey-700': '#777777',
        'grey-900': '#999999',
        'background': '#DDDDDD',
      },
      fontSize: {
       '1.5xl': '1.375rem'
      },
      width: {
        '200': '50rem',
        '165': '41.25rem'
      }
    },
  },
  plugins: [],
}

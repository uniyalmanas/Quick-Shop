/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fff', // white background
        foreground: '#1a1a1a', // dark text
        primary: {
          DEFAULT: '#FFD600', // vibrant yellow
          dark: '#FFC400',
          light: '#FFF9C4',
        },
        accent: {
          DEFAULT: '#FFB300', // accent yellow-orange
          dark: '#FF8F00',
          light: '#FFE082',
        },
        // override some grays for better contrast
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
    },
  },
  plugins: [],
};

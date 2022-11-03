/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      hotpink: '#F20089',
      purple: '#7209B7',
      midpurple: '#9A00FF',
      lightpurple: '#9C50FF',
      blue: '#0458FF',
      bluegray: '#8DA1B9',
      white: '#FFFFFF',
      dirtywhite: '#F1F1F1',
      black: '#1E1E1E',
      pitchblack: '#000000',
      matteblack: '#0F0D16',
      green: '#76FC81',
      yellow: '#FFDF01',
    },
    extend: {},
  },
  plugins: [],
}

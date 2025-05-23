/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}' // For Next.js App Router
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ef4444', // Replace with your desired primary color (this is Tailwind's blue-800)
      },
    },
  },
  plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
            light: {
                ...require('daisyui/src/theming/themes')["light"], // Import the default light theme
                "primary": "#ef4444", // Change primary color to red
            },
            },
        ],
        },
}

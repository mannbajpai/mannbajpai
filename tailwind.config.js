/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      logo: ['Moirai One']
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula","cupcake"],
  },
}


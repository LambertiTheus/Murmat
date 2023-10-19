import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        'primary-color': '#00a1fc',
        'white': '#ffffff',
        'darkgrey': '#121212',
        'lightlilac': '#be86fd'
      },
    },
    variants: {
      extend: {},
    }
  },
  plugins: [],
} satisfies Config;

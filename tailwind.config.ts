import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "html-bg": "#fff1e9",
        "css-bg": "#e0fdef",
        "js-bg": "#ebf0ff",
        "accessibility-bg": "#f6e7ff",
        "text-color": "#313e51",
        "text-color-p": "#626c7f",
        "purple": "#a729f5",
        "bg-col": "#fff",
        "button-bg": "#fff",
        "option-bg": "#f4f6fa",
        "option-color": "#626c7f",
        "correct-color": "#26d782",
        "invalid-color": "#ee5454",
      },
      backgroundImage: {
        'bg-light': "url('/assets/images/pattern-background-mobile-light.svg')",
        'bg-dark': "url('/assets/images/pattern-background-mobile-dark.svg')",
      }
    },  
  },
  plugins: [],
  darkMode: 'class'
};

export default config;

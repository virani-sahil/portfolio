/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg-custom': '1450px',
        'md-custom':'1000px',
        'sm-custom':'550px',
        'smtsm-custom':'375px',
        'header-custom':'1200px',
        'skill-custom':'590px',
        'contact-custom':'1300px',
      }, 
      colors: {
        mainBg: "#1f242d",
        secondaryBg: "#323946",
        textColor: "#ffffff",
        mainColor: "#0ef"
      }
    },
  },
  plugins: [],
}


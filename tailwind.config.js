/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14213d",
        secondary: "#fca311",
        mainGray: "#e5e5e5",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1400px",
        xxl: "1700",
      },
    },
  },
  plugins: [],
};

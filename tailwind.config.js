/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'check-blue': '#00B7C3',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
       fontFamily: {
        custom: ["Heebo", "sans-serif"],
        
      },
      boxShadow: {
        'custom': '0px 0px 8px 4px rgba(0, 0, 0, 0.20), 0px 14px 28px 0px rgba(0, 0, 0, 0.24)',
        'replybox':'0px 0px 2.776px 0px rgba(0, 0, 0, 0.12), 0px 0.925px 1.85px 0px rgba(0, 0, 0, 0.14)',
        'light':'0px 0px 2px 0px rgba(0, 0, 0, 0.12), 0px 8px 16px 0px rgba(0, 0, 0, 0.14)'
      },
    },
  },
  plugins: [],
};

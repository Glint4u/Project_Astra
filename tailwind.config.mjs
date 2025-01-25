/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        footer: "900px"
      },
      animation: {
        'loading': 'load 1s linear infinite',
      },
      keyframes: {
        load: {
          '0%, 100%': { transform: 'scale(1)', opacity: "70%" },
          '50%': { transform: 'scale(1.05)', opacity: "100%" },
        }
      }
    },
  },
  plugins: [],
};

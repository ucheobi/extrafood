module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cover-set': "url('/src/assets/images/steak2.jpg')",
      }),
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'garabond': ['"EB Garamond"', 'serif'],
      'monteCarlo': ['MonteCarlo', 'cursive'],
      'playfair': ['Playfair', 'serif']
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
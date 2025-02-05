// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        'y-180': '180deg'
      },
      colors: {
        background: "#2C2C2C", // Light Green Background
        textPrimary: "#2c3e50", // Dark Green-Gray Text
        accent: "#1abc9c", // Teal Accent
        yellow: {
          500: "#f59e0b", // Default yellow in Tailwind
        },
        white: "#E8DAB2",
        paleMint: "#98FB98",
        // darkGreen: '#064e3b',
        codeBlue: '#4FC1FF',
        
        
  
        // Optional gradients
        gradientStart: "#F869D5", // Gradient starting with Light Green
        gradientEnd: "#6078EA", // Gradient ending with Teal
        // gradientEnd: "#B7A08B",

      },
      transform: {
        'rotateY-0': 'rotateY(0deg)',
        'rotateY-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [],
};

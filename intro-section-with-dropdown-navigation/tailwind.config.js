module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
      },
      animation: {
        "slide-in": "slideIn 200ms ease-in forwards",
        "slide-out": "slideOut 200ms ease-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            visibility: "invisible",
            opacity: 0,
            transform: "translateY(-2em)",
          },
          "100%": {
            visibility: "visible",
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideOut: {
          "0%": {
            visibility: "visible",
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-2em)",
            opacity: 0,
            visibility: "invisible",
          },
        },
      },
    },
  },
  plugins: [],
};

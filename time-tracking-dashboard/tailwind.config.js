module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "hsl(246, 80%, 60%)",

        // Card
        lightRedWork: "hsl(15, 100%, 70%)",
        softBluePlay: "hsl(195, 74%, 62%)",
        lightRedStudy: "hsl(348, 100%, 68%)",
        limeGreenExercise: "hsl(145, 58%, 55%)",
        violetSocial: "hsl(264, 64%, 52%)",
        softOrangeSelfCare: "hsl(43, 84%, 65%)",
        // end

        veryDarkBlue: "hsl(226, 43%, 10%)",
        darkBlue: "hsl(235, 46%, 20%)",
        darkBlueHovered: "hsl(235, 46%, 30%)",
        deSaturatedBlue: "hsl(235, 45%, 61%)",
        paleBlue: "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Gray
        gray_1: "#FFFFFF",
        gray_2: "#FAFAFA",
        gray_3: "#F5F5F5",
        gray_4: "#F0F0F0",
        gray_5: "#D9D9D9",
        gray_6: "#BFBFBF",
        gray_7: "#8C8C8C",
        gray_8: "#595959",
        gray_9: "#262626",
        gray_10: "#0A0A0A",
        // Carribean Green
        green_1: "#DCFEF5",
        green_2: "#B8FDEB",
        green_3: "#71FBD7",
        green_4: "#2AFAC2",
        green_5: "#07F9B8",
        green_6: "#06D6A0",
        green_7: "#05BB8A",
        green_8: "#04A077",
        green_9: "#038663",
        green_10: "#036B4F",
        // Midnight Blue
        darkblue_1: "#CEEFFA",
        darkblue_2: "#9DE0F6",
        darkblue_3: "#38C0ED",
        darkblue_4: "#1086AD",
        darkblue_5: "#0B607C",
        darkblue_6: "#084458",
        darkblue_7: "#063341",
        darkblue_8: "#052B38",
        darkblue_9: "#04242F",
        darkblue_10: "#031D25",
        // Custom
        fb_blue: "#3b5999",
        email_red: "#da493e",
        pink_6: "#EF476F",
        blue_6: "#19AFD0",
      },
    },
    fontFamily: {
      heading: ["Quicksand"],
      body: ['"Work Sans"'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

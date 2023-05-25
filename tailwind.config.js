/** @type {import('tailwindcss').Config} */

const spacing = {};
const heightWidth = {};
const fontSize = {};
const lineHeight = {};
const borderRadius = {};

//------------------------------
// @Spacing (margin,padding,gap)
//-------------------------------
for (let i = 0; i <= 300; i++) {
  spacing[i * 2] = `${i * 2}px`;
}

//------------------------------
// @FontSize
//-------------------------------
for (let i = 2; i <= 100; i++) {
  fontSize[i] = [`${i}px`];
  lineHeight[i] = [`${i}px`];
}
//------------------------------
// @Width
// Default have 0 to 256px
//-------------------------------
for (let i = 130; i <= 700; i++) {
  heightWidth[i * 2] = `${i * 2}px`;
}

for (let i = 0; i <= 40; i++) {
  borderRadius[i] = `${i}px`;
}

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.scss",
    "./src/styles/**/*.css",
  ],
  important: true,
  theme: {
    fontSize,
    screens: {
      xxs: { min: "280px", max: "350px" },
      xs: { max: "575px" },
      sm: { min: "576px", max: "768px" },
      md: { min: "769px", max: "991px" },
      lg: { min: "992px", max: "1199px" },
      xl: { min: "1200px" },
    },
    borderRadius: {
      ...borderRadius,
      full: "9999px",
    },
    colors: {
      primary: {
        50: "#F1F0FF",
        100: "#DED9FF",
        200: "#CAC1FF",
        300: "#ADA0FF",
        400: "#7432FF",
        500: "#5B41FF",
        600: "#391BF6",
        700: "#1B00C6",
        800: "#0000A6",
        900: "#000088",
        1000: "#1877F2",
        1100: "#4800DF",
        DEFAULT: "#5B41FF",
      },
      accent: {
        50: "#FFC4D5",
        100: "#FFA5B8",
        200: "#FF879B",
        300: "#FD697F",
        400: "#DC4C65",
        500: "#BC2B4C",
        600: "#9B0034",
        700: "#7C001E",
        800: "#5D0002",
        900: "#430000",
        1000: "#CD3D59",
        DEFAULT: "#BC2B4C",
      },
      warn: {
        50: "#FFEEEE",
        100: "#FFCACA",
        200: "#FFA8A8",
        300: "#FF7B73",
        400: "#F64034",
        500: "#DB2121",
        600: "#AE0000",
        700: "#8B0000",
        800: "#6A0000",
        900: "#500000",
        DEFAULT: "#DB2121",
      },
      success: {
        50: "#EEFFF5",
        100: "#CDFFE1",
        200: "#95F2BB",
        300: "#61EA99",
        400: "#31C86F",
        500: "#1AAA55",
        600: "#0B9042",
        700: "#136535",
        800: "#122F1E",
        900: "#0E1C13",
        DEFAULT: "#1AAA55",
      },
      black: {
        50: "#C4C4C4",
        100: "#ACACAC",
        200: "#949494",
        300: "#7E7E7E",
        400: "#686868",
        500: "#535353",
        600: "#3E3E3E",
        700: "#2B2B2B",
        800: "#222222",
        900: "#000000",
        DEFAULT: "#222222",
      },
      white: {
        50: "#FFFFFF",
        100: "#F7F7F7",
        200: "#EFEFEF",
        300: "#E8E8E8",
        400: "#DFDFDF",
        500: "#D8D8D8",
        600: "#D0D0D0",
        700: "#C9C9C9",
        800: "#C1C1C1",
        900: "#B9B9B9",
        DEFAULT: "#E5E5E5",
      },
      other1: {
        DEFAULT: "#171523",
      },
      other2: {
        DEFAULT: "#FFAA00",
      },
      other3: {
        DEFAULT: "#6456C0",
      },
    },
    borderWidth: {
      default: "0.5px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
    },
    fontFamily: {
      barlow: ["Barlow", "sans-serif", "Arial"],
      space: ["Space Grotesk", "sans-serif", "Arial"],
    },
    extend: {
      lineHeight: {
        ...lineHeight,
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      flex: {
        0: "0 0 auto",
      },
      opacity: {
        0: "0",
        12: "0.12",
        38: "0.38",
        87: "0.87",
        1: "1",
      },
      rotate: {
        "-270": "270deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        270: "270deg",
      },
      scale: {
        "-1": "-1",
      },
      zIndex: {
        "-1": -1,
        49: 49,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        99: 99,
        999: 999,
        9999: 9999,
        99999: 99999,
      },
      spacing: {
        ...spacing,

        // Fractional values
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
      },
      width: {
        ...heightWidth,
      },
      height: {
        ...heightWidth,
      },
      minHeight: ({ theme }) => ({
        ...theme("spacing"),
      }),
      maxHeight: {
        none: "none",
      },
      minWidth: ({ theme }) => ({
        ...theme("spacing"),
        screen: "100vw",
      }),
      maxWidth: ({ theme }) => ({
        ...theme("spacing"),
        screen: "100vw",
      }),
      transitionDuration: {
        400: "400ms",
      },
      transitionTimingFunction: {
        drawer: "cubic-bezier(0.25, 0.8, 0.25, 1)",
      },
    },
  },
  plugins: [],
  variants: {
    fontSize: ["responsive", "hover"],
    extend: {
      opacity: ["disabled"],
    },
  },

  images: {},
};

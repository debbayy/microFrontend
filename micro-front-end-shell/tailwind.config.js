/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    backgroundImage: {
      "wave-texture": "url(../assets/image/bg-wave.svg)",
      "wave-login":
        "url(../assets/image/nle-images/blue-wave.png), url(../assets/image/nle-images/yellow-wave.png)",
      "banner-image": "url(../assets/image/nle-images/bg-banner.jpg)",
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      barlow: ["Barlow", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        bluePrimary: "#02275d",
        error1: "#f86c6b",
        black1: "#000000",
        white1: "#ffffff",

        fontInDark: "#f1f5f9",
        fontInLight: "#0f172a",
        bgInDark: "#363537",
        bgInLight: "#ffffff",
        bgError1: "#ffeeee",
        bgAplikasi: "#17202ead",
        bgMenuKolaborasi: "#EAECF0",
        borderInDark: "#808080",
        borderInLight: "#dee2e6",

        light1: "#f8f9fa",
        light2: "#d2d3d4",
        light3: "#c4c4c4",
        light4: "#bbbbbb",
        light5: "#c8ced3",

        grey1: "#a0a4a8",
        grey2: "#808080",
        grey3: "#666666",
        grey4: "#606365",

        dark1: "#202020",
        dark2: "#212529",

        darkMode1: "#363537",
        darkMode2: "#59575a",
        darkMode3: "#202020",

        yellow1: "#fe9812",
        yellow2: "#ffc107",
        yellow3: "#FDDD0B",

        green1: "#20c997",
        green2: "#4dbd74",

        blue1: "#517fa4",
        blue2: "#4875b4",
        blue3: "#63c2de",
        blue4: "#2A74DC",

        red1: "#f86c6b",
        red2: "#f63c3a",
        red3: "#f5302e",
        red4: "#e31c26",

        purple1: "#3f4b8d",
        purple2: "#333c71",
        greey: "#E4E5E6",

        bgTransparent: "#011634bd",
      },
      keyframes: {
        "fadein-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fadein-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fadein-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fadein-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fadein-down": "fadein-down 1s ease-out",
        "fadein-up": "fadein-up 1s ease-out",
        "fadein-right": "fadein-right 1s ease-out",
        "fadein-left": "fadein-left 1s ease-out",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#02275d",
          secondary: "#9ca3af",
          accent: "#3f4b8d",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#7dd3fc",
          success: "#4ade80",
          warning: "#FAC000",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};

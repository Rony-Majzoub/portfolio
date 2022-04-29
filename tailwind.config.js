module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        seashell: "#fff1eb",
        "unbleached-silk": "#ffd6bf",
        melon: "#ffc1b2",
        "pastel-pink": "#e5a0a3",
        "cameo-pink": "#dbafb8",
        eggplant: "#4e404f",
        "black-coffee": "#363040",
        gradient1: "rgba(54,48,64,0.95)",
        gradient2: "rgba(78,64,79,0)",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        custom: "cubic-bezier(0.45, 0.1, 0.25, 1)",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      screens: {
        "3xl": "2000px",
        "4xl": "2560px",
        "5xl": "3200px",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
        // Complex site-specific column configuration
        fun: "repeat(auto-fit, minmax(25vmax, 1fr))",
        funxl: "repeat(auto-fit, minmax(20vmax, 1fr))",
        funxxl: "repeat(auto-fit, minmax(10vmax, 1fr))",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

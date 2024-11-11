module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clean: "#D9D9D9",
        paper: "#E9E9E9",
        feather: "#77C9D4",
        feather_2: "#27bfd3",
        marine: "#57BC90",
        forest: "#015249",
        grey: "#9099A2",
        charcoal: "#3C3C3C",
        steel: "#31363F",
        smoke: "#222831d9",
        slate: "#222831",
      },
    },
  },
  plugins: [require("daisyui")],
};

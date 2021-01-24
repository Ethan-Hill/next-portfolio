module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Charcoal: "#264653",
        PersianGreen: "#2A9D8F",
        Crayola: "#E9C46A",
        Sandy: "#F4A261",
        Sienna: "#E76F51",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

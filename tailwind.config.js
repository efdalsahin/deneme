/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        arkaplanresim: "url('/src/images/arkaplan.jpg')",
      },
      colors: {
        arkaplan: "#95a5a6",
      },
    },
  },
  plugins: [],
};

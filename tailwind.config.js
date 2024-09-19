/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";

module.exports = withMT({
  content: [
      "./src/**/*.{js, jsx, ts, tsx}",
      "./public/index.html",
      "./index.html",
    "./src/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})


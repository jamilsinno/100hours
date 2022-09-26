/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/*.ejs", "./public/css/tailwind.css", "./views/partials/*.ejs"],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
  }
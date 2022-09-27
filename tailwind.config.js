/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/*.ejs", "./public/css/tailwind.css", "./views/partials/*.ejs"],
    theme: {
      extend: {
        spacing: {
          '92vh': '92vh',
        }
      },
    },
    plugins: [require("daisyui")],
  }
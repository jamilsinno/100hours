/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/*.ejs", "./public/css/tailwind.css", "./views/partials/*.ejs"],
    theme: {
      extend: {
        spacing: {
          '86vh': '86vh',
        }
      },
    },
    plugins: [require("daisyui")],
  }
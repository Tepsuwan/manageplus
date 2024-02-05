/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js",  "./node_modules/flowbite/**/*.js"],
  
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

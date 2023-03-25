/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    colors:{
      'morado':'#5d155e',
      'menosmorado':'#832d83',
    },
    extend: {},
  },
  plugins: [],
};

module.exports = config;

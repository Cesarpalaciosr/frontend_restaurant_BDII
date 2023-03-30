/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    fontFamily:     {
      'Nunito': ['Medium 500']
    },
    colors:{
      'morado':'#5d155e',
      'menosmorado':'#832d83',
      'letragris':'#7d8da2',
      'linea':'#e2e2e2',
      'bgsr':'#f9f9fb',
    },
    extend: {
      margin: {
        80: '80px'
      },
    },
  },
  plugins: [],
};

module.exports = config;

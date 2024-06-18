const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    flowbite.content()
  ],

  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

=======
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        authBg: "url('/src/assets/rafiki.png')",
      },
    },
  },
  plugins: [],
};
>>>>>>> 4ca7357 (first commit)

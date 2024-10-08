/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'custom-image': "url('/images/twitter-banner.png')",
        'random-cat': "url('/images/bg_random_cats.png')",
      },
    },

  },
  plugins: [],
}


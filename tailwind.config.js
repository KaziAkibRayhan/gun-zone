/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f24349",

          secondary: "#81b72f",

          accent: "#f9a389",

          neutral: "#162027",

          "base-100": "#E8E1EF",

          info: "#4E9BCA",

          success: "#3CD7CA",

          warning: "#F3BB20",

          error: "#F36653",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

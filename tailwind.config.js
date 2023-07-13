/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        custom: {
          primary: "#31393f",
          secondary: "#272b21",
          accent: "#9b7d8f",
          neutral: "#31393f",
          "base-100": "#030302",
          info: "#7cb9de",
          success: "#86efac",
          warning: "#fde047",
          error: "#fb7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

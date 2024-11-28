/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'top-bar' : "url('https://i.ibb.co.com/0KhcCWz/topbar-bg.jpg')",
        'hero-bg' : "url('https://i.ibb.co.com/vqgMtKZ/hero-bg.jpg')",
        'form-bg' : "url('https://i.ibb.co.com/pWKTCW8/form-bg.png')",
        'card-container-l': "url('https://i.ibb.co.com/NsfhKsN/card-container-bg-top.png')",
        'card-container-r': "url('https://i.ibb.co.com/p3zh8nb/card-container-bg-bottom.png')"
      },
      fontFamily: {
        railway: ["Raleway", "sans-serif"],
        rancho: ["Rancho", "cursive"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#331A15",

          "primary-content": "#FFFFFF",

          secondary: "#E3B577",

          "secondary-content": "#FFFFFF",

          accent: "#00ffff",

          "accent-content": "#001616",

          neutral: "#FFFFFF",

          "neutral-content": "#1B1A1A",

          "base-100": "#FFFFFF",

          "base-200": "#F5F4F1",

          "base-300": "#ECEAE3",

          "base-content": "#1B1A1A",

          info: "#3C393B",

          "info-content": "#FFFFFF",

          success: "#00ff00",

          "success-content": "#001600",

          warning: "#EA4744",

          "warning-content": "#FFFFFF",

          error: "#ff0000",

          "error-content": "#160000",
        },
      },
    ],
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};


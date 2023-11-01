/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "soft-red": "hsl(10, 79%, 65%)",
          "cyan": "hsl(186, 34%, 60%)"
        },
        neutral: {
          "dark-brown": "hsl(25, 47%, 15%)",
          "medium-brown": "hsl(28, 10%, 53%)",
          "cream": "hsl(27, 66%, 92%)",
          "pale-orange": "hsl(33, 100%, 98%)"
        }
      },
      fontSize: {
        "body-copy": "18px",
        "label": "10px"
      },
      fontFamily: {
         dmsans: ["DM Sans"]
      },
      animation: {
        "bounce-custom": "bounce 0.8s linear 1.5",
        "spin-custom": "spin 1.2s ease-in-out 1"
      }
    },
  },
  plugins: [],
}


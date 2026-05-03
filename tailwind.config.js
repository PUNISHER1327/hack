/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0A0A0F",
        neonBlue: "#0066FF",
        electricBlue: "#00A3FF",
        orangeAccent: "#FF7A00",
        orangeGlow: "#FF9A3D",
        whiteText: "#F5F5F5",
        mutedText: "#9CA3AF",
      },
      fontFamily: {
        bebas: ["'Bebas Neue'", "cursive"],
        orbitron: ["'Orbitron'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      animation: {
        'flicker': 'flicker 1.5s infinite alternate',
        'shine': 'shine 3s infinite linear',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: 1, textShadow: '0 0 10px #0066FF, 0 0 20px #0066FF' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: 0.4, textShadow: 'none' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(to right, rgba(0, 102, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 102, 255, 0.1) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}

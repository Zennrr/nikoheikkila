/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
const config = {
    darkMode: "class",
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/app/globals.css"],
    theme: {
        extend: {}
    },
    plugins: [typography]
};

export default config;

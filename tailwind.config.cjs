/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            display: ['"Fira Sans"', '"sans-serif"'],
        },
        extend: {
            colors: {
                primary: {
                    teal: "#04D8F4",
                    purple: "#BC55FF",
                },
                accent: {
                    blue: "#4361EE",
                    purple: "#7209B7",
                    green: "#96CE1E",
                    teal: "#03A4BA",
                },
                greys: {
                    muted: "#91949A",
                    th: "#090909",
                    td: "#111315",
                    border: "#212325",
                    variant1: "#151718",
                },
            },
            backgroundImage: {
                gradient:
                    "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #04d8f4, #bc55ff)",
                gradientHover:
                    "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(0deg, #04d8f4, #bc55ff)",
            },
            boxShadow: {
                gradient: "2px 1000px 1px #000 inset",
                event: "2px 1000px 1px rgba(0, 0, 0, 0.85) inset",
            },
        },
    },
    plugins: [],
};

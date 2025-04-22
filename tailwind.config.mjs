module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                ipad: { min: "768px", max: "1024px" },
                iphone: { min: "300px", max: "768px" }
            },
        },
    },
    plugins: [],
}
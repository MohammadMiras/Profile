/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                custom: {
                    color1: "#171717",
                    color2: "#00a78e",
                    color3: "#161614",
                    color4: "#f48024"
                }
            }
        },
    },
    plugins: [],
};

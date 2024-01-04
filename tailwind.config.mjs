/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                logo: '#cec4bd',
                heading: '#bcb3ac',
                text: '#beb6ae'
            }
        }
    },
    plugins: []
}

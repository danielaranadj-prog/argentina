/** @type {import('tailwindcss').Config} */
export default {
	// Esto le dice a Tailwind qué archivos mirar para generar estilos
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// Aquí registramos tu fuente. 
				// Cuando escribas 'font-montserrat', Tailwind usará esto:
				montserrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [
		// Este plugin es vital para que los artículos del blog (.md) se vean bonitos
		require('@tailwindcss/typography'),
	],
}
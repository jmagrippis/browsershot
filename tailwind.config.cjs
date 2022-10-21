const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: colors.emerald,
				gray: colors.stone,
			},
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif', '"Noto Color Emoji"'],
			cursive: ['"Fuzzy Bubbles"', 'cursive', '"Noto Color Emoji"'],
		},
		container: {
			center: true,
		},
	},
	plugins: [],
}

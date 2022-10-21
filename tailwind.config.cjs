const colors = require('tailwindcss/colors')

const withAlphaValue = (varName) => `hsl(var(--${varName}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: colors.emerald,
				gray: colors.stone,
				copy: {
					base: withAlphaValue('copy-base-color'),
					muted: withAlphaValue('copy-muted-color'),
				},
				surface: {
					1: withAlphaValue('surface-1-color'),
					2: withAlphaValue('surface-2-color'),
				},
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

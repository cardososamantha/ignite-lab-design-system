/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		fontSize: {
			xs: 14,
			s: 16,
			md: 18,
			lg: 20,
			xl: 24,
			'2xl': 32,
		},
		colors: {
			black: '#000000',
			white: '#FFFFFF',
			gray: {
				900: '#121214',
				800: '#202024',
				400: '#7C7C8A',
				100: '#E1E1E6',
			},
			red: '#FE6161',
			cyan: {
				200: '#97E9FF',
				500: '#61DAFB',
			},
		},
		extend: {
			fontFamily: {
				sans: 'Inter, sans-serif',
			},
		},
	},
	plugins: [],
};

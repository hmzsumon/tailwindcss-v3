module.exports = {
	content: ['*.html'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};

//tailwindcss -i tailwind.css -o ./layouts/css/style.css --watch

// tailwindcss -i tailwind.css -o ./layouts/css/style.css --minify

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "414px",
			sm: "640px",
			md: "720px",
			lg: "1000px",
			"lg-max": { max: "960px" },
			xl: "1140px",
			"2xl": "1440px",
			"3xl": "1441px",
		},
		extend: {
			boxShadow: {
				"3xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
			},

			colors: {
				primary: "#E21313",
				secondary: {
					100: "#1E1E1E",
					200: "#fff",
					300: "#53555A",
					400: "#1E1E1E",
					500: "#FAFAFA",
					600: "#E21313",
				},
				tertiary: {
					100: "#E1E5EA",
					200: "#E1E1E1",
					300: "#D6D6D6",
				},
			},
		},

		fontFamily: {
			grotesk: ["Space Grotesk", "sans-serif"],
		},

		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "6.25rem",
				xl: "6.25rem",
				"2xl": "6rem",
			},
			center: true,
		},
		backgroundImage: {
			hero: "url('/src/assets/icons/hero-bg.png')",
			prefooter: "url('/src/assets/images/prefooter-bg.svg')",
			quote: "url('/src/assets/icons/quote.svg')",
			heroRight: "url('/src/assets/images/dashed-bg.png')",
			sectionBg: "url('/src/assets/icons/section-bg.png')",
			benefitBg: "url('/src/assets/icons/benefits-bg.png')",
			"custom-gradient":
				"linear-gradient(90deg, #E21313 0%, rgba(22, 22, 22, 0.40) 100%)",
			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".scrollbar-hide::-webkit-scrollbar": {
					display: "none",
				},
				".scrollbar-hide scrollbar-width": {
					display: "none",
				},
			};

			addUtilities(newUtilities);
		},
	],
});

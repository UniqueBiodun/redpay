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
			colors: {
				primary: "#E71615",
				secondary: {
					100: "#121212",
					200: "#fff",
				},
			},
		},

		fontFamily: {
			lato: ["Lato", "sans-serif"],
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
			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
		},
	},
	plugins: [],
});

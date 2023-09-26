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
				primary: "#530E25",
				sec: {
					100: "#190009",
					200: "#787878",
					300: "#2F2F2F",
					400: "#151515",
				},
			},
		},

		fontFamily: {
			noto: ["Noto Sans", "sans-serif"],
		},

		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "2rem",
				xl: "2rem",
				"2xl": "5rem",
			},
			center: true,
		},
		backgroundImage: {
			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
		},
	},
	plugins: [],
});

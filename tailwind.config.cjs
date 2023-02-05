/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				DarkText: "hsl(229, 25%, 31%)",
				ScoreText: "hsl(229, 64%, 46%)",
				HeaderOutline: "hsl(217, 16%, 45%)",
				ScissorsGradient: "hsl(39, 89%, 49%)",
				ScissorsGradientTo: "hsl(40, 84%, 53%)",
				PaperGradient: "hsl(230, 89%, 62%)",
				PaperGradientTo: "hsl(230, 89%, 65%)",
				RockGradient: "hsl(349, 71%, 52%)",
				RockGradientTo: "hsl(349, 70%, 56%)",
				LizardGradient: "hsl(261, 73%, 60%)",
				LizardGradientTo: "hsl(261, 72%, 63%)",
				Cyan: "hsl(189, 59%, 53%)",
				CyanTo: "hsl(189, 58%, 57%)",
				RadialGradient: "hsl(214, 47%, 23%)",
				RadialGradientTo: "hsl(237, 49%, 15%)",
			},
			fontFamily: {
				Barlow: ["Barlow Semi Condensed", "sans-serif"],
			},
			backgroundImage: {
				Triangle: "url('/src/assets/images/bg-triangle.svg')",
				Pentagon: "url('/src/assets/images/bg-pentagon.svg')",
			},
		},
	},
	plugins: [],
};

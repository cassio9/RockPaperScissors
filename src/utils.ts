export const setGradient = (value: string) => {
	let result;
	value === "Paper"
		? (result = "from-PaperGradient to-PaperGradientTo")
		: value === "Scissors"
		? (result = "from-ScissorsGradient to-ScissorsGradientTo")
		: (result = "from-RockGradient to-RockGradientTo");

	return result;
};

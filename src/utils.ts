import PaperIcon from "./assets/images/icon-paper.svg";
import ScissorsIcon from "./assets/images/icon-scissors.svg";
import RockIcon from "./assets/images/icon-rock.svg";
import LizardIcon from "./assets/images/icon-lizard.svg";
import SpockIcon from "./assets/images/icon-spock.svg";

export const setGradient = (value: string) => {
	let result;
	switch (value) {
		case "Paper":
			result = "from-PaperGradient to-PaperGradientTo";
			break;
		case "Scissors":
			result = "from-ScissorsGradient to-ScissorsGradientTo";
			break;
		case "Rock":
			result = "from-RockGradient to-RockGradientTo";
			break;
		case "Lizard":
			result = "from-LizardGradient to-LizardGradientTo";
			break;
		case "Spock":
			result = "from-Cyan to-CyanTo";
			break;
		default:
			break;
	}

	return result;
};

export const setImage = (value: string) => {
	let result;
	switch (value) {
		case "Paper":
			result = PaperIcon;
			break;
		case "Scissors":
			result = ScissorsIcon;
			break;
		case "Rock":
			result = RockIcon;
			break;
		case "Lizard":
			result = LizardIcon;
			break;
		case "Spock":
			result = SpockIcon;
			break;
		default:
			break;
	}

	return result;
};

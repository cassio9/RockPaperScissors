import PaperIcon from "../assets/images/icon-paper.svg";
import ScissorsIcon from "../assets/images/icon-scissors.svg";
import RockIcon from "../assets/images/icon-rock.svg";
import LizardIcon from "../assets/images/icon-lizard.svg";
import SpockIcon from "../assets/images/icon-spock.svg";
import useGameStore from "../useGameStore";

const OriginalGame = () => {
	const setPlayerPick = useGameStore((state) => state.setPlayerPick);
	const setPcPick = useGameStore((state) => state.setComputerPickBonusRandom);
	const setWinner = useGameStore((state) => state.setWinner);

	const setPlayerPickAndWinner = (value: string) => {
		setPcPick();
		setPlayerPick(value);
		setTimeout(() => {
			setWinner();
		}, 1000);
	};

	return (
		<main className="w-full my-20 lg:mt-32 max-w-sm md:max-w-md">
			<div
				className="bg-Pentagon w-full mx-auto bg-center bg-[length:300px_280px] lg:bg-[length:400px_350px] bg-no-repeat
             h-72 lg:h-[22rem]  relative flex flex-col ">
				<div
					onClick={() => setPlayerPickAndWinner("Paper")}
					className="absolute -right-2 md:right-5 top-[15%]  md:top-[10%]  lg:-right-12 cursor-pointer bg-gradient-to-b from-PaperGradient to-PaperGradientTo rounded-full w-32 h-32 
					lg:w-40 lg:h-40 flex justify-center items-center shadow-ShadowPaper">
					<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center shadow-ShadowInner ">
						<img className="lg:scale-125" src={PaperIcon} alt="Paper Icon" />
					</div>
				</div>
				<div
					onClick={() => setPlayerPickAndWinner("Scissors")}
					className="absolute -top-16 md:-top-16 left-[50%] -translate-x-[50%] lg:-top-24  cursor-pointer bg-gradient-to-b from-ScissorsGradient to-ScissorsGradientTo rounded-full w-32 h-32 lg:w-40 lg:h-40 flex justify-center items-center shadow-ShadowScissors">
					<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center shadow-ShadowInner ">
						<img className="lg:scale-125" src={ScissorsIcon} alt="Scissors Icon" />
					</div>
				</div>
				<div
					onClick={() => setPlayerPickAndWinner("Rock")}
					className="absolute -bottom-10 right-[10%]   lg:-bottom-10 lg:right-10 cursor-pointer bg-gradient-to-b from-RockGradient to-RockGradientTo rounded-full w-32 h-32 lg:w-40 lg:h-40 flex justify-center items-center shadow-ShadowRock">
					<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center shadow-ShadowInner">
						<img className="lg:scale-125" src={RockIcon} alt="Rock Icon" />
					</div>
				</div>
				<div
					onClick={() => setPlayerPickAndWinner("Lizard")}
					className="absolute -bottom-10 left-[10%]  lg:-bottom-10 lg:left-10 cursor-pointer bg-gradient-to-b from-LizardGradient to-LizardGradientTo rounded-full w-32 h-32 lg:w-40 lg:h-40 flex justify-center items-center shadow-ShadowLizard self-center">
					<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center shadow-ShadowInner">
						<img className="lg:scale-125" src={LizardIcon} alt="Rock Icon" />
					</div>
				</div>
				<div
					onClick={() => setPlayerPickAndWinner("Spock")}
					className="absolute -left-2 md:left-5 top-[15%] md:top-[10%] lg:-left-12 cursor-pointer bg-gradient-to-b from-Cyan to-CyanTo rounded-full w-32 h-32 lg:w-40 lg:h-40 flex justify-center items-center shadow-ShadowSpock self-center">
					<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center shadow-ShadowInner">
						<img className="lg:scale-125" src={SpockIcon} alt="Rock Icon" />
					</div>
				</div>
			</div>
		</main>
	);
};

export default OriginalGame;

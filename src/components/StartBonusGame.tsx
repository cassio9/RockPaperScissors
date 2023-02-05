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
		<main className="w-full my-20 max-w-md">
			<div
				className="bg-Pentagon w-full mx-auto bg-center bg-[length:300px_300px] bg-no-repeat
             h-72  relative flex flex-col ">
				<div
					onClick={() => setPlayerPickAndWinner("Paper")}
					className="absolute right-5 top-[10%] cursor-pointer bg-gradient-to-b from-PaperGradient to-PaperGradientTo rounded-full w-32 h-32 flex justify-center items-center">
					<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center ">
						<img src={PaperIcon} alt="Paper Icon" />
					</div>
				</div>
				<div
					onClick={() => setPlayerPickAndWinner("Scissors")}
					className="absolute -top-16 left-[50%] -translate-x-[50%]  cursor-pointer bg-gradient-to-b from-ScissorsGradient to-ScissorsGradientTo rounded-full w-32 h-32 flex justify-center items-center">
					<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center ">
						<img src={ScissorsIcon} alt="Scissors Icon" />
					</div>
				</div>
				<div
					onClick={() => setPlayerPickAndWinner("Rock")}
					className="absolute -bottom-10  right-[15%] cursor-pointer bg-gradient-to-b from-RockGradient to-RockGradientTo rounded-full w-32 h-32 flex justify-center items-center">
					<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center">
						<img src={RockIcon} alt="Rock Icon" />
					</div>
				</div>
				<div
					onClick={() => setPlayerPickAndWinner("Lizard")}
					className="absolute -bottom-10 left-[15%] cursor-pointer bg-gradient-to-b from-LizardGradient to-LizardGradientTo rounded-full w-32 h-32 flex justify-center items-center self-center">
					<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center">
						<img src={LizardIcon} alt="Rock Icon" />
					</div>
				</div>
				<div
					onClick={() => setPlayerPickAndWinner("Spock")}
					className="absolute left-5 top-[10%] cursor-pointer bg-gradient-to-b from-Cyan to-CyanTo rounded-full w-32 h-32 flex justify-center items-center self-center">
					<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center">
						<img src={SpockIcon} alt="Rock Icon" />
					</div>
				</div>
			</div>
		</main>
	);
};

export default OriginalGame;

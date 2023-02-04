import PaperIcon from "../assets/images/icon-paper.svg";
import ScissorsIcon from "../assets/images/icon-scissors.svg";
import RockIcon from "../assets/images/icon-rock.svg";
import useGameStore from "../useGameStore";
import { useEffect } from "react";

const OriginalGame = () => {
	const setPlayerPick = useGameStore((state) => state.setPlayerPick);
	const setComputerPickRandom = useGameStore((state) => state.setComputerPickRandom);

	useEffect(() => {
		setComputerPickRandom();
	}, []);

	return (
		<main className="w-full max-w-sm">
			<div
				className="bg-Triangle w-full mx-auto bg-center bg-[length:200px_200px] bg-no-repeat
             h-fit  relative flex flex-col ">
				<div className="flex justify-around -translate-y-10 ">
					<div
						onClick={() => setPlayerPick("Paper")}
						className="cursor-pointer bg-gradient-to-b from-PaperGradient to-PaperGradientTo rounded-full w-32 h-32 flex justify-center items-center ">
						<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center ">
							<img src={PaperIcon} alt="Paper Icon" />
						</div>
					</div>
					<div
						onClick={() => setPlayerPick("Scissors")}
						className="cursor-pointer bg-gradient-to-b from-ScissorsGradient to-ScissorsGradientTo rounded-full w-32 h-32 flex justify-center items-center">
						<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center ">
							<img src={ScissorsIcon} alt="Scissors Icon" />
						</div>
					</div>
				</div>
				<div
					onClick={() => setPlayerPick("Rock")}
					className="cursor-pointer bg-gradient-to-b from-RockGradient to-RockGradientTo rounded-full w-32 h-32 flex justify-center items-center self-center">
					<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center">
						<img src={RockIcon} alt="Rock Icon" />
					</div>
				</div>
			</div>
		</main>
	);
};

export default OriginalGame;

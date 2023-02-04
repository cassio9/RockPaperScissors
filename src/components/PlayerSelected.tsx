import PaperIcon from "../assets/images/icon-paper.svg";
import ScissorsIcon from "../assets/images/icon-scissors.svg";
import RockIcon from "../assets/images/icon-rock.svg";
import useGameStore from "../useGameStore";
import { useEffect } from "react";
import { setGradient } from "../utils";

const PlayerSelected = () => {
	const playerPick = useGameStore((state) => state.playerPick);
	const Winner = useGameStore((state) => state.Winner);
	const computerPick = useGameStore((state) => state.computerPick);
	const changeScore = useGameStore((state) => state.changeScore);

	useEffect(() => {
		changeScore(Winner);
	}, [Winner]);

	return (
		<main className="w-full max-w-sm">
			<div className="w-full mx-auto flex justify-between">
				<div className="flex flex-col items-center gap-4">
					<div
						className={`${setGradient(
							playerPick
						)} cursor-pointer bg-gradient-to-b  rounded-full w-32 h-32 flex justify-center items-center `}>
						<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center ">
							<img
								src={
									playerPick === "Paper"
										? PaperIcon
										: playerPick === "Scissors"
										? ScissorsIcon
										: RockIcon
								}
								alt={`${playerPick} Icon`}
							/>
						</div>
					</div>
					<p className="text-white text-xl uppercase tracking-wider">You Picked</p>
				</div>
				{Winner ? (
					<div className="flex flex-col gap-4 items-center">
						<div
							className={`${setGradient(
								computerPick
							)} cursor-pointer bg-gradient-to-b  rounded-full w-32 h-32 flex justify-center items-center `}>
							<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center ">
								<img
									src={
										computerPick === "Paper"
											? PaperIcon
											: computerPick === "Scissors"
											? ScissorsIcon
											: RockIcon
									}
									alt={`${computerPick} Icon`}
								/>
							</div>
						</div>
						<p className="text-white text-xl uppercase tracking-wider">The house picked</p>
					</div>
				) : (
					<div className="flex flex-col items-center gap-4">
						<div className="cursor-pointer rounded-full w-32 h-32 scale-90 bg-RadialGradientTo opacity-50"></div>
						<p className="text-white text-xl uppercase tracking-wider">The house picked</p>
					</div>
				)}
			</div>
		</main>
	);
};

export default PlayerSelected;

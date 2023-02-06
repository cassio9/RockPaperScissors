import useGameStore from "../useGameStore";
import { useEffect } from "react";
import { setGradient, setImage } from "../utils";
import ResultGame from "./ResultGame";

const PlayerSelected = () => {
	const playerPick = useGameStore((state) => state.playerPick);
	const Winner = useGameStore((state) => state.Winner);
	const computerPick = useGameStore((state) => state.computerPick);
	const changeScore = useGameStore((state) => state.changeScore);

	useEffect(() => {
		changeScore(Winner);
	}, [Winner]);

	return (
		<main className="w-full my-10 max-w-sm lg:max-w-3xl relative">
			<div className="w-full flex items-center justify-between flex-wrap">
				<div className="flex flex-col items-center gap-4 px-4">
					<div
						className={`${setGradient(playerPick)} ${Winner == "Player" && "shadow-Winner"} 
						cursor-pointer bg-gradient-to-b  rounded-full w-32 h-32 lg:w-48 lg:h-48  flex justify-center items-center `}>
						<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center shadow-ShadowInner ">
							<img className="lg:scale-125" src={setImage(playerPick)} alt={`${playerPick} Icon`} />
						</div>
					</div>
					<p className="text-white text-md uppercase tracking-wider">You Picked</p>
				</div>
				{Winner ? (
					<div className="flex flex-col gap-4 items-center px-4 lg:order-3">
						<div
							className={`${setGradient(computerPick)} ${Winner == "Computer" && "shadow-Winner"} 
							cursor-pointer bg-gradient-to-b  rounded-full w-32 h-32 lg:w-48 lg:h-48  flex justify-center items-center `}>
							<div className="bg-gray-200 rounded-full w-[80%] h-[80%]  flex justify-center items-center shadow-ShadowInner ">
								<img
									className="lg:scale-125"
									src={setImage(computerPick)}
									alt={`${computerPick} Icon`}
								/>
							</div>
						</div>
						<p className="text-white text-md uppercase tracking-wider">The house picked</p>
					</div>
				) : (
					<div className="flex flex-col items-center gap-4">
						<div className="cursor-pointer rounded-full w-32 h-32 lg:w-48 lg:h-48  scale-90 bg-RadialGradientTo opacity-50"></div>
						<p className="text-white text-xl uppercase tracking-wider">The house picked</p>
					</div>
				)}
			</div>
			<div className="mx-auto pt-10 lg:absolute lg:top-0 lg:left-[50%] lg:-translate-x-[50%]">
				{Winner && <ResultGame />}
			</div>
		</main>
	);
};

export default PlayerSelected;

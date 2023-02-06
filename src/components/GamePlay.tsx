import useGameStore from "../useGameStore";

const GamePlay = () => {
	const setGamePlaying = useGameStore((state) => state.setGamePlaying);
	return (
		<div role="button" className="flex flex-col gap-10 my-20">
			<button
				onClick={() => setGamePlaying("Original")}
				className="hover:text-RockGradient  border-2 
            border-white text-2xl py-3 px-8 rounded-lg tracking-widest uppercase text-white bg-RadialGradientTo">
				Original Game
			</button>
			<button
				onClick={() => setGamePlaying("Bonus")}
				className="hover:text-RockGradient  border-2 
				border-white text-2xl py-3 px-8 rounded-lg tracking-widest uppercase text-white bg-RadialGradientTo">
				Bonus Game
			</button>
		</div>
	);
};

export default GamePlay;

import useGameStore from "../useGameStore";

const GamePlay = () => {
	const setGamePlaying = useGameStore((state) => state.setGamePlaying);
	return (
		<div role="menu" className="flex flex-col gap-10 my-20">
			<button
				onClick={() => setGamePlaying("Original")}
				className="text-RockGradient bg-white border-2 
            border-white text-2xl py-3 px-8 rounded-lg tracking-widest uppercase hover:text-white hover:bg-RadialGradientTo">
				Original Game
			</button>
			<button
				onClick={() => setGamePlaying("Bonus")}
				className="text-ScissorsGradient bg-white border-2 border-white text-2xl py-3 px-8 rounded-lg tracking-widest uppercase hover:text-white hover:bg-RadialGradientTo">
				Bonus Game
			</button>
		</div>
	);
};

export default GamePlay;

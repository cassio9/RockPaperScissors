import useGameStore from "../useGameStore";

const ResultGame = () => {
	const Winner = useGameStore((state) => state.Winner);
	const restart = useGameStore((state) => state.setRestart);

	const result = Winner === "Player" ? "You Win" : Winner === "Computer" ? "You Lose" : "Draw";

	return (
		<section className="flex flex-col justify-center items-center gap-4 text-white">
			<h1 className="text-5xl uppercase">{result}</h1>
			<button
				onClick={() => restart()}
				className="text-DarkText bg-white border-2 border-white text-2xl py-3 px-8 rounded-lg tracking-widest uppercase hover:text-white hover:bg-RadialGradientTo">
				Play Again
			</button>
		</section>
	);
};

export default ResultGame;

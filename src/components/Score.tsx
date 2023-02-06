import Logo from "../assets/images/logo.svg";
import LogoBonus from "../assets/images/logo-bonus.svg";
import useGameStore from "../useGameStore";

const Score = () => {
	const score = useGameStore((state) => state.score);
	const gamePlaying = useGameStore((state) => state.gamePlaying);
	const setGamePlaying = useGameStore((state) => state.setGamePlaying);
	const setScore = useGameStore((state) => state.setScore);

	return (
		<header className="flex justify-between items-center border-4 border-HeaderOutline rounded-lg w-full max-w-md py-2 lg:py-4 px-6 lg:max-w-2xl z-10 bg-RadialGradient">
			<img
				className="w-[6rem]"
				src={gamePlaying == "Original" ? Logo : LogoBonus}
				alt="Rock, Paper, Scissors Logo"
			/>
			<div className="flex flex-col gap-2 w-16 md:w-auto">
				<button
					onClick={() => setScore()}
					className="text-HeaderOutline hover:text-white hover:border-white text-sm border-2 rounded-md md:py-2 md:px-4 border-HeaderOutline">
					Reset Score
				</button>
				<button
					onClick={() => setGamePlaying("")}
					className="text-HeaderOutline hover:text-white hover:border-white text-sm border-2 rounded-md md:py-2 md:px-4 border-HeaderOutline">
					Change Game
				</button>
			</div>
			<div className="bg-white p-2 px-7 rounded-lg flex flex-col items-center">
				<h1 className="text-sm lg:text-md tracking-wider text-ScoreText">SCORE</h1>
				<p className="text-5xl  text-DarkText">{score}</p>
			</div>
		</header>
	);
};

export default Score;

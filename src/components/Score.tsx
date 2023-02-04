import Logo from "../assets/images/logo.svg";
import useGameStore from "../useGameStore";

const Score = () => {
	const score = useGameStore((state) => state.score);

	return (
		<header className="flex justify-between items-center border-4 border-HeaderOutline rounded-lg w-full max-w-md py-2 px-6">
			<img className="w-[7rem]" src={Logo} alt="Rock, Paper, Scissors Logo" />
			<div className="bg-white p-2 px-7 rounded-lg flex flex-col items-center">
				<h1 className="text-sm tracking-wider text-ScoreText">SCORE</h1>
				<p className="text-5xl text-DarkText">{score}</p>
			</div>
		</header>
	);
};

export default Score;

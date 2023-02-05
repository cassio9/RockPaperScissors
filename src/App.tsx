import "./App.css";
import StartOriginalGame from "./components/StartOriginalGame";
import Rules from "./components/Rules";
import Score from "./components/Score";
import useGameStore from "./useGameStore";
import PlayerSelected from "./components/PlayerSelected";
import ResultGame from "./components/ResultGame";
import GamePlay from "./components/GamePlay";
import StartBonusGame from "./components/StartBonusGame";

function App() {
	const state = useGameStore((state) => state);
	const playerPick = useGameStore((state) => state.playerPick);
	const gamePlaying = useGameStore((state) => state.gamePlaying);
	const Winner = useGameStore((state) => state.Winner);

	console.log(state);
	return (
		<div className="font-Barlow bg-gradient-to-b from-RadialGradient to-RadialGradientTo max-h-fit min-h-screen flex flex-col items-center py-10 px-6 justify-between shrink-0 relative">
			<Score />
			{gamePlaying ? "" : <GamePlay />}
			{gamePlaying == "Original" ? (
				playerPick ? (
					<PlayerSelected />
				) : (
					<StartOriginalGame />
				)
			) : gamePlaying === "Bonus" ? (
				playerPick ? (
					<PlayerSelected />
				) : (
					<StartBonusGame />
				)
			) : (
				""
			)}
			{Winner && <ResultGame />}
			<Rules />
		</div>
	);
}

export default App;

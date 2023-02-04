import "./App.css";
import StartGame from "./components/StartGame";
import Rules from "./components/Rules";
import Score from "./components/Score";
import useGameStore from "./useGameStore";
import PlayerSelected from "./components/PlayerSelected";
import ResultGame from "./components/ResultGame";

function App() {
	const state = useGameStore((state) => state);
	const playerPick = useGameStore((state) => state.playerPick);
	const Winner = useGameStore((state) => state.Winner);

	console.log(state);
	return (
		<div className="font-Barlow bg-gradient-to-b from-RadialGradient to-RadialGradientTo min-h-screen max-h-fit flex flex-col items-center py-10 px-6 justify-between">
			<Score />
			{playerPick ? <PlayerSelected /> : <StartGame />}
			{Winner && <ResultGame />}
			<Rules />
		</div>
	);
}

export default App;

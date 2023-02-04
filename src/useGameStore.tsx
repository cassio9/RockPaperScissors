import { create } from "zustand";

interface GameState {
	score: number;
	playerPick: string;
	computerPick: string;
	Winner: string;
	setWinner: () => void;
	choices: string[];
	changeScore: (value: string) => void;
	setPlayerPick: (value: string) => void;
	setComputerPickRandom: () => void;
	setRestart: () => void;
}

const useGameStore = create<GameState>()((set) => ({
	score: 0,
	playerPick: "",
	computerPick: "",
	choices: ["Paper", "Scissors", "Rock"],
	Winner: "",
	changeScore: (value) =>
		set((state) => {
			if (value === "Player") {
				return { score: state.score + 1 };
			} else if (value === "Computer" && state.score > 0) {
				return { score: state.score - 1 };
			} else {
				return { score: state.score };
			}
		}),
	setPlayerPick: (value) => set({ playerPick: value }),
	setComputerPickRandom: () =>
		set((state) => {
			let randomPick = Math.floor(Math.random() * state.choices.length);
			return { computerPick: state.choices[randomPick] };
		}),
	setWinner: () =>
		set((state) => {
			if (
				(state.playerPick == "Rock" && state.computerPick == "Scissors") ||
				(state.playerPick == "Paper" && state.computerPick == "Rock") ||
				(state.playerPick == "Scissors" && state.computerPick == "Paper")
			) {
				return { Winner: "Player" };
			} else if (
				(state.playerPick == "Scissors" && state.computerPick == "Rock") ||
				(state.playerPick == "Rock" && state.computerPick == "Paper") ||
				(state.playerPick == "Paper" && state.computerPick == "Scissors")
			) {
				return { Winner: "Computer" };
			} else {
				return { Winner: "Draw" };
			}
		}),
	setRestart: () => set({ playerPick: "", computerPick: "", Winner: "" }),
}));

export default useGameStore;

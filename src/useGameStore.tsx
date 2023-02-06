import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface GameState {
	score: number;
	gamePlaying: string;
	playerPick: string;
	computerPick: string;
	choicesOriginal: string[];
	choicesBonus: string[];
	Winner: string;
	setScoreZero: () => void;
	changeScore: (value: string) => void;
	setGamePlaying: (value: string) => void;
	setPlayerPick: (value: string) => void;
	setComputerPickOriginalRandom: () => void;
	setComputerPickBonusRandom: () => void;
	setWinner: () => void;
	setRestart: () => void;
}

const useGameStore = create<GameState>()(
	persist(
		(set) => ({
			score: 0,
			gamePlaying: "",
			playerPick: "",
			computerPick: "",
			choicesOriginal: ["Paper", "Scissors", "Rock"],
			choicesBonus: ["Paper", "Scissors", "Rock", "Lizard", "Spock"],
			Winner: "",
			setScoreZero: () => set({ score: 0 }),
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
			setGamePlaying: (value) => set({ gamePlaying: value }),
			setPlayerPick: (value) => set({ playerPick: value }),
			setComputerPickOriginalRandom: () =>
				set((state) => {
					let randomPick = Math.floor(Math.random() * state.choicesOriginal.length);
					return { computerPick: state.choicesOriginal[randomPick] };
				}),
			setComputerPickBonusRandom: () =>
				set((state) => {
					let randomPick = Math.floor(Math.random() * state.choicesBonus.length);
					return { computerPick: state.choicesBonus[randomPick] };
				}),
			setWinner: () =>
				set((state) => {
					if (
						(state.playerPick == "Rock" &&
							(state.computerPick == "Scissors" || state.computerPick == "Lizard")) ||
						(state.playerPick == "Paper" &&
							(state.computerPick == "Rock" || state.computerPick == "Spock")) ||
						(state.playerPick == "Scissors" &&
							(state.computerPick == "Paper" || state.computerPick == "Lizard")) ||
						(state.playerPick == "Lizard" &&
							(state.computerPick == "Spock" || state.computerPick == "Paper")) ||
						(state.playerPick == "Spock" &&
							(state.computerPick == "Scissors" || state.computerPick == "Rock"))
					) {
						return { Winner: "Player" };
					} else if (
						(state.playerPick == "Scissors" &&
							(state.computerPick == "Rock" || state.computerPick == "Spock")) ||
						(state.playerPick == "Rock" &&
							(state.computerPick == "Paper" || state.computerPick == "Spock")) ||
						(state.playerPick == "Paper" &&
							(state.computerPick == "Scissors" || state.computerPick == "Lizard")) ||
						(state.playerPick == "Lizard" &&
							(state.computerPick == "Rock" || state.computerPick == "Scissors")) ||
						(state.playerPick == "Spock" &&
							(state.computerPick == "Lizard" || state.computerPick == "Paper"))
					) {
						return { Winner: "Computer" };
					} else {
						return { Winner: "Draw" };
					}
				}),
			setRestart: () => set({ playerPick: "", computerPick: "", Winner: "" }),
		}),
		{
			name: "scoreStore",
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ score: state.score }),
		}
	)
);

export default useGameStore;

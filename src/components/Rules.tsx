import { useState } from "react";
import RulesOriginalImg from "../assets/images/image-rules.svg";
import RulesBonusImg from "../assets/images/image-rules-bonus.svg";
import CloseIcon from "../assets/images/icon-close.svg";
import useGameStore from "../useGameStore";

const Rules = () => {
	const gamePlaying = useGameStore((state) => state.gamePlaying);
	const [openRulesModal, setOpenRulesModal] = useState(false);

	return (
		<section className="">
			<button
				onClick={() => setOpenRulesModal(true)}
				className="text-HeaderOutline border-2 border-HeaderOutline text-lg py-2 px-6 rounded-lg tracking-widest uppercase hover:text-white hover:border-white">
				Rules
			</button>
			{openRulesModal && (
				<div className="inset-0 bg-gray-100 absolute flex flex-col justify-center items-center gap-10 min-h-full">
					<h1 className="fixed top-20 uppercase text-4xl">Rules</h1>
					{gamePlaying === "Original" ? (
						<img className="w-full max-w-sm" src={RulesOriginalImg} alt="" />
					) : gamePlaying === "Bonus" ? (
						<img className="w-full max-w-sm" src={RulesBonusImg} alt="" />
					) : (
						<div className="flex flex-col items-center justify-between gap-4 min-h-fit">
							<h1>Original</h1>
							<img className="w-1/2 object-contain max-w-sm" src={RulesOriginalImg} alt="" />
							<h1>Bonus</h1>
							<img className="w-1/2 object-contain max-w-sm" src={RulesBonusImg} alt="" />
						</div>
					)}
					<button className="fixed bottom-20 uppercase" onClick={() => setOpenRulesModal(false)}>
						<img className="w-8" src={CloseIcon} alt="Close Icon" />
					</button>
				</div>
			)}
		</section>
	);
};

export default Rules;

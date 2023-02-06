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
				className="text-HeaderOutline border-2 border-HeaderOutline text-lg py-2 px-6 rounded-lg tracking-widest uppercase hover:text-white hover:border-white lg:absolute lg:bottom-5 lg:right-5">
				Rules
			</button>
			{openRulesModal && (
				<div className="inset-0 bg-gray-100 absolute flex flex-col justify-center lg:gap-10 items-center gap-4 min-h-screen max-h-fit lg:bg-black lg:bg-opacity-50">
					<div className="lg:bg-white lg:p-6 rounded-lg flex flex-col lg:gap-6 gap-10 mt-5 max-w-sm md:max-w-none">
						<div className="w-full flex items-center lg:justify-between">
							<h1 className=" uppercase text-4xl mx-auto lg:ml-0">Rules</h1>
							<button className="hidden lg:block" onClick={() => setOpenRulesModal(false)}>
								<img className="w-8" src={CloseIcon} alt="Close Icon" />
							</button>
						</div>
						{gamePlaying === "Original" ? (
							<img className="w-full max-w-sm mt-6 px-6" src={RulesOriginalImg} alt="" />
						) : gamePlaying === "Bonus" ? (
							<img className="w-full max-w-sm px-6 lg:px-0 " src={RulesBonusImg} alt="" />
						) : (
							<div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-5">
								<div className="flex flex-col items-center gap-10">
									<h1>Original</h1>
									<img
										className="w-[50%] hover:w-[70%] md:w-[90%] md:hover:w-[90%] object-contain max-w-md"
										src={RulesOriginalImg}
										alt=""
									/>
								</div>
								<div className="flex flex-col items-center gap-5">
									<h1>Bonus</h1>
									<img
										className="w-[50%] hover:w-[70%] md:hover:w-[80%] md:w-[80%] object-contain max-w-md"
										src={RulesBonusImg}
										alt=""
									/>
								</div>
							</div>
						)}
					</div>
					<button className="lg:hidden" onClick={() => setOpenRulesModal(false)}>
						<img className="w-8 pb-10" src={CloseIcon} alt="Close Icon" />
					</button>
				</div>
			)}
		</section>
	);
};

export default Rules;

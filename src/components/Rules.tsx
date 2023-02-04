import { useState } from "react";
import RulesImg from "../assets/images/image-rules.svg";
import CloseIcon from "../assets/images/icon-close.svg";

const Rules = () => {
	const [openRulesModal, setOpenRulesModal] = useState(false);

	return (
		<section>
			<button
				onClick={() => setOpenRulesModal(true)}
				className="text-HeaderOutline border-2 border-HeaderOutline text-lg py-2 px-6 rounded-lg tracking-widest uppercase hover:text-white hover:border-white">
				Rules
			</button>
			{openRulesModal && (
				<div className="inset-0 bg-gray-100 absolute flex flex-col justify-center items-center gap-10">
					<h1 className="fixed top-20 uppercase text-4xl">Rules</h1>
					<img className="w-full max-w-sm" src={RulesImg} alt="" />
					<button className="fixed bottom-20 uppercase" onClick={() => setOpenRulesModal(false)}>
						<img className="w-8" src={CloseIcon} alt="Close Icon" />
					</button>
				</div>
			)}
		</section>
	);
};

export default Rules;

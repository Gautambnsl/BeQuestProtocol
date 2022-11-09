import CurrentFeature from "../../assests/Yacht-bro.svg";
import FuturePlan from "../../assests/Code-typing-bro.svg";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Plans() {
	const { ref, inView, entry } = useInView({
		threshold: 0.3,
	});

	const leftCardRef = useRef();
	const rightCardRef = useRef();

	useEffect(() => {
		if (inView) {
			leftCardRef.current.classList.add("left");
			rightCardRef.current.classList.add("right");
		}
	}, [inView]);

	return (
		<div className="plans" id="plans" ref={ref}>
			<div className="plans-card">
				<div className="plans-card__item left-item" ref={leftCardRef}>
					<img src={CurrentFeature} alt="" />

					<div className="plans-card__item-info">
						<h3 className="plans-card__item-info__head">Current Features!</h3>

						<ul className="plans-card__item-info__ul">
							<li className="plans-card__item-info__ul-li">
								compatible with all erc20 tokens like usdc, dai, wrapped coin,
								etc.
							</li>
							<li className="plans-card__item-info__ul-li">
								user can edit your legacy anytime.
							</li>
							<li className="plans-card__item-info__ul-li">
								support polygon chain. (testnet).
							</li>
							<li className="plans-card__item-info__ul-li">
								can attach video messages.
							</li>
							<li className="plans-card__item-info__ul-li">
								using chainlink oracle for automation.
							</li>
						</ul>
					</div>
				</div>

				<div className="plans-card__item" ref={rightCardRef}>
					<img src={FuturePlan} alt="" />

					<div className="plans-card__item-info">
						<h3 className="plans-card__item-info__head">Coming Features!</h3>

						<ul className="plans-card__item-info__ul">
							<li className="plans-card__item-info__ul-li">
								allowing multiple heirs inheritance.
							</li>
							<li className="plans-card__item-info__ul-li">
								compatible with all erc721 nfts like bored ape, cryptokitties,
								etc.
							</li>
							<li className="plans-card__item-info__ul-li">
								allowing user define percentage of token to be sent to each
								heir.
							</li>
							<li className="plans-card__item-info__ul-li">
								extra feature for control of potential crypto scam links and.
								emails.
							</li>
							<li className="plans-card__item-info__ul-li">
								launch bequest protocol token.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Plans;

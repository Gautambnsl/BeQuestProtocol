import CurrentFeature from "../../assests/Yacht-bro.svg";
import FuturePlan from "../../assests/Code-typing-bro.svg";

function Plans() {
	return (
		<div className="plans" id="plans">
			<div className="plans-card">
				<div className="plans-card__item">
					<img src={CurrentFeature} alt="" />
					<h3 className="plans-card__item-head">Current Features!</h3>

					<ul className="plans-card__item-ul">
						<li className="plans-card__item-ul__li">
							Accept All ERC20 Token like USDC, DAI, Wrapped Coin, etc.
						</li>
						<li className="plans-card__item-ul__li">
							Edit your Legacy even after Sign Legacy.
						</li>
						<li className="plans-card__item-ul__li">
							Sending notification before Token is about to transfer using EPNS
							(PUSH).
						</li>
						<li className="plans-card__item-ul__li">
							Work On Cronos, Polygon, Genesis Chain.
						</li>
						<li className="plans-card__item-ul__li">
							Hier with attaching with Video NFT using livepeer and message
							using Filecoin IPFS, minting bequest nft for nftPort.
						</li>
						<li className="plans-card__item-ul__li">
							Using Oracle for Automation Like Chainlink.
						</li>
					</ul>
				</div>

				<div className="plans-card__item">
					<img src={FuturePlan} alt="" />
					<h3 className="plans-card__item-head">Coming features </h3>

					<ul className="plans-card__item-ul">
						<li className="plans-card__item-ul__li">
							Allowing multiple heirs inheritance
						</li>
						<li className="plans-card__item-ul__li">
							Allowing inheritance of NFTs
						</li>
						<li className="plans-card__item-ul__li">
							Allowing user define percentage of token to be sent to each heir
						</li>
						<li className="plans-card__item-ul__li">
							Extra feature for control of potential crypto scam links and
							emails
						</li>
						<li className="plans-card__item-ul__li">Launch Bequest Token</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Plans;

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
						COMPATIBLE WITH ALL ERC20 TOKENS <br/> LIKE USDC, DAI, WRAPPED COIN, ETC.
						</li>
						<li className="plans-card__item-ul__li">
						USER CAN EDIT YOUR LEGACY ANYTIME.
						</li>
						<li className="plans-card__item-ul__li">
						SUPPORT POLYGON CHAIN. (TESTNET)
						</li>
						<li className="plans-card__item-ul__li">
						CAN ATTACH VIDEO MESSAGES.
						</li>
						<li className="plans-card__item-ul__li">
						USING CHAINLINK ORACLE FOR AUTOMATION
						</li>
					</ul>
				</div>

				<div className="plans-card__item">
					<img src={FuturePlan} alt="" />
					<h3 className="plans-card__item-head">Coming Features!</h3>

					<ul className="plans-card__item-ul">
						<li className="plans-card__item-ul__li">
						ALLOWING MULTIPLE HEIRS INHERITANCE.
						</li>
						<li className="plans-card__item-ul__li">
						COMPATIBLE WITH ALL ERC721 NFTS <br/> LIKE BORED APE, CRYPTOKITTIES, ETC.
						</li>
						<li className="plans-card__item-ul__li">
						ALLOWING USER DEFINE PERCENTAGE <br/> OF TOKEN TO BE SENT TO EACH HEIR
						</li>
						<li className="plans-card__item-ul__li">
						EXTRA FEATURE FOR CONTROL OF POTENTIAL <br/> CRYPTO SCAM LINKS AND.
							EMAILS
						</li>
						<li className="plans-card__item-ul__li">LAUNCH BEQUEST PROTOCOL TOKEN</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Plans;

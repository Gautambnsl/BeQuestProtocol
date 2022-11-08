import BeQuestLogo from "../../assests/final-logo.png";

function About() {
	return (
		<div className="about" id="about">
			<img src={BeQuestLogo} alt="BeQuest" />

			<div className="about-card">
				<div className="about-card-item">
					<h2 className="about-card-item__head">About BeQuest Protocol</h2>
					<div className="about-car-item__text">
						<p className="about-card-item__text-p">
							bequest came into existence with the purpose of protecting the
							digital assets from loss of private key or death.
						</p>

						<p className="about-card-item__text-p">
							the assets will always be in the owner's address and will be
							transfered to their heir according to their legacy or will.
						</p>
					</div>
				</div>
				<div className="about-card-item">
					<h2 className="about-card-item__head">
						Fully Decentralized : Web3 Solution
					</h2>

					<div className="about-car-item__text">
						<p className="about-card-item__text-p">
							user don't have to share their precious private key to anyone.
							just aprove asset and sign your legacy in bequest protocol's smart
							contract.
						</p>
						<p className="about-card-item__text-p">
							smart contract will execute your legacy request accordingly.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;

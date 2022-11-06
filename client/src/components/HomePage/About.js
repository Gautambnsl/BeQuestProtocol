import BeQuestLogo from "../../assests/final-logo.png";

function About() {
	return (
		<div className="about" id="about">
			<img src={BeQuestLogo} alt="BeQuest" />

			<div className="about-card">
				<div className="about-card-item">
					<h2 className="about-card-item__head">About BeQuest</h2>

					<p className="about-card-item__p">
						BeQuest came into existence with the purpose of protecting the
						digital assets. BeQuest helps the users to secure their digital
						assets like cryptocurrencies, NFTs etc. The assets will always be in
						the owner's address and will be transferred to their heir(s)
						according to their legacy or will.
					</p>

					<p className="about-card-item__p">
						You Can Die But Your Assets Can't, So why not BeQuest!
					</p>
				</div>
				<div className="about-card-item">
					<h2 className="about-card-item__head">
						Real Web3 Solution Of a Real Web3 Problem!
					</h2>

					<p className="about-card-item__p">
						IRL You have assets like Home. They can't get Lost Or even After a
						person dies they transfer to their next Gin Right? Yeah..! So why
						not the same with Digital Assets like Coin, Token, NFT Which even
						worth so much.
					</p>

					<p className="about-card-item__p">
						BeQuest Protocol is Perfect Solution for this.
					</p>
				</div>{" "}
			</div>
		</div>
	);
}

export default About;

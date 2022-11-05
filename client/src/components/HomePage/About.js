import Web3Img from "../../assests/Bitcoin-bro.svg";

function About() {
	return (
		<div className="about">
			<div className="about-img">
				<img src={Web3Img} alt="" />
			</div>

			<div className="about-text">
				<h1 className="about-text__head">Bequest your legacy now</h1>

				<p className="about-text__p">
					More than 20 Billion$ worth of Digital assets, Coins, Tokens , NFTs
					are already lost due to loss of private key or deaths.
				</p>

				<p className="about-text__p">
					BeQuest helps the users to secure their digital assets like
					cryptocurrencies, NFTs etc.
				</p>
			</div>
		</div>
	);
}

export default About;
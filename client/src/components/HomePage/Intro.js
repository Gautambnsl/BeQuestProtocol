import Web3Img from "../../assests/Bitcoin-bro.svg";
import { Link, useNavigate } from "react-router-dom";

function Intro() {
	const navigate = useNavigate();

	const handleWalletNavigate = () => {
		navigate("/wallet");
	};
	return (
		<div className="intro">
			<div className="intro-img">
				<img src={Web3Img} alt="" />
			</div>

			<div className="intro-text">
				<h1 className="intro-text__head">Bequest your legacy now</h1>

				<p className="intro-text__p">
					More than 20 Billion$ worth of Digital assets, Coins, Tokens , NFTs
					are already lost due to loss of private key or deaths.
				</p>

				<p className="intro-text__p">
					BeQuest helps the users to secure their digital assets like
					cryptocurrencies, NFTs etc.
				</p>

				<div className=" intro-text__launch">
					<button className="button" onClick={handleWalletNavigate}>
						<Link to="/wallet">Launch App</Link>
						<div className="wave"></div>
						<div className="wave"></div>
						<div className="wave"></div>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Intro;

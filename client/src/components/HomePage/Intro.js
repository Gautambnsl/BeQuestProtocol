import Web3Img from "../../assests/Bitcoin-bro.svg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Intro() {
	const navigate = useNavigate();

	const handleWalletNavigate = () => {
		navigate("/wallet");
	};
	return (
		<div className="intro">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8 }}
				className="intro-img"
			>
				<img src={Web3Img} alt="" />
			</motion.div>

			<motion.div
				initial={{ y: "30em" }}
				animate={{ y: 0 }}
				transition={{ duration: 0.8 }}
				className="intro-text"
			>
				<h1 className="intro-text__head bequest-gradient">
					Bequest your legacy now
				</h1>

				<p className="intro-text__p">
					More Than 20 Billion$ Worth Of Digital Assets, Coins, Tokens , Nfts
					Are Already Lost Due To Loss Of Private Key Or Deaths.
				</p>

				<p className="intro-text__p">
					Bequest Protocol Allow The Users To Bequest Their Digital Assets Like
					Wrapped Coin, Token, Nfts Etc, To Next Hier Or Inheritor.
				</p>

				<div className="intro-text__launch">
					<button className="button">
						<Link to="/wallet">Launch App</Link>
					</button>
				</div>
			</motion.div>
		</div>
	);
}

export default Intro;

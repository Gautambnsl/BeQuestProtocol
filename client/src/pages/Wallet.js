import BeQuestLogo from "../assests/final-logo.png";
import Metamask from "../assests/metamask.svg";
import WalletConnect from "../assests/walletconnect.svg";
import Ledger from "../assests/ledger.svg";
import { connectWallet } from "../backendConnectors/connectWallet";
import { useNavigate } from "react-router-dom";

function Wallet() {
	const navigate = useNavigate();

	async function redirctAfterConnect() {
		if (await connectWallet()) {
			navigate("/dashboard");
		}
	}

	return (
		<div className="wallet">
			<div className="wallet-logo">
				<img src={BeQuestLogo} alt="" />
			</div>

			<div className="wallet-collection">
				<h2 className="wallet-collection__head">Connect a Wallet</h2>

				<button
					onClick={redirctAfterConnect}
					className="wallet-collection__item"
				>
					<img src={Metamask} alt="" />

					<span className="wallet-collection__item-name">Metamask</span>
				</button>

				<button className="wallet-collection__item">
					<img src={WalletConnect} alt="" />

					<span className="wallet-collection__item-name">Wallet Connect</span>
				</button>

				<button className="wallet-collection__item">
					<img src={Ledger} alt="" />

					<span className="wallet-collection__item-name">Ledger</span>
				</button>
			</div>
		</div>
	);
}

export default Wallet;

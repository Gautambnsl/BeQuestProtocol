import BeQuestLogo from "../assests/final-logo.png";
import Metamask from "../assests/metamask.svg";
import WalletConnect from "../assests/walletconnect.svg";
import Ledger from "../assests/ledger.svg";
import { connectWallet } from "../backendConnectors/connectWallet";
import { useNavigate } from "react-router-dom";

function Wallet() {
	const navigate = useNavigate();

	async function redirctAfterConnect() {
		connectWallet().then((res) => {
			if (res.success) {
				navigate("/dashboard");
			} else {
				// error

				alert(res.msg);
			}
		});
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

					<span className="wallet-collection__item-name wallet-name">
						Metamask
					</span>
				</button>

				<button className="wallet-collection__item">
					<img src={WalletConnect} alt="" />

					<span className="wallet-collection__item-name">
						<span className="wallet-name">Wallet Connect</span>
						<span className="coming-soon pacifico">{" (Coming Soon)"}</span>
					</span>
				</button>

				<button className="wallet-collection__item">
					<img src={Ledger} alt="" />

					<span className="wallet-collection__item-name">
						<span className="wallet-name">Ledger</span>
						<span className="coming-soon pacifico">{" (Coming Soon)"}</span>
					</span>
				</button>
			</div>
		</div>
	);
}

export default Wallet;

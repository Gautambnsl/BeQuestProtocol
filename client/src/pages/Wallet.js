import BeQuestLogo from "../assests/final-logo.png";
import Metamask from "../assests/metamask.svg";
import WalletConnect from "../assests/walletconnect.svg";
import Ledger from "../assests/ledger.svg";
import { connectWallet } from "../backendConnectors/connectWallet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "../components/Error";

import Polygon from "../assests/polygon.png";
import Moonbeam from "../assests/moonbeam.png";
import Gnosis from "../assests/gnosis.png";
import Cronos from "../assests/cronos.svg";

function Wallet() {
	const navigate = useNavigate();
	const [err, setErr] = useState({
		state: false,
		message: "",
	});

	async function redirctAfterConnect() {
		connectWallet().then((res) => {
			if (res.success) {
				navigate("/dashboard");
			} else {
				// error
				setErr({
					state: true,
					message: res.msg,
				});

				setTimeout(() => {
					setErr({
						state: false,
						message: "",
					});
				}, 2000);
			}
		});
	}

	return (
		<div className="wallet">
			{err.state && <Error message={err.message} />}

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

					<span className="wallet-collection__item-name wallet-flex">
						<span className="wallet-name">Wallet Connect</span>
						<span className="coming-soon pacifico">{" (Coming Soon)"}</span>
					</span>
				</button>

				<button className="wallet-collection__item">
					<img src={Ledger} alt="" />

					<span className="wallet-collection__item-name wallet-flex">
						<span className="wallet-name">Ledger</span>
						<span className="coming-soon pacifico">{" (Coming Soon)"}</span>
					</span>
				</button>
			</div>

			<div className="wallet-chains">
				<h2 className="wallet-chains__head">Supported Chains</h2>

				<div className="wallet-chains__list">
					<img src={Polygon} alt="Polygon" />

					<img src={Moonbeam} alt="Moonbeam" />

					<img src={Gnosis} alt="Gnosis" />

					<img src={Cronos} alt="Cronos" />
				</div>
			</div>
		</div>
	);
}

export default Wallet;

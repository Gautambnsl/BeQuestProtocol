import BeQuestLogo from "../assests/final-logo.png";
import Metamask from "../assests/metamask.svg";
import WalletConnect from "../assests/walletconnect.svg";
import Ledger from "../assests/ledger.svg";
import { connectWallet } from "../backendConnectors/connectWallet";






function Wallet() {
	const navigate = useNavigate();

	async function redirctAfterConnect(){
		if(await connectWallet()){
			navigate("/dashboard")
		}
	}

	return (
		<div className="wallet">
			<div className="wallet-logo">
				<img src={BeQuestLogo} alt="" />
			</div>

			<div className="wallet-collection">
				<h2 className="wallet-collection__head">Connect a Wallet</h2>

				<button className="wallet-collection__item">
					<img src={Metamask} alt="" />

					<span onClick={connectWallet}>Metamask</span>
				</button>

				<button className="wallet-collection__item">
					<img src={WalletConnect} alt="" />

					<span>Wallet Connect</span>
				</button>

				<button className="wallet-collection__item">
					<img src={Ledger} alt="" />

					<span>Ledger</span>
				</button>
			</div>
		</div>
	);
}

export default Wallet;

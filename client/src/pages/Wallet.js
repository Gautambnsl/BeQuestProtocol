import logo from "../assests/logo.png";
import logoName from "../assests/logo-name.png";

function Wallet() {
	return (
		<>
			<div className="wallet-main">
				<div className="wallet-page">
					{/* logo  */}
					<div className="wallet-logo">
						<img src={logo} alt="logo" className="img1" />
						<img src={logoName} alt="logo-name" className="img2" />
					</div>
					{/* box  */}
					<div className="wallet-box">
						{/* heading  */}
						<h2>Connect a Wallet</h2>
						{/* button  */}
						<div className="wallet-box-button">
							<button className="wallet-button">
								<img
									src="https://staging.push.org/static/media/metamaskLight.70f9cda43b5f9a86438516ac24201151.svg"
									alt=""
								/>
								<span fontSize="18px" fontWeight="500" color="#000">
									Metamask
								</span>
							</button>
							<button className="wallet-button">
								<img
									src="https://staging.push.org/static/media/wcLight.dfa25e470b69d81428be54242b6c9bd1.svg"
									alt=""
								/>
								<span fontSize="20px" fontWeight="500" color="#000">
									Wallet&nbsp;Connect
								</span>
							</button>
							<button className="wallet-button">
								<img
									src="https://staging.push.org/static/media/ledgerLight.16518e873449c1c6389723223598199b.svg"
									alt=""
								/>
								<span fontSize="18px" fontWeight="500" color="#000">
									Ledger
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Wallet;

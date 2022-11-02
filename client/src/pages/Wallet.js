import logo from "../assests/logo.png";
import logoName from "../assests/logo-name.png";

function Wallet() {
	return (
		<>
			<div className="wallet-main">
				<div className="wallet-page">
					<div className="wallet-main-box"></div>
					<div className="wallet-main-box">
						<div className="wallet-logo">
							<img src={logo} alt="logo" width="80px" />
							<img src={logoName} alt="logo-name" />
						</div>
						<div className="wallet-box">
							<h2>Connect a Wallet</h2>
							<div className="wallet-box-button">
								<button className="wallet-button">
									<img
										src="https://staging.push.org/static/media/metamaskLight.70f9cda43b5f9a86438516ac24201151.svg"
										height="40px"
										width="50px"
									/>
									<span fontSize="18px" fontWeight="500" color="#000">
										Metamask
									</span>
								</button>
								<button className="wallet-button">
									<img
										src="https://staging.push.org/static/media/wcLight.dfa25e470b69d81428be54242b6c9bd1.svg"
										height="40px"
										width="50px"
									/>
									<span fontSize="18px" fontWeight="500" color="#000">
										Wallet&nbsp;Connect
									</span>
								</button>
								<button className="wallet-button">
									<img
										src="https://staging.push.org/static/media/ledgerLight.16518e873449c1c6389723223598199b.svg"
										height="40px"
										width="50px"
									/>
									<span fontSize="18px" fontWeight="500" color="#000">
										Ledger
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Wallet;

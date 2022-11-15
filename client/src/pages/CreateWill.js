import { useState, useEffect } from "react";
import Token from "../components/will/Token";
import CreateWillForm from "../components/will/CreateWillForm";
import { getAddress } from "../backendConnectors/integration";
import Loader from "../components/Loader";

function CreateWill() {
	const [userTokens, setUserTokens] = useState([]);
	const [tokenDetails, setTokenDetails] = useState({
		name: "",
		address: "",
		decimal: "",
	});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getAddress()
			.then((address) => {
				const userTokenEndpoint = `https://api.covalenthq.com/v1/${process.env.REACT_APP_CHAINID}/address/${address}/balances_v2/?&key=${process.env.REACT_APP_API_KEY}`;

				console.log(userTokenEndpoint);
				fetch(userTokenEndpoint)
					.then((res) => res.json())
					.then((tokenList) => {
						console.log(tokenList.data.items);
						setUserTokens(tokenList.data.items);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleClick = (name, address, decimal) => {
		setTokenDetails({
			name,
			address,
			decimal,
		});
	};

	const Tokens = userTokens.map((item, index) => {
		if (index !== 0)
			return (
				<Token
					key={item.contract_address}
					decimal={item.contract_decimals}
					name={item.contract_name}
					logo={item.logo_url}
					balance={item.balance}
					symbol={item.contract_ticker_symbol}
					contractAddress={item.contract_address}
					onClick={handleClick}
				/>
			);
	});

	return (
		<div className="create-will">
			{loading && <Loader />}

			<h3 className="create-will__toggle">My tokens</h3>

			<div className="create-will__token">
				{
					<div
						className={`create-will__token-list ${
							userTokens.length === 0 ? "flex" : ""
						}`}
					>
						<h3
							title="Click on any token to get its details"
							className={`${userTokens.length === 0 ? "none" : ""}`}
						>
							Select your token
						</h3>
						{userTokens.length === 0 ? (
							<p>You don't have any tokens.</p>
						) : (
							Tokens
						)}
					</div>
				}
				<div className="create-will__token-input">
					<h3 className="pacifico">Create your BeQuest request</h3>

					<CreateWillForm tokenDetails={tokenDetails} setLoading={setLoading} />
				</div>
			</div>
		</div>
	);
}

export default CreateWill;

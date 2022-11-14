import { useState, useEffect } from "react";
import Token from "../components/will/Token";
import CreateWillForm from "../components/will/CreateWillForm";

function CreateWill() {
	const [userTokens, setUserTokens] = useState([]);
	const [tokenDetails, setTokenDetails] = useState({
		name: "",
		address: "",
		decimal : "",
	});

	useEffect(() => {
		const userTokenEndpoint = `https://api.covalenthq.com/v1/${process.env.REACT_APP_CHAINID}/address/${process.env.REACT_APP_ADDRESS}/balances_v2/?&key=${process.env.REACT_APP_API_KEY}`;

		console.log(userTokenEndpoint);
		fetch(userTokenEndpoint)
			.then((res) => res.json())
			.then((tokenList) => {
				console.log(tokenList.data.items);
				setUserTokens(tokenList.data.items);
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

	console.log(tokenDetails);

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
			<h3 className="create-will__toggle">My tokens</h3>

			<div className="create-will__token">
				{
					<div
						className={`create-will__token-list ${
							userTokens.length === 0 ? "flex" : ""
						}`}
					>
						{userTokens.length === 0 ? (
							<p>You don't have any tokens.</p>
						) : (
							Tokens
						)}
					</div>
				}
				<div className="create-will__token-input token-input">
					<h3 className="pacifico token-input__head">
						Create your BeQuest request
					</h3>

					<CreateWillForm tokenDetails={tokenDetails} />
				</div>
			</div>
		</div>
	);
}

export default CreateWill;

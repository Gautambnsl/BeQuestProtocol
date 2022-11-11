	import { useState, useEffect } from "react";
import Token from "../components/will/Token";

function CreateWill() {
	const [userTokens, setUserTokens] = useState([]);
	const [showUserTokens, setShowUserTokens] = useState(true);

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

	const handleTokenToggle = () => {
		setShowUserTokens((prev) => !prev);
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
				/>
			);
	});

	return (
		<div className="create-will">
			<h3
				className={`create-will__toggle ${showUserTokens ? "show" : ""}`}
				onClick={handleTokenToggle}
			>
				My tokens
			</h3>

			<div className="create-will__token">
				{showUserTokens ? (
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
				) : (
					""
				)}
				<div className="create-will__token-input">
					adfadfs
					<form>
						<input type="text" name="tokenName" placeholder="Token Name" />
						<input
							type="text"
							name="contractAddress"
							placeholder="Contract Address"
						/>
						<input type="number" name="amount" placeholder="Number" />
						<input
							type="text"
							name="benificiaryAddress"
							placeholder="Benificiary Addresss"
						/>
						<input
							type="text"
							name="transferDate"
							placeholder="Transfer Date"
						/>
						<textarea
							name="anyMessage"
							rows="2"
							cols="25"
							placeholder="Message"
						></textarea>
						<button>click</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default CreateWill;

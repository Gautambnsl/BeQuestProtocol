import { useState, useEffect } from "react";
import Token from "../components/request/Token";
import CreateRequestForm from "../components/request/CreateRequestForm";
import { getAddress } from "../backendConnectors/integration";
import Loader from "../components/Loader";
import FetchingLoader from "../components/FetchingLoader";

function CreateRequest() {
	const [userTokens, setUserTokens] = useState([]);
	const [tokenDetails, setTokenDetails] = useState({
		name: "",
		address: "",
		decimal: "",
	});
	const [loading, setLoading] = useState(false);
	const [fetchLoading, setFetchingLoading] = useState(true);

	useEffect(() => {
		getAddress()
			.then((address) => {
				const userTokenEndpoint = `https://api.covalenthq.com/v1/${process.env.REACT_APP_CHAINID}/address/${address}/balances_v2/?&key=${process.env.REACT_APP_API_KEY}`;

				fetch(userTokenEndpoint)
					.then((res) => res.json())
					.then((tokenList) => {
						setFetchingLoading(false);
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
		if (item.contract_address !== "0x0000000000000000000000000000000000001010")
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
		<div className={`create-will ${loading ? "relative" : ""}`}>
			{loading && <Loader />}

			<h3 className="create-will__toggle">My tokens</h3>

			<div className="create-will__token">
				{
					<div
						className={`create-will__token-list ${
							userTokens.length === 0 ? "flex" : ""
						} ${fetchLoading ? "column" : ""}`}
					>
						<h3
							title="Click on any token to get its details"
							// className={`${userTokens.length === 1 ? "none" : ""}`}
						>
							Select your token
						</h3>

						{fetchLoading ? (
							<FetchingLoader />
						) : userTokens.length === 1 ? (
							<p>You don't have any tokens.</p>
						) : (
							Tokens
						)}
					</div>
				}
				<div className="create-will__token-input">
					<h3 className="pacifico">Create your BeQuest request</h3>

					<CreateRequestForm
						tokenDetails={tokenDetails}
						setLoading={setLoading}
					/>
				</div>
			</div>

			<a
				className="test-faucet"
				href="https://ismaventuras.github.io/ERC20-Faucet/"
				target="_blank"
			>
				Click here to get test faucet
			</a>
		</div>
	);
}

export default CreateRequest;

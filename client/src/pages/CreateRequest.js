import { useState, useEffect } from "react";
import Token from "../components/request/Token";
import CreateRequestForm from "../components/request/CreateRequestForm";
import { getAddress, getChainId } from "../backendConnectors/integration";
import Loader from "../components/Loader";
import FetchingLoader from "../components/FetchingLoader";
import Error from "../components/Error";

function CreateRequest() {
	const [userTokens, setUserTokens] = useState([]);
	const [tokenDetails, setTokenDetails] = useState({
		name: "",
		address: "",
		decimal: "",
	});
	const [loading, setLoading] = useState(false);
	const [fetchLoading, setFetchingLoading] = useState(true);
	const [metamaskDetails, setMetamaskDetails] = useState({
		chainId: "",
		address: "",
	});

	const [err, setErr] = useState({
		state: false,
		message: "",
	});

	useEffect(() => {
		getAddress()
			.then((address) => {
				getChainId()
					.then((chainId) => {
						const userTokenEndpoint = `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?&key=${process.env.REACT_APP_API_KEY}`;
						setMetamaskDetails({
							chainId,
							address,
						});

						fetch(userTokenEndpoint)
							.then((res) => res.json())
							.then((tokenList) => {
								if (tokenList.data) setUserTokens(tokenList.data.items);
								setFetchingLoading(false);
							});
					})
					.catch((err) => {
						console.log(err);
						setErr({
							state: true,
							message: "Can't fetch user token!",
						});

						setTimeout(() => {
							setErr({
								state: false,
								message: "",
							});
						}, 2000);

						setFetchingLoading(false);
					});
			})
			.catch((err) => {
				console.log(err);
				setErr({
					state: true,
					message: "Can't fetch user address!",
				});

				setTimeout(() => {
					setErr({
						state: false,
						message: "",
					});
				}, 2000);

				setFetchingLoading(false);
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
			{err.state && <Error message={err.message} />}

			{loading && <Loader />}

			<div className="create-will__token">
				<div className="create-will__token-list">
					<h3 className="create-will__head">My tokens</h3>

					<div
						className={`create-will__token-list__items ${
							userTokens.length <= 0 ? "flex" : ""
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
						) : userTokens.length <= 0 ? (
							<p>You don't have any tokens.</p>
						) : (
							Tokens
						)}
					</div>
				</div>

				<div className="create-will__token-form">
					<div className="metamask-details">
						<div>
							<h3 className="create-will__head">Chain Id:</h3>

							{metamaskDetails.chainId && <p>{metamaskDetails.chainId}</p>}
						</div>

						<div>
							<h3 className="create-will__head">Address:</h3>

							{metamaskDetails.address && (
								<p title={metamaskDetails.address}>
									{metamaskDetails.address.slice(0, 5) +
										"........" +
										metamaskDetails.address.slice(-5)}
								</p>
							)}
						</div>
					</div>

					<div className="create-will__token-form__input">
						<h3 className="pacifico">Create your BeQuest request</h3>

						<CreateRequestForm
							tokenDetails={tokenDetails}
							setLoading={setLoading}
						/>
					</div>
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

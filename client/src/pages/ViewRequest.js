import { useRef, useEffect, useState } from "react";
import RequestCard from "../components/request/RequestCard";
import { getView, getTime } from "../backendConnectors/integration";
import FetchingLoader from "../components/FetchingLoader";
import { ethers } from "ethers";

function ViewRequest() {
	const [willData, setWillData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getView().then((res) => {
			setLoading(false);
			setWillData(res);
		});
	}, []);

	const willCard = willData.map((card) => {
		let id = parseInt(card.id._hex);
		let amount = card.amt._hex.toString();

		let deadLine = parseInt(card.dedline._hex);
		deadLine = new Date(deadLine * 1000);

		let decimal = parseInt(card.decimal._hex);

		amount = ethers.utils.formatUnits(amount, decimal);

		return (
			<RequestCard
				key={id}
				id={id}
				tokenName={card.tokenName}
				amount={amount}
				timeOfExecution={deadLine.toString()}
				to={card.to}
				status={card.status}
			/>
		);
	});

	return (
		<div className={`view-will ${willCard.length > 0 ? "" : "center"}`}>
			{loading ? (
				<FetchingLoader />
			) : willCard.length > 0 ? (
				willCard
			) : (
				"No BeQuest request created till now!"
			)}
		</div>
	);
}

export default ViewRequest;

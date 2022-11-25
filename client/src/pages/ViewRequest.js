import { useRef, useEffect, useState } from "react";
import RequestCard from "../components/request/RequestCard";
import { getView, getTime } from "../backendConnectors/integration";

function ViewRequest() {
	const [willData, setWillData] = useState([]);

	useEffect(() => {
		getView().then((res) => {
			console.log(res);

			setWillData(res);
		});
	}, []);

	const willCard = willData.map((card) => {
		let id = parseInt(card.id._hex);
		let amount = parseInt(card.amt._hex);

		return (
			<RequestCard
				key={id}
				id={id}
				tokenName={card.tokenName}
				amount={amount}
				// timeRemaining={card.timeRemaining}
				to={card.to}
				status={card.status}
			/>
		);
	});

	return (
		<div className={`view-will ${willCard.length > 0 ? "" : "center"}`}>
			{willCard.length > 0 ? willCard : "No BeQuest request created till now!"}
		</div>
	);
}

export default ViewRequest;

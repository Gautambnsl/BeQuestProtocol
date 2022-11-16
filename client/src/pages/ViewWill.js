import { useRef, useEffect, useState } from "react";
import WillCard from "../components/will/WillCard";
import { getView, getTime } from "../backendConnectors/integration";

function ViewWill() {
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
			<WillCard
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

export default ViewWill;

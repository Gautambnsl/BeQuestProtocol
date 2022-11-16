import { useRef, useEffect, useState } from "react";
import WillCard from "../components/will/WillCard";
import { getView, getTime } from "../backendConnectors/integration";

function ViewWill() {
	const [willData, setWillData] = useState([]);
	const [timeRemaining, setTimeRemaining] = useState(() => {});

	useEffect(() => {
		getView().then((res) => {
			console.log(res);

			setWillData(res);
		});
	}, []);

	const willCard = willData.map(async (card) => {
		const time = await getTime(parseInt(card.id._hex));
		console.log(time);
		return (
			<WillCard
				key={card.id._hex.toString()}
				id={card.id._hex.toString()}
				tokenName={card.tokenName}
				amount={card.amt._hex.toString()}
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

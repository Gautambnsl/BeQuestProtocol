import { useRef, useEffect, useState } from "react";
import BeneficiaryCard from "../components/request/BeneficiaryCard";
import { getBenificary } from "../backendConnectors/integration";

function Beneficiary() {
	const [beneficiaryData, setBeneficiaryData] = useState([]);

	useEffect(() => {
		getBenificary().then((res) => {
			console.log(res);

			setBeneficiaryData(res);
		});
	}, []);

	const beneficiaryCard = beneficiaryData.map((card) => {
		let id = parseInt(card.id._hex);
		let amount = parseInt(card.amt._hex);
		return (
			<BeneficiaryCard
				key={id}
				id={id}
				tokenName={card.tokenName}
				amount={amount}
				from={card.from}
				// timeRemaining={card.timeRemaining}
				status={card.status}
				message={card.message}
				video={card.video}
			/>
		);
	});

	return (
		<div
			className={`beneficiary ${beneficiaryCard.length > 0 ? "" : "center"}`}
		>
			{beneficiaryCard.length > 0
				? beneficiaryCard
				: "No BeQuest request created till now!"}
		</div>
	);
}

export default Beneficiary;

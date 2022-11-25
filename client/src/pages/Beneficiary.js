import { useRef, useEffect, useState } from "react";
import BeneficiaryCard from "../components/request/BeneficiaryCard";
import { getBenificary } from "../backendConnectors/integration";
import FetchingLoader from "../components/FetchingLoader";

function Beneficiary() {
	const [beneficiaryData, setBeneficiaryData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getBenificary().then((res) => {
			setLoading(false);
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
			{loading ? (
				<FetchingLoader />
			) : beneficiaryCard.length > 0 ? (
				beneficiaryCard
			) : (
				"No one added you as a Beneficiary yet :("
			)}
		</div>
	);
}

export default Beneficiary;

import { useRef, useEffect, useState } from "react";
import WillCard from "../components/will/WillCard";
import { getView } from "../backendConnectors/integration";

function ViewWill() {
	useEffect(() => {
		getView();
	}, []);

	const tempDataRef = useRef([
		{
			id: "dsfa112",
			tokenName: "DygnifyXadafasdfasf",
			amt: "3200",
			to: "0x2b5d1C88d09fd2Fd45500b6ADB7870F08A5dECd2",
			timeRemaining: "3000",
			status: "0",
		},
		{
			id: "dsfa113",
			tokenName: "DygnifyX",
			amt: "3200",
			to: "0x2b5d1C88d09fd2Fd45500b6ADB7870F08A5dECd2",
			timeRemaining: "3000",
			status: "1",
		},
		{
			id: "dsfa114",
			tokenName: "DygnifyX",
			amt: "3200",
			to: "0x2b5d1C88d09fd2Fd45500b6ADB7870F08A5dECd2",
			timeRemaining: "3000",
			status: "2",
		},
		{
			id: "dsfa115",
			tokenName: "DygnifyX",
			amt: "3200",
			to: "0x2b5d1C88d09fd2Fd45500b6ADB7870F08A5dECd2",
			timeRemaining: "3000",
			status: "3",
		},
	]);

	const willCard = tempDataRef.current.map((card) => {
		return (
			<WillCard
				key={card.id}
				id={card.id}
				tokenName={card.tokenName}
				amount={card.amt}
				to={card.to}
				timeRemaining={card.timeRemaining}
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

import { useRef } from "react";
import WillCard from "../components/will/WillCard";

function ViewWill() {
	const tempDataRef = useRef([
		{
			id: "dsfa112",
			tokenName: "DygnifyXadafasdfasf",
			amount: "3200",
			to: "0x2b5d1C88d09fd2Fd45500b6ADB7870F08A5dECd2",
			time: "3000",
			status: "0",
		},
		{
			id: "dsfa113",
			tokenName: "DygnifyX",
			amount: "3200",
			to: "0x2b5d1C88d09fd2Fd45500b6ADB7870F08A5dECd2",
			time: "3000",
			status: "1",
		},
		{
			id: "dsfa114",
			tokenName: "DygnifyX",
			amount: "3200",
			to: "0x2b5d1C88d09fd2Fd45500b6ADB7870F08A5dECd2",
			time: "3000",
			status: "2",
		},
		{
			id: "dsfa115",
			tokenName: "DygnifyX",
			amount: "3200",
			to: "0x2b5d1C88d09fd2Fd45500b6ADB7870F08A5dECd2",
			time: "3000",
			status: "3",
		},
	]);

	const willCard = tempDataRef.current.map((card) => {
		return (
			<WillCard
				key={card.id}
				id={card.id}
				tokenName={card.tokenName}
				amount={card.amount}
				to={card.to}
				time={card.time}
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

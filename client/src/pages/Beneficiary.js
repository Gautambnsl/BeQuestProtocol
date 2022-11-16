import { useRef, useEffect, useState } from "react";
import BeneficiaryCard from "../components/will/BeneficiaryCard";

function Beneficiary() {
	const tempDataRef = useRef([
		{
			id: "dsfa112",
			tokenName: "DygnifyXadafasdfasf",
			amt: "3200",
			from: "0x2b5d1C88d09fd2Fd45500b6ADB7870F08A5dECd2",
			timeRemaining: "3000",
			status: "0",
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in neque nec sapien lobortis posuere eu quis orci. Pellentesque feugiat sed urna ut commodo. Phasellus malesuada mattis congue. Nullam quis condimentum odio. Proin placerat felis hendrerit pharetra mattis. Donec vel purus nec elit facilisis varius fringilla eu mauris.",
			video: "https://www.google.com",
		},
		{
			id: "dsfa113",
			tokenName: "DygnifyX",
			amt: "3200",
			from: "0x2b5d1C88d09fd2Fd45500b6ADB7870F08A5dECd2",
			timeRemaining: "3000",
			status: "1",
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in neque nec sapien lobortis posuere eu quis orci. Pellentesque feugiat sed urna ut commodo. Phasellus malesuada mattis congue. Nullam quis condimentum odio. Proin placerat felis hendrerit pharetra mattis. Donec vel purus nec elit facilisis varius fringilla eu mauris.",
			video: "https://www.google.com",
		},
		{
			id: "dsfa114",
			tokenName: "DygnifyX",
			amt: "3200",
			from: "0x2b5d1C88d09fd2Fd45500b6ADB7870F08A5dECd2",
			timeRemaining: "3000",
			status: "2",
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in neque nec sapien lobortis posuere eu quis orci. Pellentesque feugiat sed urna ut commodo. Phasellus malesuada mattis congue. Nullam quis condimentum odio. Proin placerat felis hendrerit pharetra mattis. Donec vel purus nec elit facilisis varius fringilla eu mauris.",
			video: "https://www.google.com",
		},
		{
			id: "dsfa115",
			tokenName: "DygnifyX",
			amt: "3200",
			from: "0x2b5d1C88d09fd2Fd45500b6ADB7870F08A5dECd2",
			timeRemaining: "3000",
			status: "3",
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in neque nec sapien lobortis posuere eu quis orci. Pellentesque feugiat sed urna ut commodo. Phasellus malesuada mattis congue. Nullam quis condimentum odio. Proin placerat felis hendrerit pharetra mattis. Donec vel purus nec elit facilisis varius fringilla eu mauris.",
			video: "https://www.google.com",
		},
	]);

	const beneficiaryCard = tempDataRef.current.map((card) => {
		return (
			<BeneficiaryCard
				key={card.id}
				id={card.id}
				tokenName={card.tokenName}
				amount={card.amt}
				from={card.from}
				timeRemaining={card.timeRemaining}
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

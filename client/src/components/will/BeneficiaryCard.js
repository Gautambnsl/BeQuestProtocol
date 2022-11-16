import { useEffect, useState } from "react";

function BeneficiaryCard({
	id,
	tokenName,
	amount,
	from,
	timeRemaining,
	status,
	message,
	video,
}) {
	const [statusText, setStatusText] = useState("");
	const [buttonActive, setButtonActive] = useState(true);

	useEffect(() => {
		let tempStatusText;
		let tempButtonActive;

		if (status === "0") {
			tempStatusText = "Active";

			tempButtonActive = true;
		} else if (status === "1") {
			tempStatusText = "Inactive";

			tempButtonActive = false;
		} else if (status === "2") {
			tempStatusText = "Success";

			tempButtonActive = false;
		} else if (status === "3") {
			tempStatusText = "Failed";

			tempButtonActive = false;
		}

		setStatusText(tempStatusText);
		setButtonActive(tempButtonActive);
	}, []);

	return (
		<div className="card">
			<div className="card-item">
				<h2>{"BQ" + id}</h2>
			</div>

			<div className="card-item">
				<h3 className="card-item__head">Token Name</h3>

				<p className="card-item__value">{tokenName}</p>
			</div>

			<div className="card-item">
				<h3 className="card-item__head">Amount</h3>

				<p className="card-item__value">{amount}</p>
			</div>

			<div className="card-item">
				<h3 className="card-item__head">From</h3>

				<p className="card-item__value" title={from}>
					{from.slice(0, 25) + "..."}
				</p>
			</div>

			<div className="card-item">
				<h3 className="card-item__head">Time Remaning</h3>

				<p className="card-item__value">{timeRemaining}</p>
			</div>

			<div className="card-item">
				<h3 className="card-item__head">Status</h3>

				<p className={`card-item__value ${statusText}`}>{statusText}</p>
			</div>

			<div className="card-item message">
				<h3 className="card-item__head">Message</h3>

				<p className="card-item__value">{message}</p>
			</div>

			{video && (
				<div className="card-item">
					<h3 className="card-item__head">Video Link</h3>

					<a
						className="card-item__value"
						href={`https://w3s.link/ipfs/${video}`}
						target="_blank"
					>
						Watch here
					</a>
				</div>
			)}

			<span>*Amount is in decimal</span>
		</div>
	);
}

export default BeneficiaryCard;

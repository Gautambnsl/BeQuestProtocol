import { useEffect, useState } from "react";

function BeneficiaryCard({
	id,
	tokenName,
	amount,
	from,
	timeOfExecution,
	time: willTime,
	status,
	message,
	video,
}) {
	const [statusText, setStatusText] = useState("");
	const [isExecutable, setIsExecutable] = useState(false);
	const [executionTime, setExecutionTime] = useState();

	useEffect(() => {
		let tempStatusText;
		let tempIsExecutable;

		let tempExecutionTime = timeOfExecution.split(" ");
		let displayDate = "";

		console.log(willTime);
		let currTime = new Date();

		for (let i = 1; i < 5; i++) {
			displayDate += tempExecutionTime[i] + " ";
		}

		if (status == "0") {
			tempStatusText = "Active";

			tempExecutionTime = displayDate;

			if (currTime > willTime) {
				tempIsExecutable = true;
			} else {
				tempIsExecutable = false;
			}
		} else if (status == "1") {
			tempStatusText = "Inactive";

			tempExecutionTime = "Paused";

			tempIsExecutable = false;
		} else if (status == "2") {
			tempStatusText = "Success";

			tempExecutionTime = "Executed (" + displayDate + ")";

			tempIsExecutable = false;
		} else if (status == "3") {
			tempStatusText = "Failed";

			tempExecutionTime = "Failed";

			tempIsExecutable = false;
		}

		setStatusText(tempStatusText);
		setExecutionTime(tempExecutionTime);
		setIsExecutable(tempIsExecutable);
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
				<h3 className="card-item__head">Execution Time</h3>

				<p className="card-item__value">{executionTime}</p>
			</div>

			<div className="card-item">
				<h3 className="card-item__head">Status</h3>

				<p className={`card-item__value ${statusText}`}>{statusText}</p>
			</div>

			<div className="card-item message">
				<h3 className="card-item__head">Message:</h3>

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
						Click here to watch!
					</a>
				</div>
			)}

			<div className="card-item card-button">
				<button className="card-button__change" disabled={!isExecutable}>
					Click to execute
				</button>
			</div>

			<span>*Amount is in decimal</span>
		</div>
	);
}

export default BeneficiaryCard;

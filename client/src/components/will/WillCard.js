import { useEffect, useState } from "react";
import * as yup from "yup";
import { changeTime } from "../../backendConnectors/integration";

let schema = yup.object().shape({
	time: yup
		.number()
		.typeError("Invalid time!")
		.required("Transfer time can't be empty!")
		.positive("Transfer time can't be in past!")
		.integer("Transfer time should only be integer!"),
});

function WillCard({ id, tokenName, amount, timeRemaining, to, status }) {
	const [statusText, setStatusText] = useState("");
	const [buttonActive, setButtonActive] = useState(true);

	useEffect(() => {
		let tempStatusText;
		let tempButtonActive;

		if (status == "0") {
			tempStatusText = "Active";

			tempButtonActive = true;
		} else if (status == "1") {
			tempStatusText = "Inactive";

			tempButtonActive = false;
		} else if (status == "2") {
			tempStatusText = "Success";

			tempButtonActive = false;
		} else if (status == "3") {
			tempStatusText = "Failed";

			tempButtonActive = false;
		}

		setStatusText(tempStatusText);
		setButtonActive(tempButtonActive);
	}, []);

	const handleChangeTime = () => {
		const time = window.prompt("Enter time in days", "5");

		schema.isValid({ time }).then(async (valid) => {
			if (valid) {
				await changeTime(id, time);
			} else {
				alert("Wrong time inputted");
			}
		});
	};

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
				<h3 className="card-item__head">To</h3>

				<p className="card-item__value" title={to}>
					{to.slice(0, 25) + "..."}
				</p>
			</div>

			{timeRemaining && (
				<div className="card-item">
					<h3 className="card-item__head">Time Remaning</h3>

					<p className="card-item__value">{timeRemaining}</p>
				</div>
			)}

			<div className="card-item">
				<h3 className="card-item__head">Status</h3>

				<p className={`card-item__value ${statusText}`}>{statusText}</p>
			</div>

			{/* <div className="card-item card-button">
				<button
					className="card-button__change"
					disabled={!buttonActive}
					onClick={handleChangeTime}
				>
					Change Time
				</button>

				<button
					className={`card-button__stop ${statusText}`}
					disabled={statusText === "Inactive" ? false : !buttonActive}
				>
					{statusText === "Inactive" ? "Resume" : "Stop"}
				</button>
			</div> */}

			<span>*Amount is in decimal</span>
		</div>
	);
}

export default WillCard;

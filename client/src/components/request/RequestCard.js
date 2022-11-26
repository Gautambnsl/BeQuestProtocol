import { useEffect, useState } from "react";
import * as yup from "yup";
import { changeTime } from "../../backendConnectors/integration";
import { stop, resume } from "../../backendConnectors/integration";

let schema = yup.object().shape({
	time: yup
		.number()
		.typeError("Invalid time!")
		.required("Transfer time can't be empty!")
		.positive("Transfer time can't be in past!")
		.integer("Transfer time should only be integer!"),
});

function RequestCard({ id, tokenName, amount, timeOfExecution, to, status }) {
	const [statusText, setStatusText] = useState("");
	const [buttonActive, setButtonActive] = useState(true);
	const [executionTime, setExecutionTime] = useState();

	useEffect(() => {
		let tempStatusText;
		let tempButtonActive;

		let tempExecutionTime = timeOfExecution.split(" ");
		let displayDate = "";

		for (let i = 1; i < 5; i++) {
			displayDate += tempExecutionTime[i] + " ";
		}

		if (status == "0") {
			tempStatusText = "Active";

			tempButtonActive = true;

			tempExecutionTime = displayDate;
		} else if (status == "1") {
			tempStatusText = "Inactive";

			tempButtonActive = false;

			tempExecutionTime = "Paused";
		} else if (status == "2") {
			tempStatusText = "Success";

			tempButtonActive = false;

			tempExecutionTime = "Executed (" + displayDate + ")";
		} else if (status == "3") {
			tempStatusText = "Failed";

			tempButtonActive = false;

			tempExecutionTime = "Failed";
		}

		setStatusText(tempStatusText);
		setButtonActive(tempButtonActive);
		setExecutionTime(tempExecutionTime);
	}, []);

	const handleChangeTime = () => {
		const time = window.prompt("Change time from current time", "5");

		schema
			.validate({ time }, { abortEarly: false })
			.then(async (time) => {
				await changeTime(id, time);
				window.location.reload();
			})
			.catch((err) => {
				alert(err.errors[0]);
			});
	};

	const handleRequestState = async () => {
		if (status == "0") {
			await stop(id);
		}

		if (status == "1") {
			await resume(id);
		}

		window.location.reload();
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

			{timeOfExecution && (
				<div className="card-item">
					<h3 className="card-item__head">Execution time</h3>

					<p className="card-item__value bold">{executionTime}</p>
				</div>
			)}

			<div className="card-item">
				<h3 className="card-item__head">Status</h3>

				<p className={`card-item__value ${statusText}`}>{statusText}</p>
			</div>

			<div className="card-item card-button">
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
					onClick={handleRequestState}
				>
					{statusText === "Inactive" ? "Resume" : "Stop"}
				</button>
			</div>

			<span>*Amount is in decimal</span>
		</div>
	);
}

export default RequestCard;

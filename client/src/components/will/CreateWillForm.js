import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createWillSchema from "../../formValidations/createWillSchema";
import Input from "./Input";
import { useEffect, useState } from "react";
import {
	approveRequest,
	signRequest,
} from "../../backendConnectors/integration";

function CreateWillForm({ tokenDetails, setLoading }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
	} = useForm({ resolver: yupResolver(createWillSchema) });

	const [enableSubmit, setEnableSubmit] = useState(false);

	useEffect(() => {
		if (tokenDetails.name && tokenDetails.address) {
			setValue("tokenName", tokenDetails.name);
			setValue("contractAddress", tokenDetails.address);
		}
	}, [tokenDetails]);

	const createWill = (willInfo, event) => {
		event.preventDefault();
		console.log(willInfo);

		setLoading(true);
		if (!enableSubmit) {
			approve(willInfo);
		} else {
			sign(willInfo);
		}
	};

	const approve = async (willInfo) => {
		const status = await approveRequest(
			willInfo.contractAddress,
			willInfo.amount * 10 ** tokenDetails.decimal
		);

		setLoading(false);
		if (status.status) {
			setEnableSubmit(true);
		} else {
			// error handling
		}
	};

	const sign = async (willInfo) => {
		const time = willInfo.timeUnit * willInfo.transferTime;
		const status = await signRequest(
			willInfo.tokenName,
			time,
			willInfo.amount * 10 ** tokenDetails.decimal,
			willInfo.benificaryAddress,
			willInfo.contractAddress,
			willInfo.message
		);

		setLoading(false);
		if (status.status) {
			reset();
			setEnableSubmit(false);
		} else {
			// error handling
		}
	};

	return (
		<form onSubmit={handleSubmit(createWill)} className="input-form">
			<Input
				label={"Token Name"}
				type="text"
				error={errors.tokenName}
				register={register}
				name={"tokenName"}
			/>

			<Input
				label={"Token Contract Address"}
				type="text"
				error={errors.contractAddress}
				register={register}
				name={"contractAddress"}
			/>

			<Input
				label={"Token Amount"}
				type="text"
				error={errors.amount}
				register={register}
				name={"amount"}
			/>

			<Input
				label={"Benificary Address"}
				type="text"
				error={errors.benificaryAddress}
				register={register}
				name={"benificaryAddress"}
			/>

			<div className="input-form__item input-time">
				<div className="input-time__select">
					<label htmlFor="timeUnit">Time Unit</label>
					<select id="timeUnit" {...register("timeUnit")}>
						<option value="1">Seconds</option>
						<option value="60">Minutes</option>
						<option value="3600">Hours</option>
						<option value="86400">Days</option>
					</select>
				</div>

				<Input
					label={"Transfer Time"}
					type="text"
					error={errors.transferTime}
					register={register}
					name={"transferTime"}
				/>
			</div>

			<div className="input-form__item">
				<textarea id="message" {...register("message")} required></textarea>
				<label htmlFor="message">Message</label>
			</div>

			<div className="input-form__button">
				<button
					className={`${!enableSubmit ? "" : "disable"}`}
					disabled={!enableSubmit ? false : true}
				>
					{" "}
					Approve
				</button>
				<button
					className={`${enableSubmit ? "" : "disable"}`}
					disabled={enableSubmit ? false : true}
				>
					Sign
				</button>
			</div>
		</form>
	);
}

export default CreateWillForm;

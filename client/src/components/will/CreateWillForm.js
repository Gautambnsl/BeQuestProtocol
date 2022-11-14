import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createWillSchema from "../../formValidations/createWillSchema";
import Input from "./Input";
import { useEffect, useState } from "react";
import { approve } from "../../backendConnectors/integration";
function CreateWillForm({ tokenDetails }) {
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
		approve(willInfo.amount * tokenDetails.decimal )

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

			<Input
				label={"Transfer Time"}
				type="date"
				error={errors.transferDate}
				register={register}
				name={"transferDate"}
			/>

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

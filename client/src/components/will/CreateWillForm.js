import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createWillSchema from "../../formValidations/createWillSchema";
import Input from "./Input";
import { useEffect, useState, useRef } from "react";
import {
	approveRequest,
	signRequest,
	storeFiles,
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
	const [videoStatus, setVideoStatus] = useState({
		status: true,
		file: "",
	});
	const [videoErr, setVideoErr] = useState("");
	const videoRef = useRef();
	const videoCidRef = useRef("");

	useEffect(() => {
		if (tokenDetails.name && tokenDetails.address) {
			setValue("tokenName", tokenDetails.name);
			setValue("contractAddress", tokenDetails.address);
		}
	}, [tokenDetails]);

	const createWill = async (willInfo, event) => {
		event.preventDefault();
		if (videoStatus.status && videoStatus.file === "") {
			setVideoErr("Upload video message!");
			return;
		} else {
			setVideoErr("");
		}

		setLoading(true);
		if (!enableSubmit) {
			approve(willInfo);
		} else {
			const cid = await storeFiles(videoStatus.file);

			if (cid.success) {
				console.log(cid.cid);
				videoCidRef.current = cid.cid;
			}
			sign(willInfo);
		}
	};

	const approve = async (willInfo) => {
		let amt = willInfo.amount;
		amt = amt.toString();
		for (let x = 0; x < tokenDetails.decimal; x++) {
			amt = amt + "0";
		}

		const status = await approveRequest(willInfo.contractAddress, amt);

		setLoading(false);
		if (status.status) {
			setEnableSubmit(true);
		} else {
			// error handling
		}
	};

	const sign = async (willInfo) => {
		alert("sign");
		let amt = willInfo.amount;
		amt = amt.toString();
		for (let x = 0; x < tokenDetails.decimal; x++) {
			amt = amt + "0";
		}

		const time = willInfo.timeUnit * willInfo.transferTime;

		const status = await signRequest(
			willInfo.tokenName,
			time,
			amt,
			willInfo.benificaryAddress,
			willInfo.contractAddress,
			willInfo.message,
			videoCidRef.current
		);

		setLoading(false);
		if (status.status) {
			setVideoStatus({
				status: false,
				file: "",
			});
			reset();
			setEnableSubmit(false);
		} else {
			// error handling
		}
	};

	const handleVideoStatus = (e) => {
		let falseStatus = {
			status: false,
			file: "",
		};

		if (e.target.checked) {
			setVideoStatus((prev) => {
				return { ...prev, status: e.target.checked };
			});
		} else {
			setVideoStatus(falseStatus);
		}
	};

	const handleChange = (e) => {
		let fileName = e.target.files[0].name;
		const fileExtension = fileName.indexOf(".");

		if (fileName.length > 12)
			fileName =
				fileName.slice(0, 12) + " ... " + fileName.slice(fileExtension);

		videoRef.current.classList.remove("file-upload");
		videoRef.current.innerHTML = fileName;

		setVideoStatus((prev) => {
			return { ...prev, file: e.target.files };
		});
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

			<div className="input-form__item input-group">
				<div className="input-group__select">
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

			<div className="input-form__item input-group video-message">
				<div className="input-group__checkbox">
					<input
						type="checkbox"
						id="videoMessage"
						checked={videoStatus?.status}
						onChange={handleVideoStatus}
					/>
					<label htmlFor="videoMessage">Select to upload Video Message</label>
				</div>

				{videoStatus.status && (
					<div className="input-group__file">
						<label htmlFor="uploadVideo" ref={videoRef} className="file-upload">
							Upload
						</label>
						<input
							id="uploadVideo"
							type="file"
							accept="video/mp4,video/x-m4v,video/*"
							onChange={handleChange}
						/>
						{videoErr.length > 0 && <p className="error">{videoErr}</p>}
					</div>
				)}
			</div>

			<div className="input-form__button">
				<button
					className={`${!enableSubmit ? "" : "disable"}`}
					disabled={!enableSubmit ? false : true}
				>
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

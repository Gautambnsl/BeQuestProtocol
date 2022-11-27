import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createWillSchema from "../../formValidations/createRequestSchema";
import Input from "./Input";
import { useEffect, useState, useRef } from "react";
import {
	approveRequest,
	signRequest,
	storeFiles,
} from "../../backendConnectors/integration";
import { ethers } from "ethers";

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
		status: false,
		file: "",
	});
	const [videoErr, setVideoErr] = useState("");
	const videoRef = useRef();
	const videoCidRef = useRef("");

	useEffect(() => {
		if (tokenDetails.name && tokenDetails.address) {
			setValue("tokenName", tokenDetails.name);
			setValue("contractAddress", tokenDetails.address);
			setValue("decimal", tokenDetails.decimal);
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
		try {
			let amt = ethers.utils.parseUnits(
				willInfo.amount.toString(),
				willInfo.decimal
			);
			const status = await approveRequest(willInfo.contractAddress, amt);

			if (status.status) {
				setEnableSubmit(true);
			} else {
				// error handling
				console.log(status);
				let msg = status.msg.split("(");

				alert(msg[0]);
			}
		} catch (err) {
			alert("Token amount exceded the limit!");
		} finally {
			setLoading(false);
		}
	};

	const sign = async (willInfo) => {
		try {
			let amt = ethers.utils.parseUnits(
				willInfo.amount.toString(),
				willInfo.decimal
			);
			const time = willInfo.timeUnit * willInfo.transferTime;

			const status = await signRequest(
				willInfo.tokenName,
				time,
				amt,
				willInfo.decimal,
				willInfo.benificaryAddress,
				willInfo.contractAddress,
				willInfo.message,
				videoCidRef.current
			);

			if (status.status) {
				setVideoStatus({
					status: false,
					file: "",
				});
				reset();
				setEnableSubmit(false);
			} else {
				// error handling
				alert(status.msg);
			}
		} catch (err) {
			console.log(err);
			alert(err);
		} finally {
			setLoading(false);
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

		if (e.target.files[0]) {
			setVideoErr("");
		}

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
				label={"Token Decimal"}
				type="text"
				error={errors.decimal}
				register={register}
				name={"decimal"}
			/>

			<Input
				label={"Token Amount"}
				type="text"
				error={errors.amount}
				register={register}
				name={"amount"}
			/>

			<Input
				label={"Benificary Address or ENS"}
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
					label={"Execute After"}
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

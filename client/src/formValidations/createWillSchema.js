import * as yup from "yup";
import { ethers } from "ethers";

function addressValidation(value) {
	return ethers.utils.isAddress(value);
}

// current date
const today = new Date();
today.setHours(0, 0, 0, 0);

const createWillSchema = yup.object().shape({
	tokenName: yup
		.string("Invalid token name!")
		.required("Token name can't be empty!"),
	contractAddress: yup
		.string("Invalid contract address!")
		.required("Contract address can't be empty!")
		.test("address-test", "Invalid contract address!", addressValidation),
	amount: yup
		.number()
		.typeError("Invalid token amount!")
		.required("Token amount can't be empty!")
		.positive("Token amount should be greater than 0!"),
	benificaryAddress: yup
		.string("Invalid benificary address!")
		.required("Benificary address can't be empty!")
		.test("address-test", "Invalid benificary address!", addressValidation),
	transferDate: yup
		.date()
		.typeError("Invalid date!")
		.required("Transfer date can't be empty!")
		.min(today, "Transfer date cannot be in the past!"),
	message: yup.string("Invalid message"),
});

export default createWillSchema;
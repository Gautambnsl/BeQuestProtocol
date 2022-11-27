import * as yup from "yup";
import { ethers } from "ethers";

function addressValidation(value) {
	return ethers.utils.isAddress(value);
}

// current date
// const today = new Date();
// today.setHours(0, 0, 0, 0);

const createWillSchema = yup.object().shape({
	tokenName: yup
		.string("Invalid token name!")
		.required("Token name can't be empty!"),
	contractAddress: yup
		.string("Invalid contract address!")
		.required("Contract address can't be empty!")
		.test("address-test", "Invalid contract address!", addressValidation),
	decimal: yup
		.number()
		.typeError("Invalid token Decimal!")
		.min(0, "Token Decimal can't be negative!")
		.max(18, "Token Decimal can't be greater than 18!")
		.required("Token Decimal can't be empty!")
		.integer("Token Decimal should only be integer!"),
	amount: yup
		.number()
		.typeError("Invalid token amount!")
		.required("Token amount can't be empty!")
		.positive("Token amount should be greater than 0!"),
	benificaryAddress: yup
		.string("Invalid benificary address!")
		.required("Benificary address can't be empty!")
		.test("address-test", "Invalid benificary address!", addressValidation),
	timeUnit: yup.number().required(),
	transferTime: yup
		.number()
		.typeError("Invalid time!")
		.required("Transfer time can't be empty!")
		.positive("Transfer time can't be in past!")
		.integer("Transfer time should only be integer!"),
	message: yup.string("Invalid message"),
});

export default createWillSchema;

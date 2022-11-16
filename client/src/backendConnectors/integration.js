import { ethers } from "ethers";
import abi from "./abi/bequesterc20abi.json";
import ERC20 from "./abi/ERC20.json";
import { connectWallet } from "./connectWallet";

export async function approveRequest(address, amt) {
	try {
		const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(address, ERC20, signer);
		let tx = await contract.approve(process.env.REACT_APP_BEQUEST_ADDRESS, amt);
		await tx.wait();
		return { status: true };
	} catch (err) {
		return { status: false, msg: err.msg };
	}
}
export async function signRequest(
	tokenName,
	time,
	amount,
	benificary,
	tokenAddress,
	message,
	videoLink = "google"
) {
	try {
		const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(
			process.env.REACT_APP_BEQUEST_ADDRESS,
			abi,
			signer
		);
		let tx = await contract.signWill(
			tokenName,
			time,
			amount,
			benificary,
			tokenAddress,
			message,
			videoLink
		);
		await tx.wait();
		return { status: true };
	} catch (err) {
		return { status: false, msg: err.msg };
	}
}

export async function getAddress() {
	const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
	await provider.send("eth_requestAccounts", []);
	const signer = provider.getSigner();

	const address = await signer.getAddress();
	return address;
}

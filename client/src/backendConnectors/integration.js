import { ethers } from "ethers";
import abi from "./abi/bequesterc20abi.json";
import ERC20 from "./abi/ERC20.json";
import { Web3Storage } from "web3.storage";
import { connectWallet } from "./connectWallet";
import detectEthereumProvider from "@metamask/detect-provider";

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
		let msg;
		if (err.code === -32603) {
			msg = "User rejected transaction!";
		} else msg = err.message.split("(")[0];

		return { status: false, msg };
	}
}

export async function signRequest(
	tokenName,
	time,
	amount,
	decimal,
	benificary,
	tokenAddress,
	message,
	videoLink = ""
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
			videoLink,
			decimal
		);
		await tx.wait();
		return { status: true };
	} catch (err) {
		let msg;
		if (err.code === -32603) {
			msg = "User rejected transaction!";
		} else msg = err.message.split("(")[0];

		return { status: false, msg };
	}
}

export async function getAddress() {
	const provider = await detectEthereumProvider();
	const delay = (ms) => new Promise((res) => setTimeout(res, ms));
	await delay(500);
	if (provider && provider.selectedAddress) {
		return provider.selectedAddress;
	} else {
		return;
	}
}
export async function getChainId() {
	const provider = await detectEthereumProvider();
	const delay = (ms) => new Promise((res) => setTimeout(res, ms));
	await delay(500);
	if (provider && provider.selectedAddress) {
		return provider.networkVersion;
	} else {
		return false;
	}
}

export async function getView() {
	let obj = [];
	const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
	await provider.send("eth_requestAccounts", []);
	const signer = provider.getSigner();
	const address = await signer.getAddress();
	const contract = new ethers.Contract(
		process.env.REACT_APP_BEQUEST_ADDRESS,
		abi,
		signer
	);
	let data = await contract.getAllUsersId(address);

	for (let i = 0; i < data.length; i++) {
		let id = parseInt(data[i]._hex);
		let will = await contract.willList(id);
		obj.push(will);
	}

	return obj;
}

export async function getBenificary() {
	let obj = [];
	const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
	await provider.send("eth_requestAccounts", []);
	const signer = provider.getSigner();
	const address = await signer.getAddress();
	const contract = new ethers.Contract(
		process.env.REACT_APP_BEQUEST_ADDRESS,
		abi,
		signer
	);
	let data = await contract.getAllBeneficiaryId(address);

	for (let i = 0; i < data.length; i++) {
		let id = parseInt(data[i]._hex, 16);
		let will = await contract.willList(id);
		obj.push(will);
	}

	return obj;
}

export async function storeFiles(files) {
	try {
		const client = makeStorageClient();
		const cid = await client.put(files);
		return { success: true, cid };
	} catch (error) {
		return { success: false, msg: error.msg };
	}
}

function makeStorageClient() {
	return new Web3Storage({
		token: process.env.REACT_APP_FILECOIN_API_KEY,
	});
}

export async function stop(id) {
	try {
		const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const address = await signer.getAddress();
		const contract = new ethers.Contract(
			process.env.REACT_APP_BEQUEST_ADDRESS,
			abi,
			signer
		);
		let tx = await contract.stopWill(id);
		await tx.wait();
		return { success: true };
	} catch (err) {
		let msg;
		if (err.code === -32603) {
			msg = "User rejected transaction!";
		} else msg = err.message.split("(")[0];

		return { status: false, msg };
	}
}

export async function resume(id) {
	try {
		const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		// const address = await signer.execution();
		const contract = new ethers.Contract(
			process.env.REACT_APP_BEQUEST_ADDRESS,
			abi,
			signer
		);
		let tx = await contract.resumeWill(id);
		await tx.wait();
		return { success: true };
	} catch (err) {
		let msg;
		if (err.code === -32603) {
			msg = "User rejected transaction!";
		} else msg = err.message.split("(")[0];

		return { status: false, msg };
	}
}

export async function changeTime(id, days) {
	try {
		const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const address = await signer.getAddress();
		const contract = new ethers.Contract(
			process.env.REACT_APP_BEQUEST_ADDRESS,
			abi,
			signer
		);

		let seconds = days * 24 * 60 * 60;
		let tx = await contract.extendtWill(id, seconds);
		tx.wait();
		return { success: true };
	} catch (err) {
		let msg;
		if (err.code === -32603) {
			msg = "User rejected transaction!";
		} else msg = err.message.split("(")[0];

		return { status: false, msg };
	}
}
export async function execute(id) {
	try {
		const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		const address = await signer.getAddress();
		const contract = new ethers.Contract(
			process.env.REACT_APP_BEQUEST_ADDRESS,
			abi,
			signer
		);
		let tx = await contract.executeWill(id);
		tx.wait();
		return { success: true };
	} catch (err) {
		let msg;
		if (err.code === -32603) {
			msg = "User rejected transaction!";
		} else msg = err.message.split("(")[0];

		return { status: false, msg };
	}
}
export async function getTime(id) {
	const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
	await provider.send("eth_requestAccounts", []);
	const signer = provider.getSigner();
	const address = await signer.getAddress();
	const contract = new ethers.Contract(
		process.env.REACT_APP_BEQUEST_ADDRESS,
		abi,
		signer
	);
	let data = await contract.getTimeReamaing(id);
	return data;
}

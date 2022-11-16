import { ethers } from "ethers";
import abi from "./abi/bequesterc20abi.json";
import ERC20 from "./abi/ERC20.json";
import { Web3Storage } from "web3.storage";
import { connectWallet } from "./connectWallet";

export async function approveRequest(address, amt) {
	try {
		const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
		await provider.send("eth_requestAccounts", []);
		console.log(provider, "	this is chain id");
		provider = JSON.parse(provider);
		console.log(provider._network, "	this is chain id");
		//================================================
		// const {_network} = provider;
		// console.log(provider._isProvider,"	provider status")
		// console.log(provider,"	this is chain id")
		// console.log(provider.provider,"	provider status")
		// console.log(provider._network.chainId,"	this is chain id")
		// console.log(provider._network.chainId,"	this is chain id")
		// if(provider._network.chainId !== 80001)
		// {
		// 	alert("You Are Not On Polygon Mumbai Chain\n Please Switch Chain")
		// 	return
		// }
		//=====================================================
		const signer = provider.getSigner();
		const contract = new ethers.Contract(address, ERC20, signer);
		let tx = await contract.approve(process.env.REACT_APP_BEQUEST_ADDRESS, amt);
		await tx.wait();
		return { status: true };
	} catch (err) {
		console.log(err);
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
		let id = parseInt(data[i]._hex, 16);
		let will = await contract.idToWill(id);
		obj.push(will);
	}
	console.log(obj);
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
		let will = await contract.idToWill(id);
		obj.push(will);
	}
	console.log(obj);
}

export async function storeFiles(files) {
	try {
		const client = makeStorageClient();
		const cid = await client.put(files);
		console.log(cid);
		return cid;
	} catch (error) {
		console.log(error);
	}
}

function makeStorageClient() {
	return new Web3Storage({
		token: process.env.FILECOIN_API_KEY,
	});
}

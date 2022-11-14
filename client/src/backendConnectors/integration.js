import { ethers } from "ethers";
import abi from "./abi/bequesterc20abi.json"
import ERC20 from "./abi/ERC20.json"
import { connectWallet } from "./connectWallet";

export async function approve(address,amt){
try{
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, ERC20, signer);
    let tx = await contract.approve(process.env.REACT_APP_BEQUEST_ADDRESS,amt);
    console.log(tx);
    return tx
}catch(err){
    console.log(err);
    return err;
}

}
export async function sign(tokenName,time,amount,benificary,tokenAddress,message,videoLink){
try{
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(process.env.REACT_APP_BEQUEST_ADDRESS, abi, signer);
    let tx = await contract.signWill(tokenName,time,amount,benificary,tokenAddress,message,videoLink);
    console.log(tx);
    return tx
}catch(err){
    console.log(err);
    return err;
}

}
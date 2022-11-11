import {ethers} from "ethers"


export async function connectWallet(){
     console.log("this is testing")
if(window.ethereum){
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
console.log("Account:", await signer.getAddress());
return true;
}else{
    alert("please install wallet")
}

}
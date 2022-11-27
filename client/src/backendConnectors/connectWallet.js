import {ethers} from "ethers"
import detectEthereumProvider from '@metamask/detect-provider'



export async function connectWallet(){
     console.log("this is testing")
     const Provider = await detectEthereumProvider()
if(Provider){
const provider = new ethers.providers.Web3Provider(Provider, "any");
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
console.log("Account:", await signer.getAddress());
return provider;
}else{
    alert("please install wallet")
}

}
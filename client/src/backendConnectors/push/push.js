import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

export async function push(){

    const PK = '8459ddf5f43d3e6ff998ba257d2af8a5572e090b0a7e80dcfafb5a76de710b1c'; // channel private key
    const Pkey = `0x${PK}`;
    const signer = new ethers.Wallet(Pkey);

    const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 3, // target
        identityType: 2, // direct payload
        notification: {
          title: `first message ]for title`,
          body: `first message for body`
        },
        payload: {
          title: `first message for payload title`,
          body: `first message for payload body`,
          cta: '',
          img: '' 
        },
        recipients: 'eip155:5:0x0593dF99500508bCD240a9718A73c7047589330e', // recipient address
        channel: 'eip155:5:0xbDdCb2B60342cD3cb0bD0389095017F3Cc924E9C', // your channel address
        env: 'staging'
      });


}
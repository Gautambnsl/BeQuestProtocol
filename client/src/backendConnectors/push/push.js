import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

export async function push(status,from,to){

    const PK = '599dc5c961bede8a5c89a66b720b235670d09d82587eca529244ac174f157243'; // channel private key
    const Pkey = `0x${PK}`;
    const signer = new ethers.Wallet(Pkey);

    if(status=="sign"){

    const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 3, // target
        identityType: 2, // direct payload
        notification: {
          title: `Bequest Protocol😊`,
          body: `New message from Bequest Protocol`
        },
        payload: {
          title: `WOW! You Have Been Added As Benificary By ${from} 😊`,
          body: `Go to Bequest Protocol Benifiary's Section to See Details`,
          cta: '',
          img: '' 
        },
        recipients: `eip155:5:${to}`, // recipient address
        channel: 'eip155:5:0xbDdCb2B60342cD3cb0bD0389095017F3Cc924E9C', // your channel address
        env: 'staging'
      });

    }
    if(status=="change"){

    const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 3, // target
        identityType: 2, // direct payload
        notification: {
          title: `Bequest Protocol😊`,
          body: `New message from Bequest Protocol`
        },
        payload: {
          title: `One UPDATE! in your Benificary's Section`,
          body: `Go to Bequest Protocol Benifiary's Section to See Details`,
          cta: '',
          img: '' 
        },
        recipients: `eip155:5:${to}`, // recipient address
        channel: 'eip155:5:0xbDdCb2B60342cD3cb0bD0389095017F3Cc924E9C', // your channel address
        env: 'staging'
      });

    }


}
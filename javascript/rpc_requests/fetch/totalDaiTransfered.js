require("dotenv").config();
const { Alchemy, Network, Utils} = require("alchemy-sdk");
const { firstTopic, secondTopic } = require('./topics');

const topics = [firstTopic(), secondTopic()];

const config = {
    apiKey: process.env.API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

async function totalDaiTransferred(fromBlock, toBlock) {
    
    const logs = await alchemy.core.getLogs({
        address: "0x6b175474e89094c44da98b954eedeac495271d0f", // DAI Contract address.
        fromBlock,
        toBlock,
        topics
    });

    let totalTransfered = BigInt(0);
   
    for(let log of logs){
        let amountHex = log.data;
        let amountDecimal = BigInt(amountHex);
        totalTransfered +=  amountDecimal;
    }

    return totalTransfered
}

totalDaiTransferred("0xff26e1", "0xff2eb0");

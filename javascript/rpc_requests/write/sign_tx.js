const { Alchemy, Network, Wallet, Utils } = require('alchemy-sdk');
require('dotenv').config();

const { API_KEY, PRIVATE_KEY } = process.env;

const settings = {
  apiKey: API_KEY,
  network: Network.AVAX_FUJI,
};
const alchemy = new Alchemy(settings);

let wallet = new Wallet(PRIVATE_KEY);

async function main() {
  const nonce = await alchemy.core.getTransactionCount(wallet.address, 'latest');

  let transaction = {
    to: '0x6dA637Ef038AdE6C1F2a33E66dFf0644102B0181',
    value: Utils.parseEther('0.5'),
    gasLimit: '21000',
    maxPriorityFeePerGas: Utils.parseUnits('5', 'gwei'),
    maxFeePerGas: Utils.parseUnits('20', 'gwei'),
    nonce: nonce,
    type: 2,
    chainId: 43113,
  };

  let rawTransaction = await wallet.signTransaction(transaction);
  
  console.log('Raw tx: ', rawTransaction);
  
  let tx = await alchemy.core.sendTransaction(rawTransaction);
  console.log(`Transaction Hash: ${tx.hash}`)
}

main(); 
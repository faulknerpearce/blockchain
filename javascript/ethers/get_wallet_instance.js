const { ethers } = require('ethers');
require('dotenv').config();

async function get_wallet_instance(privateKey){

     // Load enviromant variables.
     const { ALCHEMY_RPC_URL } = process.env;

     // Initialize JsonRpcProvider
     const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_RPC_URL);
 
     // Initialize wallet
     const wallet = new ethers.Wallet(privateKey, provider);

     return wallet
}

module.exports = get_wallet_instance;
const { ethers } = require('ethers');
const get_wallet_instance = require('./get_wallet_instance'); 
require('dotenv').config();

// Displays the wallet address, balance, and transaction count.
async function viewWallet(privateKey) {
    
    const wallet = await get_wallet_instance(privateKey);
    
    const balance = await wallet.getBalance();

    const transactionCount = await wallet.getTransactionCount();

    console.log(`\nWallet Address: ${wallet.address}`)
    console.log(`Balance: ${ethers.utils.formatEther(balance)} AVAX`);
    console.log(`Transaction Count: ${transactionCount}\n`)
}

viewWallet(process.env.PRIVATE_KEY);